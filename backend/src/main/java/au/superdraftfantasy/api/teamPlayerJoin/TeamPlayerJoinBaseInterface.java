package au.superdraftfantasy.api.teamPlayerJoin;

import org.springframework.beans.factory.annotation.Value;

public interface TeamPlayerJoinBaseInterface {

    @Value("#{target.team.id}")
    Long getTeamId();

    @Value("#{target.player.id}")
    Long getPlayerId();

    Integer getPrice();

}
