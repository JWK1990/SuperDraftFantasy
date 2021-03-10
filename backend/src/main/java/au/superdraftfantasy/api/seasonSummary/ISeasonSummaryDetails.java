package au.superdraftfantasy.api.seasonSummary;

public interface ISeasonSummaryDetails extends ISeasonSummaryBase {
    double getKicks();
    double getHandballs();
    double getMarks();
    double getGoals();
    double getBehinds();
    double getHitouts();
    double getGoalAssists();
    double getInsideFiftys();
    double getClearances();
    double getClangers();
    double getReboundFiftys();
    double getFreesFor();
    double getFreesAgainst();
    double getContestedPossessions();
    double getUncontestedPossessions();
    double getContestedMarks();
    double getMarksInsideFifty();
    double getOnePercenters();
    double getBounces();
    double getCenterClearances();
    double getStoppageClearances();
    double getScoreInvolvements();
    double getMetersGained();
    double getTurnovers();
    double getIntercepts();
    double getTacklesInsideFifty();
    double getTimeOnGround();
}
