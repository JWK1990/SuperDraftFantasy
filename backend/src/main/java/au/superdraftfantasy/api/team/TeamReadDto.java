package au.superdraftfantasy.api.team;

import java.util.List;
import java.util.stream.Collectors;

import com.fasterxml.jackson.annotation.JsonIgnore;

import au.superdraftfantasy.api.player.PlayerReadDto;
import au.superdraftfantasy.api.teamPlayerJoin.TeamPlayerJoinReadDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class TeamReadDto {

    private Long id;

    private String name;

    private Long budget;

    @JsonIgnore
    private List<TeamPlayerJoinReadDto> teamPlayerJoins;

    private List<PlayerReadDto> players;

    public List<PlayerReadDto> getPlayers() {
        return this.teamPlayerJoins.stream().map(teamPlayerJoin -> teamPlayerJoin.getPlayer()).collect(Collectors.toList());
    }

}