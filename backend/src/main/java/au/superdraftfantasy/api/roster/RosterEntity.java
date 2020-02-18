package au.superdraftfantasy.api.roster;

import au.superdraftfantasy.api.draft.DraftEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class RosterEntity {

    @Id
    private Long id;

    private String type;

    private Long defenders;

    private Long midfielders;

    private Long rucks;

    private Long forwards;

    private Long bench;

    @OneToMany(mappedBy = "roster")
    @EqualsAndHashCode.Exclude
    private Set<DraftEntity> drafts;

}