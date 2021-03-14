package au.superdraftfantasy.api.game;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GameRepository extends JpaRepository<GameEntity, Long> {
    List<IGameBase> findAllByPlayer_Id(Long playerId);
}


