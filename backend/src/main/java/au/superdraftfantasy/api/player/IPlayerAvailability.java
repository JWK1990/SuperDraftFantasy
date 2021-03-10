package au.superdraftfantasy.api.player;

import au.superdraftfantasy.api.position.PositionTypeEnum;
import au.superdraftfantasy.api.teamPlayerJoin.ITeamPlayerJoinBase;
import org.springframework.beans.factory.annotation.Value;

public interface IPlayerAvailability {

    Long getId();

    @Value("#{@playerDataFetcher.getPrimaryPosition(target)}")
    PositionTypeEnum getPrimaryPosition();

    @Value("#{@playerDataFetcher.getSecondaryPosition(target)}")
    PositionTypeEnum getSecondaryPosition();

    @Value("#{@playerDataFetcher.getTeamPlayerJoin(target, args[0])}")
    ITeamPlayerJoinBase getTeamPlayerJoin(Long draftId);

}

