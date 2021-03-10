package au.superdraftfantasy.api.player;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PlayerRepository extends JpaRepository<PlayerEntity, Long> {
    Optional<PlayerEntity> findById(Long playerId);
    Optional<IPlayerBase> findPlayerBaseById(Long playerId);
    Optional<IPlayerDetails> findPlayerDetailsById(Long playerId);
    List<IPlayerBase> findAllBaseBy();
    Page<IPlayerBase> findAllBasePageBy(Pageable pageable);
    List<IPlayerAvailability> findAllPlayerAvailabilityBy();
}
