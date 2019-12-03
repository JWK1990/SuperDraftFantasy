package au.superdraftfantasy.api.team;

import java.util.Arrays;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import au.superdraftfantasy.api.team.TeamEntity;
import au.superdraftfantasy.api.user.UserRepository;


@Service
public class TeamService {

    private final TeamRepository teamRepository;

    @Autowired
    public TeamService(
        @NotNull TeamRepository teamRepository
    ) {
        this.teamRepository = teamRepository;
    }


    public Long createTeam(@NotBlank final TeamEntity teamEntity) {
        
        final String teamName = teamEntity.getName();

        if(teamRepository.existsByName(teamName)) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Cannot create Team. A team with the name '" + teamName + "' already exists.");
        }

        return teamRepository.save(teamEntity).getId();
    }

}