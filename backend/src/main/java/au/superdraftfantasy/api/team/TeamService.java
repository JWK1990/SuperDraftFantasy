package au.superdraftfantasy.api.team;

import java.util.Arrays;
import java.util.List;
import java.util.Set;

import javax.validation.constraints.NotBlank;

import au.superdraftfantasy.api.teamPlayerJoin.TeamPlayerJoinEntity;
import au.superdraftfantasy.api.teamPlayerJoin.TeamPlayerJoinRepository;

import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import au.superdraftfantasy.api.coach.CoachEntity;
import au.superdraftfantasy.api.player.PlayerEntity;
import au.superdraftfantasy.api.player.PlayerRepository;


@Service
public class TeamService {

    private final ModelMapper modelMapper;
    private final TeamRepository teamRepository;
    private final PlayerRepository playerRepository;
    private final TeamPlayerJoinRepository teamPlayerJoinRepository;

    public TeamService(ModelMapper modelMapper, TeamRepository teamRepository, PlayerRepository playerRepository, TeamPlayerJoinRepository teamPlayerJoinRepository) {
        this.modelMapper = modelMapper;
        this.teamRepository = teamRepository;
        this.playerRepository = playerRepository;
        this.teamPlayerJoinRepository = teamPlayerJoinRepository;
    }

    public TeamReadDto addPlayer(@NotBlank final Long teamID, Long playerID, Long salePrice) {
        TeamEntity team = teamRepository.findById(teamID).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Team with ID '" + teamID + "' Not Found."));
        checkIfPlayerAlreadyDrafted(team, playerID);
        addPlayerToTeam(team, playerID);
        team.setBudget(team.getBudget() - salePrice);
        teamRepository.save(team);
        return modelMapper.map(team, TeamReadDto.class);
    }

    private void addPlayerToTeam(TeamEntity team, Long playerID) {
        PlayerEntity player =  playerRepository.findById(playerID).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Player with ID '" + playerID + "' Not Found."));
        TeamPlayerJoinEntity teamPlayerJoin = new TeamPlayerJoinEntity(null, team, player, "DEF");
        teamPlayerJoinRepository.save(teamPlayerJoin);       
    }

    private void checkIfPlayerAlreadyDrafted(TeamEntity team, Long playerID) {
        List<CoachEntity> coachList = team.getCoach().getDraft().getCoaches();
        coachList.stream().forEach(coach -> {
            List<PlayerEntity> playerList = getPlayers(coach.getTeam().getTeamPlayerJoins());
            Boolean playerAlreadyDrafted = playerList.stream().anyMatch(player -> player.getId() == playerID);
            if(playerAlreadyDrafted) {
                throw new ResponseStatusException(HttpStatus.CONFLICT, "Player with ID '" + playerID + "' is already drafted by Team with ID '" + coach.getTeam().getId() + "'.");
            }
        });
    }

    public static List<PlayerEntity> getPlayers(Set<TeamPlayerJoinEntity> teamPlayerJoins) {
        List<PlayerEntity> playerList = Arrays.asList();
        teamPlayerJoins.stream().forEach(teamPlayerJoin -> {
            playerList.add(teamPlayerJoin.getPlayer());
        });
        return playerList;
    }

}