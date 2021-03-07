package au.superdraftfantasy.api.playerSeason;

import au.superdraftfantasy.api.player.AflTeamEnum;
import au.superdraftfantasy.api.player.PlayerEntity;
import au.superdraftfantasy.api.position.PositionEntity;
import au.superdraftfantasy.api.teamPlayerJoin.TeamPlayerJoinEntity;
import com.fasterxml.jackson.annotation.JsonBackReference;
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
public class PlayerSeasonEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "player_id")
    @JsonBackReference(value="player-seasonDetails")
    private PlayerEntity player;

    @NotBlank
    @Enumerated(EnumType.ORDINAL)
    private AflTeamEnum aflTeamId;

    private int jumperNumber;

    private int height;

    private int weight;

    @ManyToMany
    @JoinTable(
            name = "player_season_details_position_join",
            joinColumns = @JoinColumn(name = "player_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "position_id", referencedColumnName = "id"))
    private Set<PositionEntity> positions;

    // Follows example here - https://stackoverflow.com/questions/5127129/mapping-many-to-many-association-table-with-extra-columns.
    @OneToMany(mappedBy = "player")
    @JsonManagedReference(value="player-teamPlayerJoin")
    private List<TeamPlayerJoinEntity> teamPlayerJoins;

}
