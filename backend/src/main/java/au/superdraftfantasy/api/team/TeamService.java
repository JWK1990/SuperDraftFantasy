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
        TeamEntity team = teamRepository.findById(teamID).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Team Not Found."));
        checkIfPlayerAlreadyDrafted(team, playerID);
        addPlayerToTeam(team, playerID);
        return teamRepository.save(team).getId();
    }

    private void addPlayerToTeam(TeamEntity team, Long playerId) {
        PlayerEntity player =  playerRepository.findById(playerId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Player Not Found."));
        team.getPlayers().add(player);
    }

    private void checkIfPlayerAlreadyDrafted(TeamEntity team, Long playerId) {
        Set<CoachEntity> coachList = team.getCoach().getDraft().getCoaches();

        coachList.stream().forEach(coach -> {
            Boolean playerAlreadyDrafted = coach.getTeam().getPlayers().stream().anyMatch(player -> player.getId() == playerId);
            if(playerAlreadyDrafted) {
                throw new ResponseStatusException(HttpStatus.CONFLICT, "Player with ID '" + playerId + "' is already drafted."
                );
            }
        });
    }

}