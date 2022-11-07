package au.superdraftfantasy.api.draft;

import au.superdraftfantasy.api.block.BlockDto;
import au.superdraftfantasy.api.block.BlockService;
import au.superdraftfantasy.api.roster.RosterEntity;
import au.superdraftfantasy.api.roster.RosterRepository;
import au.superdraftfantasy.api.team.TeamEntity;
import au.superdraftfantasy.api.team.TeamStatusEnum;
import au.superdraftfantasy.api.team.TeamTypeEnum;
import au.superdraftfantasy.api.user.UserEntity;
import au.superdraftfantasy.api.user.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.web.firewall.RequestRejectedException;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.transaction.Transactional;
import javax.validation.constraints.NotBlank;
import java.util.Collections;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@Service
public class DraftService {

    private final ModelMapper modelMapper;
    private final DraftRepository draftRepository;
    private final UserRepository userRepository;
    private final RosterRepository rosterRepository;
    private final BlockService blockService;

    public DraftService(
            ModelMapper modelMapper,
            DraftRepository draftRepository,
            UserRepository userRepository,
            RosterRepository rosterRepository,
            BlockService blockService
    ) {
        this.modelMapper = modelMapper;
        this.draftRepository = draftRepository;
        this.userRepository = userRepository;
        this.rosterRepository = rosterRepository;
        this.blockService = blockService;
    }

    /**
     * create a DraftEntity from a given DraftDTO.
     * @param writeDto
     * @return
     */
    public Long createDraft(
            @NotBlank final DraftWriteDto writeDto,
            @NotBlank final Authentication authentication
    ) {
        DraftEntity draft = convertToEntity(writeDto);
        checkDraftValidity(draft);
        UserEntity user = getCurrentUser(authentication);
        TeamEntity commissionersTeam = createTeam(draft, user, true, writeDto.getTeamName());
        draft.getTeams().add(commissionersTeam);
        return draftRepository.save(draft).getId();
    }

    /**
     * read a DraftEntity from a given draftID.
     * @param draftID
     * @return
     */
    public DraftReadDto getDraft(@NotBlank final Long draftID) {
        DraftEntity draft = draftRepository.findById(draftID)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Draft with ID '" + draftID + "' not found."));
        return mapToDraftReadDto(draft);
    }

    /**
     * Create a Team for the current User and add it to a DraftEntity from a given draftID.
     * @param writeDto
     * @param authentication
     * @return
     */
    @Transactional
    public Long joinDraft(
            @NotBlank final Long draftId,
            @NotBlank final DraftJoinWriteDto writeDto,
            @NotBlank final Authentication authentication
    ) {
        DraftEntity draft = draftRepository.findById(draftId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Draft with ID '" + draftId + "' not found."));
        UserEntity currentUser = getCurrentUser(authentication);
        checkForSpaceInDraft(draft);
        checkForExistingTeam(draft, currentUser.getId());
        TeamEntity team = createTeam(draft, currentUser, false, writeDto.getTeamName());
        addTeamToDraftAndUpdateStatusIfRequired(draft, team);
        draftRepository.save(draft);
        return team.getId();
    }

    public DraftStatusEnum startDraft(
            @NotBlank final Long draftID,
            @NotBlank final Authentication authentication
    ) {
        DraftEntity draft = draftRepository.findById(draftID)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "Draft with ID '" + draftID + "' not found."
                ));
        if(draft.getStatus().equals(DraftStatusEnum.IN_SETUP) ||
                draft.getStatus().equals(DraftStatusEnum.COMPLETE)) {
            throw new RequestRejectedException("Draft is not in a valid Status to be started.");
        } else if(draft.getStatus().equals(DraftStatusEnum.IN_PROGRESS)) {
            throw new RequestRejectedException("Draft is already in progress.");
        }
        UserEntity currentUser = getCurrentUser(authentication);
        checkIfCommissioner(currentUser, draft);
        draft.setStatus(DraftStatusEnum.IN_PROGRESS);
        draftRepository.save(draft);

        BlockDto blockDto =
                new BlockDto(
                draftID,
                null,
                null,
                null,
                null,
                1L,
                draft.getOnTheBlockTimer(),
                draft.getBidTimer(),
                null,
                null,
                        null
        );
        blockService.startNextRound(blockDto, false);
        return draft.getStatus();
    }

    public DraftStatusEnum stopDraft(
            @NotBlank final Long draftID,
            @NotBlank final Authentication authentication
    ) {
        DraftEntity draft = draftRepository.findById(draftID)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "Draft with ID '" + draftID + "' not found."
                ));
        if(draft.getStatus().equals(DraftStatusEnum.IN_SETUP) ||
                draft.getStatus().equals(DraftStatusEnum.COMPLETE)) {
            throw new RequestRejectedException("Draft is not in a valid Status to be stopped.");
        } else if(draft.getStatus().equals(DraftStatusEnum.STOPPED)) {
            throw new RequestRejectedException("Draft is already stopped.");
        }
        UserEntity currentUser = getCurrentUser(authentication);
        checkIfCommissioner(currentUser, draft);
        draft.setStatus(DraftStatusEnum.STOPPED);
        draftRepository.save(draft);
        blockService.stopDraft(draftID, DraftStatusEnum.STOPPED.name());
        return draft.getStatus();
    }

    public List<DraftReadDto> getMyDrafts(@NotBlank final Authentication authentication) {
        String username = authentication.getName();
        List<DraftEntity> drafts = draftRepository.findDistinctByTeams_User_Username(username);
        return drafts.stream()
                .map(draft -> modelMapper.map(draft, DraftReadDto.class))
                .collect(Collectors.toList());
    }

    @Transactional
    public List<Long> reorderTeamList(DraftReorderTeamsDto draftReorderTeamsDto) {
        DraftEntity draft = draftRepository.findById(draftReorderTeamsDto.getDraftId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Draft with ID '" + draftReorderTeamsDto.getDraftId() + "' not found."));

        List<Long> orderedTeamIdList = draftReorderTeamsDto.getTeamIdList();
        draft.getTeams().forEach(team -> {
            Long currentOrderIndex = team.getOrderIndex();
            Long updatedOrderIndex = (long) orderedTeamIdList.indexOf(team.getId());
            if(!currentOrderIndex.equals(updatedOrderIndex)) {
                team.setOrderIndex(updatedOrderIndex);
                team.setOnTheBlock(updatedOrderIndex == 0);
            }
        });

        DraftEntity updatedDraft = draftRepository.save(draft);
        return updatedDraft.getTeams()
                .stream()
                .sorted((team1, team2) -> (int) (team1.getOrderIndex() - team2.getOrderIndex()))
                .map(TeamEntity::getId)
                .collect(Collectors.toList());
    }

    @Transactional
    public IDraftBase getDraftBase(Long draftId) {
        return draftRepository.findDraftBaseById(draftId)
        .orElseThrow(() -> new NoSuchElementException("Draft with ID: " + draftId + " could not be found."));
    }

    private void addTeamToDraftAndUpdateStatusIfRequired(DraftEntity draft, TeamEntity team) {
        draft.getTeams().add(team);
        if(draft.getTeams().size() == draft.getNumOfTeams()) {
            draft.setStatus(DraftStatusEnum.READY);
        }
    }

    private TeamEntity createTeam(
            @NotBlank DraftEntity draft,
            @NotBlank UserEntity user,
            @NotBlank boolean isCommissioner,
            @NotBlank String teamName
    ) {
        return new TeamEntity(
                null,
                teamName,
                isCommissioner ? TeamTypeEnum.COMMISSIONER : TeamTypeEnum.MEMBER,
                draft.getBudget(),
                isCommissioner,
                (long) draft.getTeams().size(),
                Collections.emptyList(),
                user,
                draft,
                TeamStatusEnum.IN_SETUP,
                null,
                null,
                Collections.emptyList()
        );
    }


    private UserEntity getCurrentUser(Authentication authentication) {
        String username = authentication.getName();
        return userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("User With Username '" + username + "' Not Found."));
    }

    private void checkForSpaceInDraft(DraftEntity draft) {
        Long maxNumOfTeams = draft.getNumOfTeams();
        int currentNumOfTeams = draft.getTeams().size();
        if(currentNumOfTeams >= maxNumOfTeams) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "The Draft is already full.");
        }
    }

    private void checkForExistingTeam(DraftEntity draft, Long currentUserId) {
        List<TeamEntity> existingCoaches = draft.getTeams();
        boolean coachAlreadyExists = existingCoaches.stream()
                .anyMatch(existingCoach -> existingCoach.getUser().getId().equals(currentUserId));
        if(coachAlreadyExists) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User with ID '" + currentUserId + "' already exists in Draft.");
        }
    }

    private DraftReadDto mapToDraftReadDto(DraftEntity draft) {
        return modelMapper.map(draft, DraftReadDto.class);
    }

    private DraftEntity convertToEntity(DraftWriteDto draftWriteDto) {
        DraftEntity draft = modelMapper.map(draftWriteDto, DraftEntity.class);
        RosterEntity roster = rosterRepository.findByType(draftWriteDto.getRosterType()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "RosterType '" + draftWriteDto.getRosterType() + "' not found."));
        draft.setRoster(roster);
        draft.setStatus(DraftStatusEnum.IN_SETUP);
        return draft;
    }

    private void checkDraftValidity(DraftEntity draft) {
        final String draftName = draft.getName();
        if(draftRepository.existsByName(draftName)) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "A draft with the name '" + draftName + "' already exists.");
        }
    }

    private void checkIfCommissioner(UserEntity user, DraftEntity draft) {
        draft.getTeams()
                .stream()
                .filter(team -> team.getUser().getId().equals(user.getId())
                                && team.getType().equals(TeamTypeEnum.COMMISSIONER)
                )
                .findAny()
                .orElseThrow(() ->
                    new ResponseStatusException(
                            HttpStatus.NOT_FOUND,
                            "User does not have a team in the Draft"
                    )
                );
    }

}
