package au.superdraftfantasy.api.team;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import au.superdraftfantasy.api.draft.DraftEntity;
import au.superdraftfantasy.api.draft.DraftRepository;
import au.superdraftfantasy.api.user.UserRepository;

import java.text.ParseException;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

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

    @PostMapping(name = "createTeam")
    public Long createTeam(@RequestBody final TeamDTO teamDTO) {
        TeamEntity teamEntity = convertToEntity(teamDTO);
        return teamService.createTeam(teamEntity);
    }

    private TeamEntity convertToEntity(TeamDTO teamDTO) {
        TeamEntity teamEntity = modelMapper.map(teamDTO, TeamEntity.class);
        DraftEntity draft = draftRepository.findById(teamDTO.getDraftId()).get();
        teamEntity.setBudget(draft.getBudget());
        return teamEntity;
    }

}
