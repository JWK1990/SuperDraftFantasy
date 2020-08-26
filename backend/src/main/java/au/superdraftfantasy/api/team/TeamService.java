package au.superdraftfantasy.api.team;

import au.superdraftfantasy.api.block.BlockDto;
import au.superdraftfantasy.api.draft.DraftEntity;
import au.superdraftfantasy.api.draft.DraftRepository;
import au.superdraftfantasy.api.player.PlayerEntity;
import au.superdraftfantasy.api.player.PlayerRepository;
import au.superdraftfantasy.api.teamPlayerJoin.TeamPlayerJoinEntity;
import au.superdraftfantasy.api.user.UserEntity;
import au.superdraftfantasy.api.user.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.constraints.NotBlank;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;


@Service
public class TeamService {

    private final ModelMapper modelMapper;
    private final DraftRepository draftRepository;
    private final UserRepository userRepository;
    private final TeamRepository teamRepository;
    private final PlayerRepository playerRepository;

    public TeamService(
            ModelMapper modelMapper,
            DraftRepository draftRepository,
            UserRepository userRepository,
            TeamRepository teamRepository,
            PlayerRepository playerRepository
    ) {
        this.modelMapper = modelMapper;
        this.draftRepository = draftRepository;
        this.userRepository = userRepository;
        this.teamRepository = teamRepository;
        this.playerRepository = playerRepository;
    }

    /**
     * Create a CoachEntity from a provided CoachDTO.
     * @param teamWriteDto
     * @return
     */
    public Long createTeam(@NotBlank final TeamWriteDto teamWriteDto) {
        TeamEntity team = convertTeamWriteDtoToEntity(teamWriteDto);
        checkForSpaceInDraft(team);
        checkForExistingCoach(team);
        return teamRepository.save(team).getId();
    }

    /**
     * Adds the current Block Player to a Team when bidding finishes.
     * @param readDto
     * @return
     */
    @Transactional
    public TeamReadDto addPlayerToTeam(BlockDto readDto) {
        TeamEntity team = teamRepository.findById(readDto.getTeamId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Team with ID '" + readDto.getTeamId() + "' Not Found."));
        checkIfPlayerAlreadyDrafted(team, readDto.getPlayerId());
        addPlayerToTeam(team, readDto.getPlayerId(), readDto.getPrice());
        team.setBudget(team.getBudget() - readDto.getPrice());
        teamRepository.save(team);
        return modelMapper.map(team, TeamReadDto.class);
    }

    /**
     * Updates a Players current field position within a Team.
     * @param teamID
     * @param playerId
     * @param myTeamPosition
     * @return
     */
    public String updateMyTeamPosition(final Long teamID, Long playerId, String myTeamPosition) {
        TeamEntity team = teamRepository.findById(teamID)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Team with ID '" + teamID + "' Not Found."));

        TeamPlayerJoinEntity teamPlayerJoinToUpdate = team.getTeamPlayerJoins()
                .stream().filter(teamPlayerJoin -> teamPlayerJoin.getPlayer().getId() == playerId)
                .findFirst().orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "TeamPlayerJoinEntity not found"));

        teamPlayerJoinToUpdate.setMyTeamPosition(myTeamPosition);

        teamRepository.save(team);

        return myTeamPosition;
    }

    private TeamEntity convertTeamWriteDtoToEntity(TeamWriteDto teamWriteDto) {
        TeamEntity coach = modelMapper.map(teamWriteDto, TeamEntity.class);
        DraftEntity draft = draftRepository.findById(teamWriteDto.getDraftId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Draft with ID '" + teamWriteDto.getDraftId() + "'Not Found."));
        coach.setDraft(draft);
        coach.setUser(getCurrentUser());
        coach.setType(TeamTypeEnum.MEMBER);
        coach.setBudget(draft.getBudget());
        coach.setOnTheBlock(false);
        coach.setName(generateDefaultTeamName(coach.getUser().getUsername()));
        coach.setTeamPlayerJoins(Collections.emptyList());
        return coach;
    }

    private UserEntity getCurrentUser() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("User With Username '" + username + "' Not Found."));
    }

    private void checkForSpaceInDraft(TeamEntity coach) {
        Long maxNumOfTeams = coach.getDraft().getNumOfTeams();
        Integer currentNumOfTeams = coach.getDraft().getTeams().size();
        if(currentNumOfTeams >= maxNumOfTeams) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "The Draft is already full.");
        }
    }

    private void checkForExistingCoach(TeamEntity coach) {
        List<TeamEntity> existingCoaches = coach.getDraft().getTeams();
        boolean coachAlreadyExists = existingCoaches.stream().anyMatch(existingCoach -> existingCoach.getUser().getId() == coach.getUser().getId());
        if(coachAlreadyExists) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User with ID '" + coach.getUser().getId() + "'Already Exists In Draft with ID '" + coach.getDraft().getId() + "'.");
        }
    }

    private String generateDefaultTeamName(String username) {
        return username + "'s Team";
    }

    private void addPlayerToTeam(TeamEntity team, Long playerID, Long price) {
        PlayerEntity player =  playerRepository.findById(playerID).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Player with ID '" + playerID + "' Not Found."));
        TeamPlayerJoinEntity teamPlayerJoin = new TeamPlayerJoinEntity(null, team, player, price, null);
        team.getTeamPlayerJoins().add(teamPlayerJoin);
    }

    private void checkIfPlayerAlreadyDrafted(TeamEntity team, Long playerID) {
        List<TeamEntity> teamList = team.getDraft().getTeams();
        teamList.forEach(teamInDraft -> {
            List<PlayerEntity> playerList = getPlayers(teamInDraft.getTeamPlayerJoins());
            boolean playerAlreadyDrafted = playerList.stream().anyMatch(player -> player.getId().equals(playerID));
            if(playerAlreadyDrafted) {
                throw new ResponseStatusException(HttpStatus.CONFLICT, "Player with ID '" + playerID + "' is already drafted by '" + teamInDraft.getName() + "'.");
            }
        });
    }

    private List<PlayerEntity> getPlayers(List<TeamPlayerJoinEntity> teamPlayerJoins) {
        return teamPlayerJoins.stream().map(TeamPlayerJoinEntity::getPlayer).collect(Collectors.toList());
    }

}
