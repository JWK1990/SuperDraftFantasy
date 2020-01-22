package au.superdraftfantasy.api.team;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/teams")
public class TeamController {

    private final TeamService teamService;

    public TeamController(TeamService teamService) {
        this.teamService = teamService;
    }

    @PutMapping(name = "addPlayer", path = "{teamID}/players/add/{playerID}")
    public Long draftPlayer(@PathVariable final Long teamID, @PathVariable final Long playerID) {
        return teamService.addPlayer(teamID, playerID);
    }

}
