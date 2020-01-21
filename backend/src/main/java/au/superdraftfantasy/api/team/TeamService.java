package au.superdraftfantasy.api.team;

import javax.validation.constraints.NotBlank;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;


@Service
public class TeamService {

    private final TeamRepository teamRepository;

    public TeamService(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    public Long draftPlayer(@NotBlank final TeamEntity team, Long playerId) {
        checkIfTeamAlreadyExists(team);
        return teamRepository.save(team).getId();
    }

    private void getPlayerDetails(Long playerId) {

    }

    private void checkIfTeamAlreadyExists(TeamEntity team) {
        final String teamName = team.getName();

        if(teamRepository.existsByName(teamName)) {
            throw new ResponseStatusException(
                    HttpStatus.CONFLICT,
                    "Cannot create Team. A team with the name '" + teamName + "' already exists."
            );
        }
    }

}