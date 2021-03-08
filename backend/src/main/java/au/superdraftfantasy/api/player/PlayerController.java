package au.superdraftfantasy.api.player;

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

    @GetMapping(name = "getPlayersByDraft", path = "/{playerId}")
    public PlayerBaseReadDto getPlayerById(@PathVariable Long playerId) {
        return playerService.getPlayerById(playerId);
    }

    @GetMapping(name = "getPlayersByDraft", path = "/draft/{draftId}")
    public List<PlayerBaseReadDto> getPlayersByDraft(@PathVariable Long draftId) {
        return playerService.getPlayersByDraft(draftId);
    }

}
