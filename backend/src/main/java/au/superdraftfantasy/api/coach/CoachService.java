package au.superdraftfantasy.api.coach;

import au.superdraftfantasy.api.draft.DraftEntity;
import au.superdraftfantasy.api.draft.DraftRepository;
import au.superdraftfantasy.api.team.TeamEntity;
import au.superdraftfantasy.api.user.UserEntity;
import au.superdraftfantasy.api.user.UserRepository;
import org.hibernate.Hibernate;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.constraints.NotBlank;
import java.util.HashSet;
import java.util.Set;


@Service
public class CoachService {

    private final ModelMapper modelMapper;
    private final CoachRepository coachRepository;
    private final DraftRepository draftRepository;
    private final UserRepository userRepository;

    public CoachService(ModelMapper modelMapper, DraftRepository draftRepository, UserRepository userRepository, CoachRepository coachRepository) {
        this.modelMapper = modelMapper;
        this.coachRepository = coachRepository;
        this.draftRepository = draftRepository;
        this.userRepository = userRepository;
    }

    /**
     * Create a CoachEntity from a provided CoachDTO.
     * @param coachDTO
     * @return
     */
    public Long createCoach(@NotBlank final CoachDTO coachDTO) {
        CoachEntity coach = convertToEntity(coachDTO);
        setUser(coach);
        checkForExistingCoach(coach);
        setCoachType(coach);
        createTeam(coach);
        return coachRepository.save(coach).getId();
    }

    private CoachEntity convertToEntity(CoachDTO coachDTO) {
        CoachEntity coach = modelMapper.map(coachDTO, CoachEntity.class);
        DraftEntity draft = draftRepository.findById(coachDTO.getDraftId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Draft Not Found."));
        coach.setDraft(draft);
        return coach;
    }

    private void checkForExistingCoach(CoachEntity coach) {
        Set<CoachEntity> existingCoaches = coach.getDraft().getCoaches();
        Boolean coachAlreadyExists = existingCoaches.stream().anyMatch(existingCoach -> existingCoach.getUser() == coach.getUser());
        if(coachAlreadyExists) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Coach Already Exists In Draft.");
        }
    }

    private void setUser(CoachEntity coach) {
        UserEntity user = getCurrentUser();
        coach.setUser(user);
    }

    private UserEntity getCurrentUser() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("User With Username '" + username + "' Not Found."));
    }

    private void setCoachType(CoachEntity coach) {
        coach.setTypeId(CoachTypeEnum.MEMBER);
    }

    private void createTeam(CoachEntity coach) {
        String defaultTeamName = generateDefaultTeamName(coach);
        Long initialBudget = coach.getDraft().getBudget();
        TeamEntity team = new TeamEntity(null, defaultTeamName, initialBudget, coach, new HashSet<>(), null, null);
        coach.setTeam(team);
    }

    private String generateDefaultTeamName(CoachEntity coach) {
        String username = coach.getUser().getUsername();
        return username + "'s Team";
    }

}