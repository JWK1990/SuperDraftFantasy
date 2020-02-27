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
    public List<PlayerReadDto> getAllPlayers() {
        return playerService.getAllPlayers();
    }

}
