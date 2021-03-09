package au.superdraftfantasy.api.player;

import au.superdraftfantasy.api.seasonSummary.ISeasonSummaryDetails;
import au.superdraftfantasy.api.teamPlayerJoin.TeamPlayerJoinBaseInterface;
import lombok.Data;
import lombok.EqualsAndHashCode;


@EqualsAndHashCode(callSuper = true)
@Data
public class PlayerDetailsReadDto extends PlayerBaseReadDto {

    public PlayerDetailsReadDto(
            IPlayerBase playerBase,
            ISeasonSummaryDetails seasonSummaryDetails,
            TeamPlayerJoinBaseInterface teamPlayerJoin
    ) {
        super(playerBase, seasonSummaryDetails, teamPlayerJoin);
        this.kicks = seasonSummaryDetails.getKicks();
        this.handballs = seasonSummaryDetails.getHandballs();
        this.marks = seasonSummaryDetails.getMarks();
        this.goals = seasonSummaryDetails.getGoals();
        this.behinds = seasonSummaryDetails.getBehinds();
        this.hitouts = seasonSummaryDetails.getHitouts();
        this.goalAssists = seasonSummaryDetails.getGoalAssists();
        this.insideFiftys = seasonSummaryDetails.getInsideFiftys();
        this.clearances = seasonSummaryDetails.getClearances();
        this.clangers = seasonSummaryDetails.getClangers();
        this.reboundFiftys = seasonSummaryDetails.getReboundFiftys();
        this.freesFor = seasonSummaryDetails.getFreesFor();
        this.freesAgainst = seasonSummaryDetails.getFreesAgainst();
        this.contestedPossessions = seasonSummaryDetails.getContestedPossessions();
        this.uncontestedPossessions = seasonSummaryDetails.getUncontestedPossessions();
        this.contestedMarks = seasonSummaryDetails.getContestedMarks();
        this.marksInsideFifty = seasonSummaryDetails.getMarksInsideFifty();
        this.onePercenters = seasonSummaryDetails.getOnePercenters();
        this.bounces = seasonSummaryDetails.getBounces();
        this.centerClearances = seasonSummaryDetails.getCenterClearances();
        this.stoppageClearances = seasonSummaryDetails.getStoppageClearances();
        this.scoreInvolvements = seasonSummaryDetails.getScoreInvolvements();
        this.metersGained = seasonSummaryDetails.getMetersGained();
        this.turnovers = seasonSummaryDetails.getTurnovers();
        this.intercepts = seasonSummaryDetails.getIntercepts();
        this.tacklesInsideFifty = seasonSummaryDetails.getTacklesInsideFifty();
        this.timeOnGround = seasonSummaryDetails.getTimeOnGround();
    }

    double kicks;
    double handballs;
    double marks;
    double goals;
    double behinds;
    double hitouts;
    double goalAssists;
    double insideFiftys;
    double clearances;
    double clangers;
    double reboundFiftys;
    double freesFor;
    double freesAgainst;
    double contestedPossessions;
    double uncontestedPossessions;
    double contestedMarks;
    double marksInsideFifty;
    double onePercenters;
    double bounces;
    double centerClearances;
    double stoppageClearances;
    double scoreInvolvements;
    double metersGained;
    double turnovers;
    double intercepts;
    double tacklesInsideFifty;
    double timeOnGround;

}
