package au.superdraftfantasy.api.block;

import au.superdraftfantasy.api.draft.DraftEntity;
import au.superdraftfantasy.api.draft.DraftRepository;
import au.superdraftfantasy.api.draft.DraftStatusEnum;
import au.superdraftfantasy.api.futuresScheduler.FuturesScheduler;
import au.superdraftfantasy.api.futuresScheduler.ScheduledFutureEnum;
import au.superdraftfantasy.api.player.PlayerDetailsReadDto;
import au.superdraftfantasy.api.player.PlayerService;
import au.superdraftfantasy.api.team.*;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Comparator;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class BlockService {

    private final FuturesScheduler futuresScheduler;
    private final TeamService teamService;
    private final SimpMessagingTemplate simpMessagingTemplate;
    private final TeamRepository teamRepository;
    private final DraftRepository draftRepository;
    private final PlayerService playerService;

    public BlockService(
            FuturesScheduler futuresScheduler,
            TeamService teamService,
            SimpMessagingTemplate simpMessagingTemplate,
            TeamRepository teamRepository,
            DraftRepository draftRepository,
            PlayerService playerService
    ) {
        this.futuresScheduler = futuresScheduler;
        this.teamService = teamService;
        this.simpMessagingTemplate = simpMessagingTemplate;
        this.teamRepository = teamRepository;
        this.draftRepository = draftRepository;
        this.playerService = playerService;
    }

    public void startNextRound(BlockDto blockDto, boolean otbUpdateRequired) {
        System.out.println("Start Next Round.");

        Long onTheBlockTeamId = getOnTheBlockTeamId(blockDto.getDraftId(), otbUpdateRequired);
        blockDto.setOnTheBlockTeamId(onTheBlockTeamId);

        Long endTime = Instant.now().plusSeconds(blockDto.getOnTheBlockTimer()).toEpochMilli();
        blockDto.setEndTime(endTime);

        blockDto.setPrice(1L);

        this.simpMessagingTemplate.convertAndSend("/draft/rounds", blockDto);

        // After sending to FE without a bidder, set bidder in case of AutoAddToBlock.
        blockDto.setBidderTeamId(onTheBlockTeamId);

        // Start automated AddToBlock.
        futuresScheduler.startScheduledFuture(
                ScheduledFutureEnum.AUTO_ADD_TO_BLOCK,
                blockDto,
                endTime,
                this::autoAddToBlock
        );
    }

    public void stopDraft(Long draftId, String status) {
        System.out.println("Draft Stopped.");
        // Stop AutoAddToBlock or AutoDraftPlayer.
        futuresScheduler.stopScheduledFutures(draftId);
        this.simpMessagingTemplate.convertAndSend("/draft/stopDrafts", status);
    }

    /**
     * Called when a User manually adds a Player to the Block or places a Bid.
     *
     * @param blockDto
     * @return
     */
    public BlockDto processBlockEvent(BlockDto blockDto, boolean isAddToBlock) {
        System.out.println("Process Manual AddToBlock Or Bid.");
        // Stop AutoAddToBlock or AutoDraftPlayer.
        futuresScheduler.stopScheduledFutures(blockDto.getDraftId());

        Long endTime = Instant.now().plusSeconds(blockDto.getBidTimer()).toEpochMilli();
        blockDto.setEndTime(endTime);

        // Start AutoDraftPlayer.
        futuresScheduler.startScheduledFuture(
                ScheduledFutureEnum.AUTO_DRAFT_PLAYER,
                blockDto,
                endTime,
                this::autoDraftPlayerAndStartNextRound
        );

        if(isAddToBlock) {
            // Broadcast Player Details. Do this at the end to ensure it doesn't hold up bidding.
            Long playerId = blockDto.getPlayerId();
            if(playerId != null) {
                PlayerDetailsReadDto playerReadDto = playerService.getPlayerDetailsById(playerId, blockDto.getDraftId());
                if(playerReadDto != null) {
                    this.simpMessagingTemplate.convertAndSend("/draft/playerDetails", playerReadDto);
                }
            }
        }
        return blockDto;
    }

    private void autoDraftPlayerAndStartNextRound(BlockDto blockDto) {
        System.out.println("AutoDraftAndStartNextRound");
        TeamReadDto teamReadDto = teamService.addPlayerToTeam(blockDto);
        this.simpMessagingTemplate.convertAndSend("/draft/teams", teamReadDto);

        Long draftId = blockDto.getDraftId();
        List<TeamEntity> teamList = teamRepository.findAllByDraftId(draftId);
        boolean isDraftComplete = teamList.stream()
                .allMatch(team -> team.getStatus().equals(TeamStatusEnum.READY));
        if(isDraftComplete) {
            DraftEntity draft = draftRepository.findById(draftId)
                    .orElseThrow(() -> new NoSuchElementException("Draft with id " + draftId + " not found."));
            draft.setStatus(DraftStatusEnum.COMPLETE);
            draftRepository.save(draft);
            stopDraft(draftId, DraftStatusEnum.COMPLETE.name());
        } else {
            startNextRound(blockDto, true);
        }
    }

    private void autoAddToBlock(BlockDto blockDto) {
        System.out.println("Run AutoAddToBlock" + blockDto);

        Long bestAvailablePlayerId = teamService.getBestAvailablePlayerForTeam(blockDto.getDraftId(), blockDto.getOnTheBlockTeamId());
        blockDto.setPlayerId(bestAvailablePlayerId);
        System.out.println("Best available player ID " + bestAvailablePlayerId);

        // Broadcast AddToBlock to start bidding in FE.
        Long endTime = Instant.now().plusSeconds(blockDto.getBidTimer()).toEpochMilli();
        blockDto.setEndTime(endTime);
        this.simpMessagingTemplate.convertAndSend("/draft/addToBlocks", blockDto);

        // Schedule AutoDraftPlayer future.
        futuresScheduler.startScheduledFuture(
                ScheduledFutureEnum.AUTO_DRAFT_PLAYER,
                blockDto,
                endTime,
                this::autoDraftPlayerAndStartNextRound
        );

        // Broadcast Player Details. Do this at the end to ensure it doesn't hold up bidding.
        if(bestAvailablePlayerId != null) {
            PlayerDetailsReadDto playerReadDto = playerService.getPlayerDetailsById(bestAvailablePlayerId, blockDto.getDraftId());
            if(playerReadDto != null) {
                this.simpMessagingTemplate.convertAndSend("/draft/playerDetails", playerReadDto);
            }
        }

    }

    private Long getOnTheBlockTeamId(Long draftId, boolean otbUpdateRequired) {
        Long onTheBlockTeamId;
        if(otbUpdateRequired) {
            onTheBlockTeamId = updateOnTheBlockTeam(draftId);
        } else {
            TeamEntity otbTeam = teamRepository.findDistinctByDraftIdAndOnTheBlock(draftId, true)
                    .orElseThrow(() -> new NoSuchElementException("No On The Block Coach Found."));
            onTheBlockTeamId = otbTeam.getId();
        }
        return onTheBlockTeamId;
    }

    private Long updateOnTheBlockTeam(Long draftId) {
        List<TeamEntity> teamList = teamRepository.findAllByDraftId(draftId);
        teamList.sort(Comparator.comparing(TeamEntity::getOrderIndex));
        Long currentOrderIndex = unsetCurrentOtbTeamAndGetOrderIndex(teamList);
        return setNextOnTheBlockTeam(teamList, currentOrderIndex);
    }

    private Long unsetCurrentOtbTeamAndGetOrderIndex(List<TeamEntity> teamList) {
        TeamEntity currentOtbTeam = teamList.stream()
                .filter(TeamEntity::isOnTheBlock)
                .findAny()
                .orElseThrow(() -> new NoSuchElementException("OnTheBlock Team Not Found."));
        currentOtbTeam.setOnTheBlock(false);
        teamRepository.save(currentOtbTeam);
        return currentOtbTeam.getOrderIndex();
    }

    private Long setNextOnTheBlockTeam(List<TeamEntity> teamList, Long currentOrderIndex) {
        Long nextOrderIndex = currentOrderIndex + 1;
        TeamEntity nextOtbTeam = teamList.stream()
                .filter(team -> (
                        team.getOrderIndex() >= nextOrderIndex &&
                                team.getStatus().equals(TeamStatusEnum.IN_SETUP)
                )).findFirst()
                .orElse(teamList.stream()
                        .filter(team -> team.getStatus().equals(TeamStatusEnum.IN_SETUP))
                        .findFirst()
                        .orElseThrow(() -> new NoSuchElementException("All Teams are full."))
                );
        nextOtbTeam.setOnTheBlock(true);
        teamRepository.save(nextOtbTeam);
        return nextOtbTeam.getId();
    }
}
