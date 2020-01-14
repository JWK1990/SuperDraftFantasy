package au.superdraftfantasy.api.draft;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import au.superdraftfantasy.api.team.TeamEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import au.superdraftfantasy.api.role.RoleEntity;
import au.superdraftfantasy.api.role.RoleRepository;
import au.superdraftfantasy.api.role.RoleTypeEnum;
import au.superdraftfantasy.api.user.UserEntity;
import au.superdraftfantasy.api.user.UserRepository;


@Service
public class DraftService {

    private final DraftRepository draftRepository;
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    public DraftService(DraftRepository draftRepository, UserRepository userRepository, RoleRepository roleRepository) {
        this.draftRepository = draftRepository;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    public Long createDraft(@NotBlank final DraftEntity draft) {
        checkDraftValidity(draft);
        draft.getRoles().add(new RoleEntity(null, RoleTypeEnum.COMMISSIONER, draft, userRepository.findById(1L).get(), new TeamEntity(), null, null));
        Long draftId = draftRepository.save(draft).getId();

        return draftId;
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

}