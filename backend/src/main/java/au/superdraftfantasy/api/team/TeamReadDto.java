package au.superdraftfantasy.api.team;

import au.superdraftfantasy.api.player.PlayerReadDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Set;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class TeamReadDto {

    private Long id;

    private String name;

    private Long budget;

    private List<PlayerReadDto> players;

}