package au.superdraftfantasy.api.draft;

import javax.validation.constraints.NotBlank;

import au.superdraftfantasy.api.team.TeamEntity;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import au.superdraftfantasy.api.coach.CoachEntity;
import au.superdraftfantasy.api.coach.CoachRepository;
import au.superdraftfantasy.api.coach.CoachTypeEnum;
import au.superdraftfantasy.api.user.UserRepository;

import java.util.Arrays;
import java.util.HashSet;


@Service
public class DraftService {

    private final DraftRepository draftRepository;
    private final UserRepository userRepository;
    private final CoachRepository coachRepository;

    public DraftService(DraftRepository draftRepository, UserRepository userRepository, CoachRepository coachRepository) {
        this.draftRepository = draftRepository;
        this.userRepository = userRepository;
        this.coachRepository = coachRepository;
    }

    public Long createDraft(@NotBlank final DraftEntity draft) {
        checkDraftValidity(draft);
        createCommissionersTeam(draft);
        return draftRepository.save(draft).getId();
    }

    private void checkDraftValidity(DraftEntity draft) {
        final String draftName = draft.getName();

        if(draftRepository.existsByName(draftName)) {
            throw new ResponseStatusException(
                    HttpStatus.CONFLICT,
                    "Cannot create Draft. A draft with the name '" + draftName + "' already exists."
            );
        }
    }

    private void createCommissionersTeam(@NotBlank DraftEntity draft) {
        CoachEntity coach = new CoachEntity(null, CoachTypeEnum.COMMISSIONER, userRepository.findById(1L).get(), draft, null, null, null);
        TeamEntity team = new TeamEntity(null, "Default Name", draft.getBudget(), coach, new HashSet<>(),null, null);
        coach.setTeam(team);
        draft.getCoaches().add(coach);
    }

}