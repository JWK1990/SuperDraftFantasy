package au.superdraftfantasy.api.roster;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RosterReadDto {

    private Long id;

    private String type;

    private Long defenders;

    private Long midfielders;

    private Long rucks;

    private Long forwards;

    private Long bench;

}