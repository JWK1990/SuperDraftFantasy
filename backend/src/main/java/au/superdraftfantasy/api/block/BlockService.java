package au.superdraftfantasy.api.block;

import au.superdraftfantasy.api.draft.DraftService;
import au.superdraftfantasy.api.futuresScheduler.FuturesScheduler;
import au.superdraftfantasy.api.futuresScheduler.ScheduledFutureEnum;
import au.superdraftfantasy.api.player.PlayerService;
import au.superdraftfantasy.api.team.TeamReadDto;
import au.superdraftfantasy.api.team.TeamService;
import org.modelmapper.ModelMapper;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class BlockService {

    ModelMapper modelMapper;
    FuturesScheduler futuresScheduler;
    TeamService teamService;
    SimpMessagingTemplate simpMessagingTemplate;
    PlayerService playerService;
    DraftService draftService;

    public BlockService(
            ModelMapper modelMapper,
            FuturesScheduler futuresScheduler,
            TeamService teamService,
            SimpMessagingTemplate simpMessagingTemplate,
            PlayerService playerService,
            DraftService draftService
    ) {
        this.modelMapper = modelMapper;
        this.futuresScheduler = futuresScheduler;
        this.teamService = teamService;
        this.simpMessagingTemplate = simpMessagingTemplate;
        this.playerService = playerService;
        this.draftService = draftService;
    }

    public BlockDto startNextRound(BlockDto blockDto) {
        Long onTheBlockTeamId = draftService.updateOnTheBlockTeam(blockDto.getDraftId());
        blockDto.setTeamId(onTheBlockTeamId);

        Long bestAvailablePlayerId = playerService.getBestAvailablePlayer(blockDto.getDraftId());
        blockDto.setPlayerId(bestAvailablePlayerId);

        LocalDateTime endTime = LocalDateTime.now().plusSeconds(blockDto.getOnTheBlockTimer());
        blockDto.setEndTime(endTime);

        blockDto.setPrice(1L);

        // Start automated AddToBlock.
        futuresScheduler.startScheduledFuture(
                ScheduledFutureEnum.AUTO_ADD_TO_BLOCK,
                blockDto,
                endTime,
                this::autoAddToBlock
        );

        this.simpMessagingTemplate.convertAndSend("/draft/rounds", blockDto);
        return blockDto;
    }

    public Long stopDraft(Long draftId) {
        System.out.println("Draft Stopped.");
        // Stop AutoAddToBlock or AutoDraftPlayer.
        futuresScheduler.stopScheduledFutures(draftId);
        return draftId;
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
        startNextRound(blockDto);
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



}
