package au.superdraftfantasy.api.watchlistJoin;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface WatchlistJoinRepository extends CrudRepository<WatchlistJoinEntity, Long> {

    List<WatchlistJoinDao> findAllByTeamId(Long teamId);

    Optional<WatchlistJoinEntity> findByTeam_IdAndPlayer_Id(Long teamId, Long playerId);

}
