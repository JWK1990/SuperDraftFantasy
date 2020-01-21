package au.superdraftfantasy.api.coach;

import au.superdraftfantasy.api.draft.DraftRepository;
import au.superdraftfantasy.api.team.TeamEntity;
import au.superdraftfantasy.api.user.UserEntity;
import au.superdraftfantasy.api.user.UserRepository;
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

    private final CoachRepository coachRepository;
    private final DraftRepository draftRepository;
    private final UserRepository userRepository;

    public CoachService(DraftRepository draftRepository, UserRepository userRepository, CoachRepository coachRepository) {
        this.draftRepository = draftRepository;
        this.userRepository = userRepository;
        this.coachRepository = coachRepository;
    }

    public Long createCoach(@NotBlank final CoachEntity coach) {
        checkForExistingCoach(coach);
        setUser(coach);
        createTeam(coach);
        return coachRepository.save(coach).getId();
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

    private void createTeam(CoachEntity coach) {
        String defaultTeamName = generateDefaultTeamName(coach);
        Long initialBudget = coach.getDraft().getBudget();
        TeamEntity team = new TeamEntity(null, defaultTeamName, initialBudget, null, new HashSet<>(), null, null);
        coach.setTeam(team);
    }

    private String generateDefaultTeamName(CoachEntity coach) {
        String username = coach.getUser().getUsername();
        return username + "'s Team";
    }

}