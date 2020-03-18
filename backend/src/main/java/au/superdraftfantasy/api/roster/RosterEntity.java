package au.superdraftfantasy.api.roster;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class RosterEntity {

    @Id
    private Long id;

    private String type;

    private Long def;

    private Long mid;

    private Long ruc;

    private Long fwd;

    private Long bench;

}
