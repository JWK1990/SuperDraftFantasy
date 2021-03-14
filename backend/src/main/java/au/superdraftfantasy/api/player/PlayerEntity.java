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

    private Integer age;

    private Integer career_games;

    private Integer sc_standard_price;

    @NotBlank
    @Enumerated(EnumType.ORDINAL)
    private AflTeamEnum aflTeamId;

    private Integer jumperNumber;

    private Integer height;

    private Integer weight;

    private Integer roosterRating;

    private Integer moneyballPrice;

    @Column(name="price_2016")
    private Integer price2016;

    @Column(name="price_2017")
    private Integer price2017;

    @Column(name="price_2018")
    private Integer price2018;

    @Column(name="price_2019")
    private Integer price2019;

    @Column(name="price_2020")
    private Integer price2020;

    private Integer psAverage;

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
