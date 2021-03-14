package au.superdraftfantasy.api.team;

import au.superdraftfantasy.api.teamPlayerJoin.TeamPlayerJoinEntity;
import org.springframework.stereotype.Component;

import java.util.Comparator;
import java.util.IntSummaryStatistics;

@Component
public class TeamStatsFetcher {

    public TeamPlayerJoinEntity getMostExpensivePlayer(TeamEntity team) {
        return team
                .getTeamPlayerJoins()
                .stream()
                .max(Comparator.comparing(TeamPlayerJoinEntity::getPrice))
                .orElse(null);
    }

    public TeamPlayerJoinEntity getBestValuePlayer(TeamEntity team) {
        return team
                .getTeamPlayerJoins()
                .stream()
                .max(Comparator.comparing(TeamPlayerJoinEntity::getPriceDifference))
                .orElse(null);
    }

    public TeamPlayerJoinEntity getWorstValuePlayer(TeamEntity team) {
        return team
                .getTeamPlayerJoins()
                .stream()
                .min(Comparator.comparing(TeamPlayerJoinEntity::getPriceDifference))
                .orElse(null);
    }

    public IntSummaryStatistics getRoosterSummaryStats(TeamEntity team) {
        return team
                .getTeamPlayerJoins()
                .stream()
                .mapToInt(teamPlayerJoin -> teamPlayerJoin.getPlayer().getRoosterRating())
                .summaryStatistics();
    }

    public IntSummaryStatistics getAverageSummaryStats(TeamEntity team) {
        return team
                .getTeamPlayerJoins()
                .stream()
                .map(teamPlayerJoin -> teamPlayerJoin.getPlayer().getSeasonSummaries().stream().filter(seasonSummaryEntity -> seasonSummaryEntity.getYear() == 2020))
                .mapToInt()
    }

}
