package au.superdraftfantasy.api.team;

import org.springframework.web.bind.annotation.*;

import au.superdraftfantasy.api.draft.DraftEntity;
import au.superdraftfantasy.api.draft.DraftRepository;
import au.superdraftfantasy.api.user.UserRepository;

import java.text.ParseException;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping(path = "/teams")
public class TeamController {

    private final TeamService teamService;
    private final UserRepository userRepository;
    private final DraftRepository draftRepository;
    private final ModelMapper modelMapper;

    public TeamController(
            TeamService teamService,
            UserRepository userRepository,
            DraftRepository draftRepository,
            ModelMapper modelMapper) {
        this.teamService = teamService;
        this.userRepository = userRepository;
        this.draftRepository = draftRepository;
        this.modelMapper = modelMapper;
    }

    @PostMapping(name = "draftPlayer", path = "/players/{playerID}/draft")
    public Long draftPlayer(@PathVariable final Long playerID, @RequestBody final TeamDTO teamDTO) {
        TeamEntity teamEntity = convertToEntity(teamDTO);
        return teamService.draftPlayer(teamEntity, playerID);
    }

    private TeamEntity convertToEntity(TeamDTO teamDTO) {
        TeamEntity teamEntity = modelMapper.map(teamDTO, TeamEntity.class);
        DraftEntity draft = draftRepository.findById(teamDTO.getDraftId()).get();
        teamEntity.setBudget(draft.getBudget());
        return teamEntity;
    }

}
