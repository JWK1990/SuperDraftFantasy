package au.superdraftfantasy.api.coach;

import java.util.Arrays;
import java.util.List;

import javax.validation.constraints.NotBlank;

import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import au.superdraftfantasy.api.draft.DraftEntity;
import au.superdraftfantasy.api.draft.DraftRepository;
import au.superdraftfantasy.api.team.TeamEntity;
import au.superdraftfantasy.api.user.UserEntity;
import au.superdraftfantasy.api.user.UserRepository;


@Service
public class CoachService {

    private final ModelMapper modelMapper;
    private final DraftRepository draftRepository;
    private final UserRepository userRepository;
    private final CoachRepository coachRepository;

    public CoachService(ModelMapper modelMapper, DraftRepository draftRepository, UserRepository userRepository, CoachRepository coachRepository) {
        this.modelMapper = modelMapper;
        this.draftRepository = draftRepository;
        this.userRepository = userRepository;
        this.coachRepository = coachRepository;
    }

    /**
     * Create a CoachEntity from a provided CoachDTO.
     * @param coachDTO
     * @return
     */
    public Long createCoach(@NotBlank final CoachDTO coachDTO) {
        CoachEntity coach = convertToEntity(coachDTO);
        checkForSpaceInDraft(coach);
        checkForExistingCoach(coach);
        createTeam(coach);
        return coachRepository.save(coach).getId();
    }

    private CoachEntity convertToEntity(CoachDTO coachDTO) {
        CoachEntity coach = modelMapper.map(coachDTO, CoachEntity.class);
        DraftEntity draft = draftRepository.findById(coachDTO.getDraftId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Draft with ID '" + coachDTO.getDraftId() + "'Not Found."));
        coach.setDraft(draft);
        coach.setUser(getCurrentUser());
        coach.setType(CoachTypeEnum.MEMBER);
        return coach;
    }

    private UserEntity getCurrentUser() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("User With Username '" + username + "' Not Found."));
    }

    private void checkForSpaceInDraft(CoachEntity coach) {
        Long maxNumOfTeams = coach.getDraft().getNumOfTeams();
        Integer currentNumOfTeams = coach.getDraft().getCoaches().size();
        if(currentNumOfTeams >= maxNumOfTeams) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "The Draft is already full.");
        }
    }

    private void checkForExistingCoach(CoachEntity coach) {
        List<CoachEntity> existingCoaches = coach.getDraft().getCoaches();
        Boolean coachAlreadyExists = existingCoaches.stream().anyMatch(existingCoach -> existingCoach.getUser().getId() == coach.getUser().getId());
        if(coachAlreadyExists) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User with ID '" + coach.getUser().getId() + "'Already Exists In Draft with ID '" + coach.getDraft().getId() + "'.");
        }
    }

    private void createTeam(CoachEntity coach) {
        String defaultTeamName = generateDefaultTeamName(coach);
        Long initialBudget = coach.getDraft().getBudget();
        TeamEntity team = new TeamEntity(null, defaultTeamName, initialBudget, coach, Arrays.asList(), null, null);
        coach.setTeam(team);
    }

    private String generateDefaultTeamName(CoachEntity coach) {
        String username = coach.getUser().getUsername();
        return username + "'s Team";
    }

}