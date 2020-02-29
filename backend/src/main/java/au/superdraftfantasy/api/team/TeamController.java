package au.superdraftfantasy.api.team;

import au.superdraftfantasy.api.draft.DraftWriteDto;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/teams")
public class TeamController {

    private final TeamService teamService;

    public TeamController(TeamService teamService) {
        this.teamService = teamService;
    }

    @PutMapping(name = "addPlayer", path = "{teamID}/players/add/{playerID}")
    public TeamReadDto addPlayer(@PathVariable final Long teamID, @PathVariable final Long playerID, @RequestBody final TeamAddPlayerDto teamAddPlayerDto) {
        return teamService.addPlayer(teamID, playerID, teamAddPlayerDto.getSalePrice());
    }

}
