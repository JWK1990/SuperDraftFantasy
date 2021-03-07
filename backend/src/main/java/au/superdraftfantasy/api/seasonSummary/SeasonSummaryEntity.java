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
    @JsonBackReference(value="player-seasonSummary")
    private PlayerEntity player;

    @NotNull
    private Integer year;

    @NotBlank
    @Enumerated(EnumType.ORDINAL)
    private AflTeamEnum aflTeamId;

    private Integer games;

    private double average;

    private double kicks;

    private double handballs;

    private double marks;

    private double goals;

    private double behinds;

    private double tackles;

    private double hitouts;

    private double goalAssists;

    private double insideFiftys;

    private double clearances;

    private double clangers;

    private double reboundFiftys;

    private double freesFor;

    private double freesAgainst;

    private double dreamTeam;

    private double contestedPossessions;

    private double uncontestedPossessions;

    private double effectiveDisposals;

    private double contestedMarks;

    private double marksInsideFifty;

    private double onePercenters;

    private double bounces;

    private double centerClearances;

    private double stoppageClearances;

    private double scoreInvolvements;

    private double metersGained;

    private double turnovers;

    private double intercepts;

    private double tacklesInsideFifty;

    private double timeOnGround;

}
