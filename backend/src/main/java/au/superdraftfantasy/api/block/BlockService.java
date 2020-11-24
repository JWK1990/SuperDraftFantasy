package au.superdraftfantasy.api.block;

import au.superdraftfantasy.api.draft.DraftRepository;
import au.superdraftfantasy.api.futuresScheduler.FuturesScheduler;
import au.superdraftfantasy.api.futuresScheduler.ScheduledFutureEnum;
import au.superdraftfantasy.api.player.PlayerService;
import au.superdraftfantasy.api.team.TeamEntity;
import au.superdraftfantasy.api.team.TeamReadDto;
import au.superdraftfantasy.api.team.TeamRepository;
import au.superdraftfantasy.api.team.TeamService;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.NoSuchElementException;

@Service
public class BlockService {

    private final FuturesScheduler futuresScheduler;
    private final TeamService teamService;
    private final SimpMessagingTemplate simpMessagingTemplate;
    private final PlayerService playerService;
    private final TeamRepository teamRepository;
    private final DraftRepository draftRepository;

    public BlockService(
            FuturesScheduler futuresScheduler,
            TeamService teamService,
            SimpMessagingTemplate simpMessagingTemplate,
            PlayerService playerService,
            TeamRepository teamRepository,
            DraftRepository draftRepository
    ) {
        this.futuresScheduler = futuresScheduler;
        this.teamService = teamService;
        this.simpMessagingTemplate = simpMessagingTemplate;
        this.playerService = playerService;
        this.teamRepository = teamRepository;
        this.draftRepository = draftRepository;
    }

    public void startNextRound(BlockDto blockDto, boolean otbUpdateRequired) {
        System.out.println("Start Next Round.");
        Long onTheBlockTeamId = getOnTheBlockTeamId(blockDto.getDraftId(), otbUpdateRequired);
        blockDto.setOnTheBlockTeamId(onTheBlockTeamId);

        Long bestAvailablePlayerId = playerService.getBestAvailablePlayer(blockDto.getDraftId());
        blockDto.setPlayerId(bestAvailablePlayerId);

        LocalDateTime endTime = LocalDateTime.now().plusSeconds(blockDto.getOnTheBlockTimer());
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

    public void stopDraft(Long draftId) {
        System.out.println("Draft Stopped.");
        // Stop AutoAddToBlock or AutoDraftPlayer.
        futuresScheduler.stopScheduledFutures(draftId);
        this.simpMessagingTemplate.convertAndSend("/draft/stopDrafts", draftId);
    }

    /**
     * Called when a User manually adds a Player to the Block or places a Bid.
     *
     * @param blockDto
     * @return
     */
    public BlockDto processBlockEvent(BlockDto blockDto) {
        System.out.println("Process Manual AddToBlock Or Bid.");
        // Stop AutoAddToBlock or AutoDraftPlayer.
        futuresScheduler.stopScheduledFutures(blockDto.getDraftId());

        LocalDateTime endTime = LocalDateTime.now().plusSeconds(blockDto.getBidTimer());
        blockDto.setEndTime(endTime);

        // Start AutoDraftPlayer.
        futuresScheduler.startScheduledFuture(
                ScheduledFutureEnum.AUTO_DRAFT_PLAYER,
                blockDto,
                endTime,
                this::autoDraftPlayerAndStartNextRound
        );

        return blockDto;
    }

    private void autoDraftPlayerAndStartNextRound(BlockDto blockDto) {
        System.out.println("AutoDraftAndStartNextRound");
        TeamReadDto teamReadDto = teamService.addPlayerToTeam(blockDto);
        this.simpMessagingTemplate.convertAndSend("/draft/teams", teamReadDto);
        startNextRound(blockDto, true);
    }

    private void autoAddToBlock(BlockDto blockDto) {
        System.out.println("Run AutoAddToBlock" + blockDto);

        // Broadcast AddToBlock to start bidding in FE.
        LocalDateTime endTime = LocalDateTime.now().plusSeconds(blockDto.getBidTimer());
        blockDto.setEndTime(endTime);
        this.simpMessagingTemplate.convertAndSend("/draft/addToBlocks", blockDto);

        // Schedule AutoDraftPlayer future.
        futuresScheduler.startScheduledFuture(
                ScheduledFutureEnum.AUTO_DRAFT_PLAYER,
                blockDto,
                endTime,
                this::autoDraftPlayerAndStartNextRound
        );
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
        TeamEntity currentOtbTeam = teamRepository.findDistinctByDraftIdAndOnTheBlock(draftId, true)
                .orElseThrow(() -> new NoSuchElementException("No On The Block Coach Found."));
        currentOtbTeam.setOnTheBlock(false);
        teamRepository.save(currentOtbTeam);

        Long nextOrderIndex = (currentOtbTeam.getOrderIndex() + 1);
        TeamEntity nextOtbTeam = teamRepository.findDistinctByDraftIdAndOrderIndex(draftId, nextOrderIndex)
                .orElse(teamRepository.findDistinctByDraftIdAndOrderIndex(draftId, 0L)
                        .orElseThrow(() -> new NoSuchElementException("No On The Block Team Found."))
                );
        nextOtbTeam.setOnTheBlock(true);
        teamRepository.save(nextOtbTeam);

        return nextOtbTeam.getId();
    }

}
