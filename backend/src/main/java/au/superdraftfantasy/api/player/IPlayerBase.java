package au.superdraftfantasy.api.player;

import au.superdraftfantasy.api.seasonSummary.ISeasonSummaryBase;
import au.superdraftfantasy.api.teamPlayerJoin.TeamPlayerJoinBaseInterface;
import org.springframework.beans.factory.annotation.Value;

public interface IPlayerBase {

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

    @Value("#{@playerDataFetcher.getSeasonSummary(target, args[0])}")
    ISeasonSummaryBase getBaseStats(int year);

    @Value("#{@playerDataFetcher.getTeamPlayerJoin(target, args[0])}")
    TeamPlayerJoinBaseInterface getTeamPlayerJoin(Long draftId);

}

