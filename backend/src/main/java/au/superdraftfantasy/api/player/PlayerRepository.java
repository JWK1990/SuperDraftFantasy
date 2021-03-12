package au.superdraftfantasy.api.player;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PlayerRepository extends JpaRepository<PlayerEntity, Long> {
    // Using getOne fetches a reference (returns primaryKey only).
    // Using find returns the full Entity, use for searching when we might find null, therefore return an Optional.
    // Using get also returns the full Entity, but expects to get something, therefore no need for Optional.
    // Use getOne where possible, as this is the equivalent on EntityManager GetReference.
    // This should be more performant that fetching the entire Entity.
    Optional<PlayerEntity> findById(Long playerId);

    Optional<IPlayerBase> findPlayerBaseById(Long playerId);

    Optional<IPlayerDetails> findPlayerDetailsById(Long playerId);

    List<IPlayerBase> findAllBaseBy();

    Page<IPlayerBase> findAllBasePageBy(Pageable pageable);

    Page<IPlayerBase> findByTeamPlayerJoins_Team_DraftId(Pageable pageable, Long draftId);

    List<IPlayerAvailability> findAllPlayerAvailabilityBy();

    @Query(
            value = PlayerRepositoryQueries.selectBestUndraftedPlayerId,
            nativeQuery = true
    )
    Long getBestUndraftedPlayerId(@Param("draftId") Long draftId);

    @Query(
            value = PlayerRepositoryQueries.selectBestUndraftedPlayerIdWithPositionFilter,
            nativeQuery = true
    )
    Long getBestUndraftedPlayerIdWithPositionFilter(
            @Param("draftId") Long draftId,
            @Param("positionExclusionList") List<String> positionExclusionList
    );
}


