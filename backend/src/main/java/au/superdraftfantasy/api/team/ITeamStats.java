package au.superdraftfantasy.api.team;

import org.springframework.beans.factory.annotation.Value;

import java.util.IntSummaryStatistics;

public interface ITeamStats {

    Long getId();

    String getName();

    Long getBudget();

/*    @Value("#{@teamStatsFetcher.getMostExpensivePlayer(target)}")
    ITeamPlayerJoinBase getMostExpensivePlayer();

    @Value("#{@teamStatsFetcher.getBestValuePlayer(target)}")
    ITeamPlayerJoinBase getBestValuePlayer();

    @Value("#{@teamStatsFetcher.getWorstValuePlayer(target)}")
    ITeamPlayerJoinBase getWorstValuePlayer();

    @Value("#{@teamStatsFetcher.getBiggestRooster(target)}")
    IPlayerForStats getBiggestRooster();

    @Value("#{@teamStatsFetcher.getSmallestRooster(target)}")
    IPlayerForStats getSmallestRooster();*/

    @Value("#{@teamStatsFetcher.getMoneyballPriceStats(target)}")
    IntSummaryStatistics getMoneyball();

    @Value("#{@teamStatsFetcher.getPriceDifferenceStats(target)}")
    IntSummaryStatistics getOversUnders();

    @Value("#{@teamStatsFetcher.getRoosterSummaryStats(target)}")
    IntSummaryStatistics getRooster();

    @Value("#{@teamStatsFetcher.getScAverageSummaryStats(target)}")
    IntSummaryStatistics getSupercoach();

    @Value("#{@teamStatsFetcher.getPsAverageSummaryStats(target)}")
    IntSummaryStatistics getPreSeason();

    @Value("#{@teamStatsFetcher.getDefSummaryStats(target)}")
    IntSummaryStatistics getDef();

    @Value("#{@teamStatsFetcher.getMidSummaryStats(target)}")
    IntSummaryStatistics getMid();

    @Value("#{@teamStatsFetcher.getRucSummaryStats(target)}")
    IntSummaryStatistics getRuc();

    @Value("#{@teamStatsFetcher.getFwdSummaryStats(target)}")
    IntSummaryStatistics getFwd();

    @Value("#{@teamStatsFetcher.getSCStandardPrice(target)}")
    IntSummaryStatistics getScStandardPrice();

}
