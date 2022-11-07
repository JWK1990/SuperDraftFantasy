package au.superdraftfantasy.api.teamPlayerJoin;

import au.superdraftfantasy.api.position.PositionTypeEnum;
import org.springframework.beans.factory.annotation.Value;

public interface ITeamPlayerJoinBase {

    @Value("#{target.team.id}")
    Long getTeamId();

    @Value("#{target.team.name}")
    String getTeamName();

    @Value("#{target.player.id}")
    Long getPlayerId();

    @Value("#{target.player.firstName}")
    String getFirstName();

    @Value("#{target.player.lastName}")
    String getLastName();

    Integer getPrice();

    @Value("#{target.myTeamPosition.type}")
    PositionTypeEnum getMyTeamPosition();

    String getPurchaseReviewRating();

    Integer getPriceDifference();

    String getSlotId();

}
