package au.superdraftfantasy.api.player;

import au.superdraftfantasy.api.seasonSummary.ISeasonSummaryBase;
import au.superdraftfantasy.api.teamPlayerJoin.ITeamPlayerJoinBase;
import org.springframework.beans.factory.annotation.Value;

public interface IPlayerBase {

    Long getId();

    String getFirstName();

    String getLastName();

    Integer getAge();

    @Value("#{@playerDataFetcher.getAflTeam(target)}")
    String getAflTeam();

    Integer getRoosterRating();

    Integer getMoneyballPrice();

    Integer getPrice2021();

    Integer getRank();

    Integer getCareerPrice();

    Integer getCareerActualValue();

    Integer getCareerPriceOverUnder();

    Integer getCareerAverage();

    Integer getCareerAverageGames();

    @Value("#{@playerDataFetcher.getPrimaryPosition(target)}")
    String getPrimaryPosition();

    @Value("#{@playerDataFetcher.getSecondaryPosition(target)}")
    String getSecondaryPosition();

    @Value("#{@playerDataFetcher.getSeasonSummary(target, args[0])}")
    ISeasonSummaryBase getSeasonSummary(int year);

    @Value("#{@playerDataFetcher.getTeamPlayerJoin(target, args[0])}")
    ITeamPlayerJoinBase getTeamPlayerJoin(Long draftId);

}

