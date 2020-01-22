package au.superdraftfantasy.api.team;

import javax.validation.constraints.NotBlank;

import au.superdraftfantasy.api.coach.CoachEntity;
import au.superdraftfantasy.api.player.PlayerEntity;
import au.superdraftfantasy.api.player.PlayerRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Set;


@Service
public class TeamService {

    private final TeamRepository teamRepository;
    private final PlayerRepository playerRepository;

    public TeamService(TeamRepository teamRepository, PlayerRepository playerRepository) {
        this.teamRepository = teamRepository;
        this.playerRepository = playerRepository;
    }

    public Long addPlayer(@NotBlank final Long teamID, Long playerID) {
        TeamEntity team = teamRepository.findById(teamID).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Team with ID '" + teamID + "' Not Found."));
        checkIfPlayerAlreadyDrafted(team, playerID);
        addPlayerToTeam(team, playerID);
        return teamRepository.save(team).getId();
    }

    private void addPlayerToTeam(TeamEntity team, Long playerID) {
        PlayerEntity player =  playerRepository.findById(playerID).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Player with ID '" + playerID + "' Not Found."));
        team.getPlayers().add(player);
    }

    private void checkIfPlayerAlreadyDrafted(TeamEntity team, Long playerID) {
        Set<CoachEntity> coachList = team.getCoach().getDraft().getCoaches();

        coachList.stream().forEach(coach -> {
            Set<PlayerEntity> playerList = coach.getTeam().getPlayers();
            Boolean playerAlreadyDrafted = playerList.stream().anyMatch(player -> player.getId() == playerID);
            if(playerAlreadyDrafted) {
                throw new ResponseStatusException(HttpStatus.CONFLICT, "Player with ID '" + playerID + "' is already drafted by Team with ID '" + coach.getTeam().getId() + "'.");
            }
        });
    }

}