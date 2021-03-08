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
    public List<PlayerBaseInterface> getAllPlayers() {
        return playerService.getAllPlayers();
    }

    @GetMapping(name = "getPlayerById", path = "/{playerId}")
    public PlayerBaseReadDto getPlayerById(@PathVariable Long playerId) {
        return playerService.getPlayerById(playerId);
    }

    @GetMapping(name = "getAllPlayersByDraft", path = "/draft/{draftId}")
    public List<PlayerBaseReadDto> getAllPlayersByDraft(
            @PathVariable Long draftId
    ) {
        return playerService.getAllPlayersByDraft(draftId);
    }

    @GetMapping(name = "getPlayersByDraft", path = "/draft/{draftId}/page")
    public Page<PlayerBaseInterface> getPlayersByDraft(
            @PathVariable Long draftId,
            @RequestParam(required = false) String startIndex,
            @RequestParam(required = false) String endIndex
    ) {
        return playerService.getPlayersByDraft(draftId, Integer.parseInt(startIndex), Integer.parseInt(endIndex));
    }

}
