package au.superdraftfantasy.api.teamPlayerJoin;

import au.superdraftfantasy.api.team.TeamEntity;
import au.superdraftfantasy.api.player.PlayerEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TeamPlayerJoinRepository extends CrudRepository<TeamPlayerJoinEntity, Long> {
    Optional<TeamPlayerJoinEntity> findById(Long id);
    Optional<TeamPlayerJoinEntity> findByTeamAndPlayer(TeamEntity team, PlayerEntity player);
}
