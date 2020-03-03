package au.superdraftfantasy.api.teamPlayerJoin;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TeamPlayerJoinWriteDto {

    private Long teamId;

    private Long playerId;

    private String myTeamPosition;

}
