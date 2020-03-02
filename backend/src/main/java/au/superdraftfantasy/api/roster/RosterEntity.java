package au.superdraftfantasy.api.roster;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import au.superdraftfantasy.api.draft.DraftEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
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

    @OneToMany(mappedBy = "roster")
    @EqualsAndHashCode.Exclude
    private Set<DraftEntity> drafts;

}