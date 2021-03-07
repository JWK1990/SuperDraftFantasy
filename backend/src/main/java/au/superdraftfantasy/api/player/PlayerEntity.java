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
import java.time.LocalDate;
import java.util.List;

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

    private LocalDate dateOfBirth;

    @NotBlank
    @Enumerated(EnumType.ORDINAL)
    private AflTeamEnum aflTeamId;

    private Integer jumperNumber;

    private Integer height;

    private Integer weight;

    @ManyToMany
    @JoinTable(
            name = "player_position_join",
            joinColumns = @JoinColumn(name = "player_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "position_id", referencedColumnName = "id"))
    private List<PositionEntity> positions;

    // Follows example here - https://stackoverflow.com/questions/5127129/mapping-many-to-many-association-table-with-extra-columns.
    @OneToMany(mappedBy = "player")
    @JsonManagedReference(value="player-teamPlayerJoin")
    private List<TeamPlayerJoinEntity> teamPlayerJoins;

    @OneToMany(mappedBy = "player", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference(value="player-seasonSummaries")
    private List<SeasonSummaryEntity> seasonSummaries;

}
