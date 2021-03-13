package au.superdraftfantasy.api.seasonSummary;

public interface ISeasonSummaryBase {

    Long getPlayerId();

    Integer getYear();

    Integer getGames();

    Integer getAverage();

    Integer getDisposals();

    Integer getDisposalEfficiency();

    double getTackles();

}
