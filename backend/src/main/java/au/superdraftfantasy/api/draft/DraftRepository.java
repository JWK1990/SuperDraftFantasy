package au.superdraftfantasy.api.draft;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DraftRepository extends CrudRepository<DraftEntity, Long> {
    boolean existsByName(String name);
}