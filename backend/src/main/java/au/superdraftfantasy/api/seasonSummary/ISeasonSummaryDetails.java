package au.superdraftfantasy.api.seasonSummary;

public interface ISeasonSummaryDetails extends ISeasonSummaryBase {
    Integer getKicks();
    Integer getHandballs();
    Integer getMarks();
    Double getGoals();
    Double getBehinds();
    Integer getHitouts();
    Double getGoalAssists();
    Integer getInsideFiftys();
    Integer getClearances();
    Integer getClangers();
    Integer getReboundFiftys();
    Double getFreesFor();
    Double getFreesAgainst();
    Integer getContestedPossessions();
    Integer getUncontestedPossessions();
    Double getContestedMarks();
    Double getMarksInsideFifty();
    Integer getOnePercenters();
    Double getBounces();
    Double getCenterClearances();
    Double getStoppageClearances();
    Integer getScoreInvolvements();
    Integer getMetersGained();
    Integer getTurnovers();
    Integer getIntercepts();
    Double getTacklesInsideFifty();
    Integer getTimeOnGround();

}
