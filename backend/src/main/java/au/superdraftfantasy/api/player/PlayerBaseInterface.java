package au.superdraftfantasy.api.player;

import au.superdraftfantasy.api.seasonSummary.SeasonSummaryBaseStats;
import org.springframework.beans.factory.annotation.Value;

public interface PlayerBaseInterface {

    Long getId();

    String getFirstName();

    String getLastName();

    @Value("#{@playerDataFetcher.getAflTeam(target)}")
    String getAflTeam();

    Integer getJumperNumber();

    @Value("#{@playerDataFetcher.getPrimaryPosition(target)}")
    String getPrimaryPosition();

    @Value("#{@playerDataFetcher.getSecondaryPosition(target)}")
    String getSecondaryPosition();

    @Value("#{@playerDataFetcher.getBaseStats(target, args[0])}")
    SeasonSummaryBaseStats getBaseStats(int year);

}

