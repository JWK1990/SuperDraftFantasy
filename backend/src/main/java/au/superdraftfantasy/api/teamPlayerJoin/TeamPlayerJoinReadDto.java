package au.superdraftfantasy.api.teamPlayerJoin;

import au.superdraftfantasy.api.player.PlayerReadDto;
import au.superdraftfantasy.api.position.PositionReadDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TeamPlayerJoinReadDto {

    private PlayerReadDto player;

    private Long price;

    private PositionReadDto myTeamPosition;

}
