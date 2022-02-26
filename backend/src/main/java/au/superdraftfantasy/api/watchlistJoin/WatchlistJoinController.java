package au.superdraftfantasy.api.watchlistJoin;

import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/watchlist")
public class WatchlistJoinController {

    private final WatchlistJoinService watchlistJoinService;

    public WatchlistJoinController(WatchlistJoinService watchlistJoinService) {
        this.watchlistJoinService = watchlistJoinService;
    }

    @GetMapping(name = "getWatchlistPlayerIdSetForTeamId")
    private Set<Long> getWatchlistPlayerIdSetForTeamId(
            @RequestParam final Long teamId
    ) {
        return watchlistJoinService.getWatchlistPlayerIdSetForTeamId(teamId);
    }

    @PutMapping(name = "addPlayerToWatchlistForTeamId", path="/add")
    private Set<Long> addPlayerToWatchlistForTeamId(
            @RequestParam final Long teamId,
            @RequestParam final Long playerId
    ) {
        return watchlistJoinService.addPlayerToWatchlistForTeamId(teamId, playerId);
    }

    @PutMapping(name = "removePlayerToWatchlistForTeamId", path="/remove")
    private Set<Long> removePlayerToWatchlistForTeamId(
            @RequestParam final Long teamId,
            @RequestParam final Long playerId
    ) {
        return watchlistJoinService.removePlayerFromWatchlistForTeamId(teamId, playerId);
    }

}
