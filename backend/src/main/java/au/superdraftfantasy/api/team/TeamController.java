package au.superdraftfantasy.api.team;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/teams")
public class TeamController {

    private final TeamService teamService;

    public TeamController(TeamService teamService) {
        this.teamService = teamService;
    }

    @PostMapping(name = "createTeam")
    public Long createTeam(@RequestBody final TeamWriteDto teamWriteDto) {
        return teamService.createTeam(teamWriteDto);
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
