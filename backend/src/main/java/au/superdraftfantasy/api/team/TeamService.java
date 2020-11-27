package au.superdraftfantasy.api.team;

import au.superdraftfantasy.api.block.BlockDto;
import au.superdraftfantasy.api.player.PlayerEntity;
import au.superdraftfantasy.api.player.PlayerRepository;
import au.superdraftfantasy.api.teamPlayerJoin.TeamPlayerJoinEntity;
import au.superdraftfantasy.api.teamPlayerJoin.TeamPlayerJoinWriteDto;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class TeamService {

    private final ModelMapper modelMapper;
    private final TeamRepository teamRepository;
    private final PlayerRepository playerRepository;
    private final SimpMessagingTemplate simpMessagingTemplate;

    public TeamService(
            ModelMapper modelMapper,
            TeamRepository teamRepository,
            PlayerRepository playerRepository,
            SimpMessagingTemplate simpMessagingTemplate
    ) {
        this.modelMapper = modelMapper;
        this.teamRepository = teamRepository;
        this.playerRepository = playerRepository;
        this.simpMessagingTemplate = simpMessagingTemplate;
    }

    /**
     * Adds the current Block Player to a Team when bidding finishes.
     * @param readDto
     * @return
     */
    @Transactional
    public TeamReadDto addPlayerToTeam(BlockDto readDto) {
        TeamEntity team = teamRepository.findById(readDto.getBidderTeamId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Team with ID '" + readDto.getOnTheBlockTeamId() + "' Not Found."));
        checkIfPlayerAlreadyDrafted(team, readDto.getPlayerId());
        addPlayerToTeam(team, readDto.getPlayerId(), readDto.getPrice());
        team.setBudget(team.getBudget() - readDto.getPrice());
        teamRepository.save(team);
        return modelMapper.map(team, TeamReadDto.class);
    }

    /**
     * Updates a Players current field position within a Team.
     * @param teamId
     * @param playerId
     * @param myTeamPosition
     * @return
     */
    public String updateMyTeamPosition(final Long teamId, Long playerId, String myTeamPosition) {
        TeamEntity team = teamRepository.findById(teamId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Team with ID '" + teamId + "' Not Found."));

        TeamPlayerJoinEntity teamPlayerJoinToUpdate = team.getTeamPlayerJoins()
                .stream().filter(teamPlayerJoin -> teamPlayerJoin.getPlayer().getId().equals(playerId))
                .findFirst().orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "TeamPlayerJoinEntity not found"));

        teamPlayerJoinToUpdate.setMyTeamPosition(myTeamPosition);
        teamRepository.save(team);
        // TODO: Update ReadDto to include teamId so that we can use it here.
        TeamPlayerJoinWriteDto readDto = new TeamPlayerJoinWriteDto(teamId, playerId, myTeamPosition);
        this.simpMessagingTemplate.convertAndSend("/draft/updateMyTeamPositions", readDto);
        return myTeamPosition;
    }

    private void addPlayerToTeam(TeamEntity team, Long playerID, Long price) {
        PlayerEntity player =  playerRepository.findById(playerID).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Player with ID '" + playerID + "' Not Found."));
        // TODO: Update to calculate correct MyTeamPosition rather than just taking the first position.
        String defaultMyTeamPosition = player.getPositions().stream().findFirst().get().getType().toString();
        TeamPlayerJoinEntity teamPlayerJoin = new TeamPlayerJoinEntity(null, team, player, price, defaultMyTeamPosition);
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
