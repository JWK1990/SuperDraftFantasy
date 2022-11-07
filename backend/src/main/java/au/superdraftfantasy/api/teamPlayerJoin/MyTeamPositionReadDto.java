package au.superdraftfantasy.api.teamPlayerJoin;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MyTeamPositionReadDto {

    Long teamId;

    List<TeamPlayerJoinReadDto> teamPlayerJoins;

}
