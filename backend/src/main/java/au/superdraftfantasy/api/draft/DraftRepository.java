package au.superdraftfantasy.api.draft;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DraftRepository extends JpaRepository<DraftEntity, Long> {
    boolean existsByName(String name);
}
