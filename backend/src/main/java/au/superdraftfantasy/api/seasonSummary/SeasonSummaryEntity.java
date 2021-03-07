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

    @NotBlank
    @Enumerated(EnumType.ORDINAL)
    private AflTeamEnum aflTeamId;

    @NotNull
    private int year;

    @NotNull
    private int games;

    @NotNull
    private double average;

    // TODO: Remove TotalPoints From Insert.

    @NotNull
    private double kicks;

    @NotNull
    private double handballs;

    @NotNull
    private double marks;

    @NotNull
    private double goals;

    @NotNull
    private double behinds;

    @NotNull
    private double tackles;

    @NotNull
    private double hitouts;

    @NotNull
    private double goalAssists;

    @NotNull
    private double insideFiftys;

    @NotNull
    private double clearances;

    @NotNull
    private double clangers;

    @NotNull
    private double reboundFiftys;

    @NotNull
    private double freesFor;

    @NotNull
    private double freesAgainst;

    @NotNull
    private double dreamTeam;

    @NotNull
    private double contestedPossessions;

    @NotNull
    private double uncontestedPossessions;

    @NotNull
    private double effectiveDisposals;

    @NotNull
    private double contestedMarks;

    @NotNull
    private double marksInsideFifty;

    @NotNull
    private double onePercenters;

    @NotNull
    private double bounces;

    @NotNull
    private double centerClearances;

    @NotNull
    private double stoppageClearances;

    @NotNull
    private double scoreInvolvements;

    @NotNull
    private double metersGained;

    @NotNull
    private double turnovers;

    @NotNull
    private double intercepts;

    @NotNull
    private double tacklesInsideFifty;

    @NotNull
    private double timeOnGround;

}
