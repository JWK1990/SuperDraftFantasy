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
    Optional<PlayerBaseInterface> findBaseById(Long playerId);
    List<PlayerBaseInterface> findAllBaseBy();
    Page<PlayerBaseInterface> findAllBasePageBy(Pageable pageable);
}
