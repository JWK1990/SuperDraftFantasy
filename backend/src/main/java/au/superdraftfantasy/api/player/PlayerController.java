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
            @RequestParam(required = false) String pageSize
    ) {
        return playerService.getPlayersPageByDraftId(draftId, Integer.parseInt(pageNum), Integer.parseInt(pageSize));
    }

    @GetMapping(name = "getPlayerBaseById", path = "/{playerId}")
    public PlayerBaseReadDto getPlayerBaseById(@PathVariable Long playerId) {
        return playerService.getPlayerBaseById(playerId);
    }

    @GetMapping(name = "getPlayerDetailsById", path = "/{playerId}/details")
    public PlayerDetailsReadDto getPlayerDetailsById(@PathVariable Long playerId) {
        return playerService.getPlayerDetailsById(playerId);
    }

}
