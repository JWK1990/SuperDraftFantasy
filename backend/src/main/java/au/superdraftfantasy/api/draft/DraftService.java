package au.superdraftfantasy.api.draft;

import java.util.Arrays;
import java.util.HashSet;

import javax.validation.constraints.NotBlank;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import au.superdraftfantasy.api.coach.CoachEntity;
import au.superdraftfantasy.api.coach.CoachTypeEnum;
import au.superdraftfantasy.api.team.TeamEntity;
import au.superdraftfantasy.api.user.UserEntity;
import au.superdraftfantasy.api.user.UserRepository;


@Service
public class DraftService {

    private final DraftRepository draftRepository;
    private final UserRepository userRepository;

    public DraftService(DraftRepository draftRepository, UserRepository userRepository) {
        this.draftRepository = draftRepository;
        this.userRepository = userRepository;
    }

    public Long createDraft(@NotBlank final DraftEntity draft) {
        checkDraftValidity(draft);
        createCommissionersTeam(draft);
        return draftRepository.save(draft).getId();
    }

    private void checkDraftValidity(DraftEntity draft) {
        final String draftName = draft.getName();

        if(draftRepository.existsByName(draftName)) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "A draft with the name '" + draftName + "' already exists.");
        }
    }

    private void createCommissionersTeam(@NotBlank DraftEntity draft) {
        UserEntity user = getCurrentUser();
        CoachEntity coach = new CoachEntity(null, CoachTypeEnum.COMMISSIONER, user, draft, new TeamEntity(null, "Default Name", draft.getBudget(), null, new HashSet<>(),null, null), null, null);
        TeamEntity team = new TeamEntity(null, "Default Name", draft.getBudget(), null, new HashSet<>(),null, null);
        coach.setTeam(team);
        draft.getCoaches().add(coach);
    }

    private UserEntity getCurrentUser() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("User With Username '" + username + "' Not Found."));
    }

}