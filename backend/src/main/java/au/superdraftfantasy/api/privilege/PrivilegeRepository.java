package au.superdraftfantasy.api.privilege;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PrivilegeRepository extends CrudRepository<PrivilegeEntity, Long> {

    Optional<PrivilegeEntity> findByType(PrivilegeTypeEnum type);

}