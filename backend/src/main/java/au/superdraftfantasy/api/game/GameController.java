package au.superdraftfantasy.api.game;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/games")
public class GameController {

    private final GameService gameService;

    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    @GetMapping(name = "getGamesByPlayerId", path = "/{playerId}")
    public List<IGameBase> getGamesByPlayerId(
            @PathVariable Long playerId
    ) {
        return gameService.getGamesByPlayerId(playerId);
    }

}
