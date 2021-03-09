package au.superdraftfantasy.api.teamPlayerJoin;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TeamPlayerJoinRepository extends CrudRepository<TeamPlayerJoinEntity, Long> {
    Optional<TeamPlayerJoinEntity> findById(Long id);
    List<TeamPlayerJoinEntity> findByTeam_Draft_Id(Long draftId);
}
