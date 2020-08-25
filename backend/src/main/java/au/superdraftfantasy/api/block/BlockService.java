package au.superdraftfantasy.api.block;

import au.superdraftfantasy.api.draft.DraftEntity;
import au.superdraftfantasy.api.draft.DraftRepository;
import au.superdraftfantasy.api.futuresScheduler.FuturesScheduler;
import au.superdraftfantasy.api.futuresScheduler.ScheduledFutureEnum;
import au.superdraftfantasy.api.player.PlayerInDraftReadDto;
import au.superdraftfantasy.api.player.PlayerService;
import au.superdraftfantasy.api.team.TeamEntity;
import au.superdraftfantasy.api.team.TeamReadDto;
import au.superdraftfantasy.api.team.TeamService;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

@Service
public class BlockService {

    ModelMapper modelMapper;
    FuturesScheduler futuresScheduler;
    TeamService teamService;
    SimpMessagingTemplate simpMessagingTemplate;
    DraftRepository draftRepository;
    PlayerService playerService;

    public BlockService(
            ModelMapper modelMapper,
            FuturesScheduler futuresScheduler,
            TeamService teamService,
            SimpMessagingTemplate simpMessagingTemplate,
            DraftRepository draftRepository,
            PlayerService playerService
    ) {
        this.modelMapper = modelMapper;
        this.futuresScheduler = futuresScheduler;
        this.teamService = teamService;
        this.simpMessagingTemplate = simpMessagingTemplate;
        this.draftRepository = draftRepository;
        this.playerService = playerService;
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
        startNextRound(blockDto.getDraftId());
    }

    public void startNextRound(Long draftId) {
        Long teamId = 8L;
        Long playerId = getBestAvailablePlayer(draftId);
        LocalDateTime endTime = LocalDateTime.now().plusSeconds(10L);
        Long onTheBlockTimer = 10L;
        Long bidTimer = 5L;

        // TODO: Calculate onTheBlockCoachId.
        BlockDto updatedBlock = new BlockDto(draftId, playerId, teamId, null, 1L, onTheBlockTimer, bidTimer, endTime);

        // Start automated AddToBlock.
        futuresScheduler.startScheduledFuture(
                ScheduledFutureEnum.AUTO_ADD_TO_BLOCK,
                updatedBlock,
                endTime,
                this::autoAddToBlock
        );

        this.simpMessagingTemplate.convertAndSend("/draft/rounds", updatedBlock);
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

    private Long getOnTheBlockCoachId(DraftEntity draft) {
        int currentIndex = 0;
        AtomicInteger draftedPlayerCount = new AtomicInteger(0);
        List<TeamEntity> teamList = draft.getTeams();
        teamList.forEach(coach -> draftedPlayerCount.addAndGet(coach.getTeamPlayerJoins().size()));
        if (draftedPlayerCount.get() > 0) {
            int currentRound = (int) Math.floor(draftedPlayerCount.get() / teamList.size());
            currentIndex = (int) Math.ceil(draftedPlayerCount.get() - (currentRound * teamList.size()));
        }
        return teamList.get(currentIndex).getId();
    }

    private Long getBestAvailablePlayer(Long draftId) {
        List<PlayerInDraftReadDto> playerList = playerService.getPlayersByDraft(draftId);
        PlayerInDraftReadDto bestAvailablePlayer = playerList.stream().filter(PlayerInDraftReadDto::isAvailable)
                .findFirst()
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Could not fetch best available Player."));
        return bestAvailablePlayer.getId();
    }

}
