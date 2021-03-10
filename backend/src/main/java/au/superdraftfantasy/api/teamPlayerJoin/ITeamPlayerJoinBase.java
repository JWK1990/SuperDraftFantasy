package au.superdraftfantasy.api.teamPlayerJoin;

import org.springframework.beans.factory.annotation.Value;

public interface ITeamPlayerJoinBase {

    @Value("#{target.team.id}")
    Long getTeamId();

    @Value("#{target.team.name}")
    String getTeamName();

    @Value("#{target.player.id}")
    Long getPlayerId();

    Integer getPrice();

}
