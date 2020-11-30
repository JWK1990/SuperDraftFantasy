package au.superdraftfantasy.api.team;

import au.superdraftfantasy.api.position.PositionTypeEnum;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/teams")
public class TeamController {

    private final TeamService teamService;

    public TeamController(TeamService teamService) {
        this.teamService = teamService;
    }

    @PutMapping(name = "updateMyTeamPosition", path = "{teamID}/players/{playerID}/myTeamPosition/{myTeamPosition}")
    public PositionTypeEnum updateMyTeamPosition(
            @PathVariable final Long teamID,
            @PathVariable final Long playerID,
            @PathVariable final PositionTypeEnum myTeamPosition
    ) {
        return teamService.updateMyTeamPosition(teamID, playerID, myTeamPosition);
    }

}
