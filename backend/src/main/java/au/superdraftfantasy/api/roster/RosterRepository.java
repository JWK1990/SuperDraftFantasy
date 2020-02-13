package au.superdraftfantasy.api.roster;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RosterRepository extends CrudRepository<RosterEntity, Long> {

    Optional<RosterEntity> findByType(String type);

}