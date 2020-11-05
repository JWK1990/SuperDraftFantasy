package au.superdraftfantasy.api.draft;

import au.superdraftfantasy.api.roster.RosterEntity;
import au.superdraftfantasy.api.roster.RosterRepository;
import au.superdraftfantasy.api.team.TeamEntity;
import au.superdraftfantasy.api.team.TeamTypeEnum;
import au.superdraftfantasy.api.user.UserEntity;
import au.superdraftfantasy.api.user.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.transaction.Transactional;
import javax.validation.constraints.NotBlank;
import java.util.Arrays;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@Service
public class DraftService {

    private final ModelMapper modelMapper;
    private final DraftRepository draftRepository;
    private final UserRepository userRepository;
    private final RosterRepository rosterRepository;

    public DraftService(ModelMapper modelMapper, DraftRepository draftRepository, UserRepository userRepository, RosterRepository rosterRepository) {
        this.modelMapper = modelMapper;
        this.draftRepository = draftRepository;
        this.userRepository = userRepository;
        this.rosterRepository = rosterRepository;
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
     * read a DraftEntity from a given draftID.
     * @param draftID
     * @return
     */
    public DraftReadDto getDraft(@NotBlank final Long draftID) {
        DraftEntity draft = draftRepository.findById(draftID)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Draft with ID '" + draftID + "' not found."));
        return mapToDraftReadDto(draft);
    }

    public List<DraftReadDto> getMyDrafts(@NotBlank final Authentication authentication) {
        String username = authentication.getName();
        List<DraftEntity> drafts = draftRepository.findDistinctByTeams_User_Username(username);
        List<DraftReadDto> draftReadDtos = drafts.stream()
                .map(draft -> modelMapper.map(draft, DraftReadDto.class))
                .collect(Collectors.toList());
        return draftReadDtos;
    }

    @Transactional
    public Long updateOnTheBlockTeam(Long draftId) {
        DraftEntity draft = draftRepository.findById(draftId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Draft with ID '" + draftId + "' not found."));
        List<TeamEntity> teamList = draft.getTeams();

        int onTheBlockOrderIndex = getOnTheBlockOrderIndex(teamList);

        teamList.forEach(team -> team.setOnTheBlock(false));
        TeamEntity onTheBlockTeam = teamList.stream().filter(team -> team.getOrderIndex() == onTheBlockOrderIndex).findFirst()
                .orElseThrow(() -> new NoSuchElementException("The OnTheBlock Team could not be determined."));
        onTheBlockTeam.setOnTheBlock(true);

        draftRepository.save(draft);
        return onTheBlockTeam.getId();
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

    private int getOnTheBlockOrderIndex(List<TeamEntity> teamList) {
        int onTheBlockIndex = 0;
        int draftedPlayerCount = teamList.stream()
                .mapToInt(team -> team.getTeamPlayerJoins().size())
                .sum();
        if (draftedPlayerCount > 0) {
            int currentRound = draftedPlayerCount / teamList.size();
            onTheBlockIndex = (int) Math.ceil(draftedPlayerCount - (currentRound * teamList.size()));
        }
        return onTheBlockIndex;
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

    private void createCommissionersTeam(@NotBlank DraftEntity draft) {
        UserEntity user = getCurrentUser();
        TeamEntity team = new TeamEntity(
                null,
                "Default Name",
                TeamTypeEnum.COMMISSIONER,
                draft.getBudget(),
                true,
                0L,
                Arrays.asList(),
                user,
                draft,
                null,
                null
        );
        draft.getTeams().add(team);
    }

    private UserEntity getCurrentUser() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("User With Username '" + username + "' Not Found."));
    }

}
