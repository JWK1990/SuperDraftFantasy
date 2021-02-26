package au.superdraftfantasy.api.teamPlayerJoin;

import au.superdraftfantasy.api.position.PositionTypeEnum;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MyTeamPositionWriteDto {

    Long playerId;

    PositionTypeEnum myTeamPosition;

}
