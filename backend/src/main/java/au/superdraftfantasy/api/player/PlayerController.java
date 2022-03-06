package au.superdraftfantasy.api.player;

import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/players")
public class PlayerController {

    private final PlayerService playerService;

    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    @GetMapping(name = "getAllPlayers")
    public List<IPlayerBase> getAllPlayers() {
        return playerService.getAllPlayers();
    }

    @GetMapping(name = "getAllPlayersByDraft", path = "/draft/{draftId}")
    public List<PlayerBaseReadDto> getAllPlayersByDraft(
            @PathVariable Long draftId
    ) {
        return playerService.getAllPlayersByDraft(draftId);
    }

    @GetMapping(name = "getPlayersPageByDraftId", path = "/draft/{draftId}/page")
    public Page<PlayerBaseReadDto> getPlayersPageByDraftId(
            @PathVariable Long draftId,
            @RequestParam(required = false) String pageNum,
            @RequestParam(required = false) String pageSize,
            @RequestParam(required = false) String search,
            @RequestParam(required = false) String position,
            @RequestParam(required = false) Boolean isWatchlistOn
    ) {
        return playerService.getPlayersPageByDraftId(
                draftId,
                Integer.parseInt(pageNum),
                Integer.parseInt(pageSize),
                search,
                position,
                isWatchlistOn
        );
    }

    @GetMapping(name = "getDraftedPlayersPage", path = "/draft/{draftId}/page/drafted")
    public Page<PlayerBaseReadDto> getDraftedPlayersPage(
            @PathVariable Long draftId,
            @RequestParam(required = false) String pageNum,
            @RequestParam(required = false) String pageSize,
            @RequestParam(required = false) String search,
            @RequestParam(required = false) String position
    ) {
        return playerService.getDraftedPlayersPage(
                draftId,
                Integer.parseInt(pageNum),
                Integer.parseInt(pageSize),
                search,
                position
        );
    }

    @GetMapping(name = "getAvailablePlayersPage", path = "/draft/{draftId}/page/available")
    public Page<PlayerBaseReadDto> getAvailablePlayersPage(
            @PathVariable Long draftId,
            @RequestParam(required = false) String pageNum,
            @RequestParam(required = false) String pageSize,
            @RequestParam(required = false) String search,
            @RequestParam(required = false) String position,
            @RequestParam(required = false) Boolean isWatchlistOn,
            @RequestParam(required = false) String teamId
    ) {
        return playerService.getAvailablePlayersPage(
                draftId,
                Integer.parseInt(pageNum),
                Integer.parseInt(pageSize),
                search,
                position,
                isWatchlistOn,
                Long.parseLong(teamId)
        );
    }

    @GetMapping(name = "getPlayerBaseById", path = "/{playerId}")
    public PlayerBaseReadDto getPlayerBaseById(
            @PathVariable Long playerId,
            @RequestParam String draftId
    ) {
        return playerService.getPlayerBaseById(playerId, Long.decode(draftId));
    }

    @GetMapping(name = "getPlayerDetailsById", path = "/{playerId}/details")
    public PlayerDetailsReadDto getPlayerDetailsById(
            @PathVariable Long playerId,
            @RequestParam String draftId
    ) {
        return playerService.getPlayerDetailsById(playerId, Long.decode(draftId));
    }

}
