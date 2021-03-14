package au.superdraftfantasy.api.team;

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

    @Value("#{@teamStatsFetcher.getRoosterSummaryStats(target)}")
    IntSummaryStatistics getRoosterSummaryStats();

}
