package au.superdraftfantasy.api.draft;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

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

    @Autowired
    public DraftService(
        @NotNull DraftRepository draftRepository,
        @NotNull UserRepository userRepository,
        @NotNull RoleRepository roleRepository
    ) {
        this.draftRepository = draftRepository;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }


    public Long createDraft(@NotBlank final DraftEntity draftEntity) {
        
        final String draftName = draftEntity.getName();

        if(draftRepository.existsByName(draftName)) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Cannot create Draft. A draft with the name '" + draftName + "' already exists.");
        }
        
        draftRepository.save(draftEntity).getId();
        
        UserEntity userEntity = userRepository.findById(1L).get();
        RoleEntity roleEntity = new RoleEntity(null, RoleTypeEnum.COMMISSIONER, draftEntity, userEntity, null, null);
        roleRepository.save(roleEntity);

        return draftEntity.getId();
    }

}