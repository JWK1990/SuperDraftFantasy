package au.superdraftfantasy.api.player;

import au.superdraftfantasy.api.position.PositionEntity;
import au.superdraftfantasy.api.position.PositionTypeEnum;
import au.superdraftfantasy.api.seasonSummary.SeasonSummaryEntity;
import au.superdraftfantasy.api.teamPlayerJoin.TeamPlayerJoinEntity;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class PlayerDataFetcher {

    public String getAflTeam(PlayerEntity player) {
        return player.getAflTeamId().getAflTeamName();
    };

    public PositionTypeEnum getPrimaryPosition(PlayerEntity player) {
        List<PositionEntity> positions = player.getPositions();
        return positions.size() > 0
                ? positions.get(0).getType()
                : null;
    }

    public PositionTypeEnum getSecondaryPosition(PlayerEntity player) {
        List<PositionEntity> positions = player.getPositions();
        return positions.size() > 1
                ? positions.get(1).getType()
                : null;
    }

    public SeasonSummaryEntity getSeasonSummary(PlayerEntity playerEntity, int year) {
        return playerEntity.getSeasonSummaries().stream()
                .filter(seasonSummary -> seasonSummary.getYear() == year)
                .findAny()
                .orElse(null);
    }

    public TeamPlayerJoinEntity getTeamPlayerJoin(PlayerEntity playerEntity, int draftId) {
        return playerEntity.getTeamPlayerJoins()
                .stream()
                .filter(teamPlayerJoin -> teamPlayerJoin.getTeam().getDraft().getId() == draftId)
                .findAny()
                .orElse(null);
    }

}
