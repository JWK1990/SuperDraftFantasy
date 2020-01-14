package au.superdraftfantasy.api.priviledge;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PriviledgeRepository extends CrudRepository<PriviledgeEntity, Long> {
    PriviledgeEntity findByName(String name);
}