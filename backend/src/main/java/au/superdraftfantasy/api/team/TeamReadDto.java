package au.superdraftfantasy.api.team;

import au.superdraftfantasy.api.teamPlayerJoin.TeamPlayerJoinReadDto;
import au.superdraftfantasy.api.player.PlayerReadDto;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.HashSet;
import java.util.Set;
import java.util.List;
import java.util.Arrays;
import java.util.stream.Collectors;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class TeamReadDto {

    private Long id;

    private String name;

    private Long budget;

    @JsonIgnore
    private Set<TeamPlayerJoinReadDto> teamPlayerJoins;

    private List<PlayerReadDto> players;

    public List<PlayerReadDto> getPlayers() {
        return this.teamPlayerJoins.stream().map(teamPlayerJoin -> teamPlayerJoin.getPlayer()).collect(Collectors.toList());
    }

}