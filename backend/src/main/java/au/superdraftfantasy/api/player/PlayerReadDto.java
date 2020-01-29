package au.superdraftfantasy.api.player;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PlayerReadDto {

    Long id;

    String firstName;

    String lastName;

    AflTeamEnum aflTeamId;

    Long average;

}