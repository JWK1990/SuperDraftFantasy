package au.superdraftfantasy.api.team;

import au.superdraftfantasy.api.player.PlayerEntity;
import au.superdraftfantasy.api.position.PositionTypeEnum;
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
                .filter(teamPlayerJoin -> teamPlayerJoin.getPriceDifference() != null)
                .max(Comparator.comparing(TeamPlayerJoinEntity::getPriceDifference))
                .orElse(null);
    }

    public TeamPlayerJoinEntity getWorstValuePlayer(TeamEntity team) {
        return team
                .getTeamPlayerJoins()
                .stream()
                .filter(teamPlayerJoin -> teamPlayerJoin.getPriceDifference() != null)
                .min(Comparator.comparing(TeamPlayerJoinEntity::getPriceDifference))
                .orElse(null);
    }

    public IntSummaryStatistics getMoneyballPriceStats(TeamEntity team) {
        return team
                .getTeamPlayerJoins()
                .stream()
                .filter(teamPlayerJoin -> teamPlayerJoin.getPlayer().getMoneyballPrice() != null)
                .mapToInt(teamPlayerJoin -> teamPlayerJoin.getPlayer().getMoneyballPrice())
                .summaryStatistics();
    }

    public IntSummaryStatistics getPriceDifferenceStats(TeamEntity team) {
        return team
                .getTeamPlayerJoins()
                .stream()
                .filter(teamPlayerJoin -> teamPlayerJoin.getPriceDifference() != null)
                .mapToInt(TeamPlayerJoinEntity::getPriceDifference)
                .summaryStatistics();
    }


    public IntSummaryStatistics getRoosterSummaryStats(TeamEntity team) {
        return team
                .getTeamPlayerJoins()
                .stream()
                .filter(teamPlayerJoin -> teamPlayerJoin.getPlayer().getRoosterRating() != null)
                .mapToInt(teamPlayerJoin -> teamPlayerJoin.getPlayer().getRoosterRating())
                .summaryStatistics();
    }

    public PlayerEntity getBiggestRooster(TeamEntity team) {
        return team
                .getTeamPlayerJoins()
                .stream()
                .map(TeamPlayerJoinEntity::getPlayer)
                .filter(player -> player.getRoosterRating() != null)
                .max(Comparator.comparing(PlayerEntity::getRoosterRating))
                .orElse(null);
    }

    public PlayerEntity getSmallestRooster(TeamEntity team) {
        return team
                .getTeamPlayerJoins()
                .stream()
                .map(TeamPlayerJoinEntity::getPlayer)
                .filter(player -> player.getRoosterRating() != null)
                .min(Comparator.comparing(PlayerEntity::getRoosterRating))
                .orElse(null);
    }

    public IntSummaryStatistics getAverageSummaryStats(TeamEntity team) {
        return team
                .getTeamPlayerJoins()
                .stream()
                .filter(teamPlayerJoin -> teamPlayerJoin.getPlayer().getScAverage() != null && teamPlayerJoin.getPlayer().getScAverage() != 0)
                .mapToInt(teamPlayerJoin -> teamPlayerJoin.getPlayer().getScAverage())
                .summaryStatistics();
    }

    public IntSummaryStatistics getPsAverageSummaryStats(TeamEntity team) {
        return team
                .getTeamPlayerJoins()
                .stream()
                .filter(teamPlayerJoin -> teamPlayerJoin.getPlayer().getPsAverage() != null && teamPlayerJoin.getPlayer().getPsAverage() != 0)
                .mapToInt(teamPlayerJoin -> teamPlayerJoin.getPlayer().getPsAverage())
                .summaryStatistics();
    }

    public IntSummaryStatistics getDefSummaryStats(TeamEntity team) {
        return team
                .getTeamPlayerJoins()
                .stream()
                .filter(teamPlayerJoin -> teamPlayerJoin.getMyTeamPosition().getType() == PositionTypeEnum.DEF
                        && teamPlayerJoin.getPlayer().getScAverage() != null
                        && teamPlayerJoin.getPlayer().getScAverage() != 0
                )
                .mapToInt(teamPlayerJoin -> teamPlayerJoin.getPlayer().getScAverage())
                .summaryStatistics();
    }

    public IntSummaryStatistics getMidSummaryStats(TeamEntity team) {
        return team
                .getTeamPlayerJoins()
                .stream()
                .filter(teamPlayerJoin -> teamPlayerJoin.getMyTeamPosition().getType() == PositionTypeEnum.MID
                        && teamPlayerJoin.getPlayer().getScAverage() != null
                        && teamPlayerJoin.getPlayer().getScAverage() != 0
                )
                .mapToInt(teamPlayerJoin -> teamPlayerJoin.getPlayer().getScAverage())
                .summaryStatistics();
    }

    public IntSummaryStatistics getRucSummaryStats(TeamEntity team) {
        return team
                .getTeamPlayerJoins()
                .stream()
                .filter(teamPlayerJoin -> teamPlayerJoin.getMyTeamPosition().getType() == PositionTypeEnum.RUC
                        && teamPlayerJoin.getPlayer().getScAverage() != null
                        && teamPlayerJoin.getPlayer().getScAverage() != 0
                )
                .mapToInt(teamPlayerJoin -> teamPlayerJoin.getPlayer().getScAverage())
                .summaryStatistics();
    }

    public IntSummaryStatistics getFwdSummaryStats(TeamEntity team) {
        return team
                .getTeamPlayerJoins()
                .stream()
                .filter(teamPlayerJoin -> teamPlayerJoin.getMyTeamPosition().getType() == PositionTypeEnum.FWD
                        && teamPlayerJoin.getPlayer().getScAverage() != null
                        && teamPlayerJoin.getPlayer().getScAverage() != 0
                )
                .mapToInt(teamPlayerJoin -> teamPlayerJoin.getPlayer().getScAverage())
                .summaryStatistics();
    }

}
