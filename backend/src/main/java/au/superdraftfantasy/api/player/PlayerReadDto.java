package au.superdraftfantasy.api.player;

import au.superdraftfantasy.api.position.PositionReadDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Collection;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PlayerReadDto {

    Long id;

    String firstName;

    String lastName;

    AflTeamEnum aflTeamId;

    Long average;

    Collection<PositionReadDto> positions;

}