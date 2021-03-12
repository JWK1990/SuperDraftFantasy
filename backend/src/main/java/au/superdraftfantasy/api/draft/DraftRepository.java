package au.superdraftfantasy.api.draft;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DraftRepository extends JpaRepository<DraftEntity, Long> {
    boolean existsByName(String name);
    List<DraftEntity> findDistinctByTeams_User_Username(String username);
    Optional<IDraftBase> findDraftBaseById(Long draftId);
    DraftEntity getOne(Long draftId);
}
