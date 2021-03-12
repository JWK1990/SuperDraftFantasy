package au.superdraftfantasy.api.team;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TeamRepository extends JpaRepository<TeamEntity, Long> {
    // Could look into using Projections to only fetch required properties.
    // https://stackoverflow.com/questions/24710626/jpa-query-selecting-only-specific-columns-without-using-criteria-query.
    // For example, could use a Projection just to grab the Team Status to check if a Draft is Complete.
    List<TeamEntity> findAllByDraftId(Long draftId);
    TeamEntity findOneByDraftIdAndOnTheBlock(Long draftId, boolean isOnTheBlock);
}
