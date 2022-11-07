package au.superdraftfantasy.api.seasonSummary;

public interface ISeasonSummaryBase {

    Long getPlayerId();

    Integer getYear();

    Integer getGames();

    Integer getAverage();

    Integer getDisposals();

    Integer getDisposalEfficiency();

    Integer getTackles();

    Integer getHardnessRating();

    Integer getPrice();

    Integer getSdTeamId();

    Integer getPrimaryPositionId();

    Integer getSecondaryPositionId();

    Integer getBaselineOverUnder();

    Integer getActualValue();

    Integer getPriceOverUnder();

}
