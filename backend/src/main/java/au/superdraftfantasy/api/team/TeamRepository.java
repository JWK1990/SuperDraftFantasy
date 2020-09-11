package au.superdraftfantasy.api.team;

import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface TeamRepository extends CrudRepository<TeamEntity, Long> {
    Optional<List<TeamEntity>> findAllByDraftId(Long draftId);
}
