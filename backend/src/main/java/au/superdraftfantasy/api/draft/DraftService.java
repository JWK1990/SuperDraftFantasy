package au.superdraftfantasy.api.draft;

import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import javax.validation.constraints.NotBlank;

import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import au.superdraftfantasy.api.coach.CoachEntity;
import au.superdraftfantasy.api.coach.CoachReadDto;
import au.superdraftfantasy.api.coach.CoachTypeEnum;
import au.superdraftfantasy.api.player.PlayerEntity;
import au.superdraftfantasy.api.player.PlayerReadDto;
import au.superdraftfantasy.api.player.PlayerService;
import au.superdraftfantasy.api.roster.RosterEntity;
import au.superdraftfantasy.api.roster.RosterRepository;
import au.superdraftfantasy.api.team.TeamEntity;
import au.superdraftfantasy.api.user.UserEntity;
import au.superdraftfantasy.api.user.UserRepository;


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
        DraftEntity draft = draftRepository.findById(draftID).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Draft with ID '" + draftID + "' not found."));
        return mapToDraftReadDto(draft);
    }

    private DraftReadDto mapToDraftReadDto(DraftEntity draft) {
        DraftReadDto draftReadDto = modelMapper.map(draft, DraftReadDto.class);
        setPlayerPositions(draft, draftReadDto);
        setOnTheBlockCoachId(draftReadDto); 
        return draftReadDto;
    }

    private void setPlayerPositions(DraftEntity draft, DraftReadDto draftReadDto) {
        List<CoachEntity> coachList = draft.getCoaches();
        List<CoachReadDto> coachReadDtoList = draftReadDto.getCoaches();
        for(int i = 0; i < coachReadDtoList.size(); i++) {
            List<PlayerEntity> playerList = coachList.get(i).getTeam().getPlayers();
            List<PlayerReadDto> playerReadDtoList = coachReadDtoList.get(i).getTeam().getPlayers();
            for(int j = 0; j < playerReadDtoList.size(); j++) {
                playerReadDtoList.get(i).setPosition(PlayerService.convertPositionsToString(playerList.get(i).getPositions()));
            }
        }
    }

    private void setOnTheBlockCoachId(DraftReadDto draftReadDto) {
        Integer currentIndex = 0;
        AtomicInteger draftedPlayerCount = new AtomicInteger(0);
        List<CoachReadDto> coachesList = draftReadDto.getCoaches();
        coachesList.stream().forEach(coach -> draftedPlayerCount.addAndGet(coach.getTeam().getPlayers().size()));
        if(draftedPlayerCount.get() > 0) {
            Integer currentRound = (int) Math.floor(draftedPlayerCount.get()/coachesList.size());
            currentIndex = (int) Math.ceil(draftedPlayerCount.get() - (currentRound * coachesList.size()));
        }
        Long onTheBlockCoachId = coachesList.get(currentIndex).getId();
        draftReadDto.setOnTheBlockCoachId(onTheBlockCoachId);
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
        CoachEntity coach = new CoachEntity(null, CoachTypeEnum.COMMISSIONER, user, draft, null, null, null);
        TeamEntity team = new TeamEntity(null, "Default Name", draft.getBudget(), coach, null, null, null);
        coach.setTeam(team);
        draft.getCoaches().add(coach);
    }

    private UserEntity getCurrentUser() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("User With Username '" + username + "' Not Found."));
    }

}