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

    private Long def;

    private Long mid;

    private Long ruc;

    private Long fwd;

    private Long bench;

}