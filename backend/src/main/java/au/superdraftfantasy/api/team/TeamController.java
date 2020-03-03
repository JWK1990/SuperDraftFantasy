package au.superdraftfantasy.api.team;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/teams")
public class TeamController {

    private final TeamService teamService;

    public TeamController(TeamService teamService) {
        this.teamService = teamService;
    }

    @PutMapping(name = "addPlayer", path = "{teamID}/players/add/{playerID}")
    public TeamReadDto addPlayer(
        @PathVariable final Long teamID,
        @PathVariable final Long playerID,
        @RequestBody final TeamAddPlayerDto teamAddPlayerDto
    ) {
        return teamService.addPlayer(teamID, playerID, teamAddPlayerDto.getSalePrice());
    }

    @PutMapping(name = "updateMyTeamPosition", path = "{teamID}/players/{playerID}/myTeamPosition/{myTeamPosition}")
    public String updateMyTeamPosition(
        @PathVariable final Long teamID,
        @PathVariable final Long playerID,
        @PathVariable final String myTeamPosition
    ) {
        return teamService.updateMyTeamPosition(teamID, playerID, myTeamPosition);
    }

}
