package au.superdraftfantasy.api.team;

import au.superdraftfantasy.api.player.IPlayerForStats;
import au.superdraftfantasy.api.teamPlayerJoin.ITeamPlayerJoinBase;
import org.springframework.beans.factory.annotation.Value;

import java.util.IntSummaryStatistics;

public interface ITeamStats {

    Long getId();

    Long getBudget();

    @Value("#{@teamStatsFetcher.getMostExpensivePlayer(target)}")
    ITeamPlayerJoinBase getMostExpensivePlayer();

    @Value("#{@teamStatsFetcher.getBestValuePlayer(target)}")
    ITeamPlayerJoinBase getBestValuePlayer();

    @Value("#{@teamStatsFetcher.getWorstValuePlayer(target)}")
    ITeamPlayerJoinBase getWorstValuePlayer();

    @Value("#{@teamStatsFetcher.getMoneyballPriceStats(target)}")
    IntSummaryStatistics getMoneyballPriceStats();

    @Value("#{@teamStatsFetcher.getPriceDifferenceStats(target)}")
    IntSummaryStatistics getPriceDifferenceStats();

    @Value("#{@teamStatsFetcher.getRoosterSummaryStats(target)}")
    IntSummaryStatistics getRoosterSummaryStats();

    @Value("#{@teamStatsFetcher.getBiggestRooster(target)}")
    IPlayerForStats getBiggestRooster();

    @Value("#{@teamStatsFetcher.getSmallestRooster(target)}")
    IPlayerForStats getSmallestRooster();

    @Value("#{@teamStatsFetcher.getAverageSummaryStats(target)}")
    IntSummaryStatistics getAverageSummaryStats();

    @Value("#{@teamStatsFetcher.getPsAverageSummaryStats(target)}")
    IntSummaryStatistics getPsAverageSummaryStats();

    @Value("#{@teamStatsFetcher.getDefSummaryStats(target)}")
    IntSummaryStatistics getDefSummaryStats();

    @Value("#{@teamStatsFetcher.getDefSummaryStats(target)}")
    IntSummaryStatistics getMidSummaryStats();

    @Value("#{@teamStatsFetcher.getDefSummaryStats(target)}")
    IntSummaryStatistics getRucSummaryStats();

    @Value("#{@teamStatsFetcher.getDefSummaryStats(target)}")
    IntSummaryStatistics getFwdSummaryStats();

}
