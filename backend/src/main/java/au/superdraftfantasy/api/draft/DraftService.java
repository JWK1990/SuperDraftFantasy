package au.superdraftfantasy.api.draft;

import java.util.HashSet;

import javax.validation.constraints.NotBlank;

import org.modelmapper.ModelMapper;
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

    private final ModelMapper modelMapper;
    private final DraftRepository draftRepository;
    private final UserRepository userRepository;

    public DraftService(ModelMapper modelMapper, DraftRepository draftRepository, UserRepository userRepository) {
        this.modelMapper = modelMapper;
        this.draftRepository = draftRepository;
        this.userRepository = userRepository;
    }

    /**
     * create a DraftEntity from a given DraftDTO.
     * @param draftWriteDto
     * @return
     */
    public Long createDraft(@NotBlank final DraftWriteDto draftWriteDto) {
        DraftEntity draft = convertToEntity(draftWriteDto);
        checkDraftValidity(draft);
        createCommissionersTeam(draft);
        return draftRepository.save(draft).getId();
    }

    /**
     * get a DraftEntity from a given draftID.
     * @param draftID
     * @return
     */
    public DraftReadDto findDraft(@NotBlank final Long draftID) {
        DraftEntity draft = draftRepository.findById(draftID).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Draft with ID '" + draftID + "' not found."));
        DraftReadDto draftReadDto = modelMapper.map(draft, DraftReadDto.class);
        return draftReadDto;
    }

    private DraftEntity convertToEntity(DraftWriteDto draftWriteDto) {
        return modelMapper.map(draftWriteDto, DraftEntity.class);
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
        TeamEntity team = new TeamEntity(null, "Default Name", draft.getBudget(), coach, new HashSet<>(),null, null);
        coach.setTeam(team);
        draft.getCoaches().add(coach);
    }

    private UserEntity getCurrentUser() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("User With Username '" + username + "' Not Found."));
    }

}