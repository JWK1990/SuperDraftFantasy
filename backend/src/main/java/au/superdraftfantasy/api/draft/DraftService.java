package au.superdraftfantasy.api.draft;

import java.util.Arrays;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import au.superdraftfantasy.api.team.TeamEntity;
import au.superdraftfantasy.api.user.UserRepository;


@Service
public class DraftService {

    private final DraftRepository draftRepository;
    private final UserRepository userRepository;

    @Autowired
    public DraftService(
        @NotNull DraftRepository draftRepository,
        @NotNull UserRepository userRepository
    ) {
        this.draftRepository = draftRepository;
        this.userRepository = userRepository;
    }


    public Long createDraft(@NotBlank final DraftEntity draftEntity) {
        
        final String draftName = draftEntity.getName();

        if(draftRepository.existsByName(draftName)) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Cannot create Draft. A draft with the name '" + draftName + "' already exists.");
        }

        return draftRepository.save(draftEntity).getId();
    }

}