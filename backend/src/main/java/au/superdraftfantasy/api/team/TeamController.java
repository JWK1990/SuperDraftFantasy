package au.superdraftfantasy.api.team;

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
public class TeamController {

    private final TeamService teamService;
    private final UserRepository userRepository;
    private final DraftRepository draftRepository;

    public TeamController(
        TeamService teamService,
        UserRepository userRepository,
        DraftRepository draftRepository
        ) {
        this.teamService = teamService;
        this.userRepository = userRepository;
        this.draftRepository = draftRepository;
    }

    @Autowired
    private ModelMapper modelMapper;

    @PostMapping(name = "createTeam", path = "/create-team")
    public Long createUser(@RequestBody final TeamDTO teamDTO) throws ParseException {
        TeamEntity teamEntity = convertToEntity(teamDTO);
        return teamService.createTeam(teamEntity);
    }

    private TeamEntity convertToEntity(TeamDTO teamDTO) throws ParseException {
        DraftEntity draft = draftRepository.findById(teamDTO.getDraftId()).get();

        TeamEntity teamEntity = modelMapper.map(teamDTO, TeamEntity.class);
        teamEntity.setUser(userRepository.findById(1L).get());
        teamEntity.setDraft(draft);
        teamEntity.setBudget(draft.getBudget());
        return teamEntity;
    }

}
