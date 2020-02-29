package au.superdraftfantasy.api.team;

import java.util.List;
import java.util.Set;

import javax.validation.constraints.NotBlank;

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

    public TeamService(ModelMapper modelMapper, TeamRepository teamRepository, PlayerRepository playerRepository) {
        this.teamRepository = teamRepository;
        this.playerRepository = playerRepository;
        this.modelMapper = modelMapper;
    }

    public TeamReadDto addPlayer(@NotBlank final Long teamID, Long playerID, Long salePrice) {
        TeamEntity team = teamRepository.findById(teamID).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Team with ID '" + teamID + "' Not Found."));
        checkIfPlayerAlreadyDrafted(team, playerID);
        addPlayerToTeam(team, playerID);
        team.setBudget(team.getBudget() - salePrice);
        TeamEntity updatedTeam = teamRepository.save(team);
        return modelMapper.map(updatedTeam, TeamReadDto.class);
    }

    private void addPlayerToTeam(TeamEntity team, Long playerID) {
        PlayerEntity player =  playerRepository.findById(playerID).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Player with ID '" + playerID + "' Not Found."));
        team.getPlayers().add(player);
    }

    private void checkIfPlayerAlreadyDrafted(TeamEntity team, Long playerID) {
        List<CoachEntity> coachList = team.getCoach().getDraft().getCoaches();
        coachList.stream().forEach(coach -> {
            List<PlayerEntity> playerList = coach.getTeam().getPlayers();
            Boolean playerAlreadyDrafted = playerList.stream().anyMatch(player -> player.getId() == playerID);
            if(playerAlreadyDrafted) {
                throw new ResponseStatusException(HttpStatus.CONFLICT, "Player with ID '" + playerID + "' is already drafted by Team with ID '" + coach.getTeam().getId() + "'.");
            }
        });
    }

}