package au.superdraftfantasy.api.seasonSummary;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SeasonSummaryRepository extends JpaRepository<SeasonSummaryEntity, Long> {
    Optional<ISeasonSummaryDetails> findByPlayer_IdAndYear(Long playerId, Integer year);
}


