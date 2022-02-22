package au.superdraftfantasy.api.seasonSummary;

import au.superdraftfantasy.api.player.AflTeamEnum;
import au.superdraftfantasy.api.player.PlayerEntity;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class SeasonSummaryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "player_id")
    @JsonBackReference(value="player-seasonSummaries")
    private PlayerEntity player;

    @NotNull
    private Integer year;

    @NotBlank
    @Enumerated(EnumType.ORDINAL)
    private AflTeamEnum aflTeamId;

    private Integer games;

    private Integer average;

    private Integer kicks;

    private Integer handballs;

    private Integer disposals;

    private Integer marks;

    private Double goals;

    private Double behinds;

    private Integer tackles;

    private Integer hitouts;

    private Double goalAssists;

    private Integer insideFiftys;

    private Integer clearances;

    private Integer clangers;

    private Integer reboundFiftys;

    private Double freesFor;

    private Double freesAgainst;

    private Integer dreamTeam;

    private Integer contestedPossessions;

    private Integer uncontestedPossessions;

    private Integer effectiveDisposals;

    private Integer disposalEfficiency;

    private Double contestedMarks;

    private Double marksInsideFifty;

    private Integer onePercenters;

    private Double bounces;

    private Double centerClearances;

    private Double stoppageClearances;

    private Integer scoreInvolvements;

    private Integer metersGained;

    private Integer turnovers;

    private Integer intercepts;

    private Double tacklesInsideFifty;

    private Integer timeOnGround;

    private Integer hardnessRating;

    private Double freesRatio;

}
