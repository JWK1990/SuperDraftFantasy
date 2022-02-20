package au.superdraftfantasy.api.player;

import au.superdraftfantasy.api.seasonSummary.ISeasonSummaryBase;
import au.superdraftfantasy.api.teamPlayerJoin.ITeamPlayerJoinBase;
import org.springframework.beans.factory.annotation.Value;

public interface IPlayerBase {

    Long getId();

    String getFirstName();

    String getLastName();

    Integer getAge();

    Integer getCareerGames();

    @Value("#{@playerDataFetcher.getAflTeam(target)}")
    String getAflTeam();

    Integer getJumperNumber();

    Integer getRoosterRating();

    Integer getMoneyballPrice();

    Integer getPsAverage();

    Integer getPrice2021();

    @Value("#{@playerDataFetcher.getPrimaryPosition(target)}")
    String getPrimaryPosition();

    @Value("#{@playerDataFetcher.getSecondaryPosition(target)}")
    String getSecondaryPosition();

    @Value("#{@playerDataFetcher.getSeasonSummary(target, args[0])}")
    ISeasonSummaryBase getSeasonSummary(int year);

    @Value("#{@playerDataFetcher.getTeamPlayerJoin(target, args[0])}")
    ITeamPlayerJoinBase getTeamPlayerJoin(Long draftId);

}

