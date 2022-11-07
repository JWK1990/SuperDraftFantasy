package au.superdraftfantasy.api.watchlistJoin;

import org.springframework.beans.factory.annotation.Value;

public interface WatchlistJoinDao {

    @Value("#{target.player.id}")
    Long getPlayerId();

}
