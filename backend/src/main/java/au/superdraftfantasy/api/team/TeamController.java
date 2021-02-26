package au.superdraftfantasy.api.team;

import au.superdraftfantasy.api.teamPlayerJoin.MyTeamPositionReadDto;
import au.superdraftfantasy.api.teamPlayerJoin.MyTeamPositionWriteDto;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/teams")
public class TeamController {

    private final TeamService teamService;

    public TeamController(TeamService teamService) {
        this.teamService = teamService;
    }

    @PutMapping(name = "updateMyTeamPositions", path = "{teamID}/myTeamPositions")
    public MyTeamPositionReadDto updateMyTeamPositions(
            @PathVariable final Long teamID,
            @RequestBody final List<MyTeamPositionWriteDto> updatedMyTeamPositions
    ) {
        return teamService.updateMyTeamPosition(teamID, updatedMyTeamPositions);
    }

}
