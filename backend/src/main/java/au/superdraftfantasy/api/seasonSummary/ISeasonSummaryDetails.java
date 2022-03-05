package au.superdraftfantasy.api.seasonSummary;

public interface ISeasonSummaryDetails extends ISeasonSummaryBase {
    Double getGoals();
    Integer getHitouts();
    Integer getInsideFiftys();
    Integer getClearances();
    Integer getClangers();
    Integer getReboundFiftys();
    Double getCenterClearances();
    Integer getTurnovers();
    Integer getIntercepts();
    Integer getTimeOnGround();
}
