package au.superdraftfantasy.api.player;

import au.superdraftfantasy.api.position.PositionEntity;
import au.superdraftfantasy.api.seasonSummary.SeasonSummaryEntity;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class PlayerDataFetcher {

    public String getAflTeam(PlayerEntity player) {
        return player.getAflTeamId().getAflTeamName();
    };

    public String getPrimaryPosition(PlayerEntity player) {
        List<PositionEntity> positions = player.getPositions();
        return positions.size() > 0
                ? positions.get(0).getType().getPositionName()
                : null;
    }

    public String getSecondaryPosition(PlayerEntity player) {
        List<PositionEntity> positions = player.getPositions();
        return positions.size() > 1
                ? positions.get(1).getType().getPositionName()
                : null;
    }

    public SeasonSummaryEntity getBaseStats(PlayerEntity playerEntity, int year) {
        return playerEntity.getSeasonSummaries().stream()
                .filter(seasonSummary -> seasonSummary.getYear() == year)
                .findAny()
                .orElse(null);
    }

}
