package au.superdraftfantasy.api.seasonSummary;

public interface ISeasonSummaryDetails extends ISeasonSummaryBase {
    Integer getKicks();
    Integer getHandballs();
    Integer getMarks();
    Integer getGoals();
    Integer getBehinds();
    Integer getHitouts();
    Integer getGoalAssists();
    Integer getInsideFiftys();
    Integer getClearances();
    Integer getClangers();
    Integer getReboundFiftys();
    Integer getFreesFor();
    Integer getFreesAgainst();
    Integer getContestedPossessions();
    Integer getUncontestedPossessions();
    Integer getContestedMarks();
    Integer getMarksInsideFifty();
    Integer getOnePercenters();
    Integer getBounces();
    Integer getCenterClearances();
    Integer getStoppageClearances();
    Integer getScoreInvolvements();
    Integer getMetersGained();
    Integer getTurnovers();
    Integer getIntercepts();
    Integer getTacklesInsideFifty();
    Integer getTimeOnGround();
}
