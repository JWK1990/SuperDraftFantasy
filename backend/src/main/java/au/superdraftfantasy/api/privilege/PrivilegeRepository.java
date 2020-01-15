package au.superdraftfantasy.api.privilege;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PrivilegeRepository extends CrudRepository<PrivilegeEntity, Long> {
    PrivilegeEntity findByName(String name);
}