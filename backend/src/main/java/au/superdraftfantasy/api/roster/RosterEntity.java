package au.superdraftfantasy.api.roster;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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