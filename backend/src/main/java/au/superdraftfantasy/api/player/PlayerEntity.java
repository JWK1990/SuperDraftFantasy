package au.superdraftfantasy.api.player;

import au.superdraftfantasy.api.position.PositionEntity;
import au.superdraftfantasy.api.seasonSummary.SeasonSummaryEntity;
import au.superdraftfantasy.api.teamPlayerJoin.TeamPlayerJoinEntity;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.List;
import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PlayerEntity {

    @Id
    private Long id;

    @NotBlank
    private String firstName;

    @NotBlank
    private String lastName;

    @OneToMany(mappedBy = "player", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference(value="player-seasonSummary")
    private List<SeasonSummaryEntity> seasonSummaries;

    @ManyToMany
    @JoinTable(
            name = "player_position_join",
            joinColumns = @JoinColumn(name = "player_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "position_id", referencedColumnName = "id"))
    private Set<PositionEntity> positions;

    // Follows example here - https://stackoverflow.com/questions/5127129/mapping-many-to-many-association-table-with-extra-columns.
    @OneToMany(mappedBy = "player")
    @JsonManagedReference(value="player-teamPlayerJoin")
    private List<TeamPlayerJoinEntity> teamPlayerJoins;

}
