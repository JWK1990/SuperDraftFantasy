package au.superdraftfantasy.api.teamPlayerJoin;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import au.superdraftfantasy.api.player.PlayerEntity;
import au.superdraftfantasy.api.team.TeamEntity;

@Repository
public interface TeamPlayerJoinRepository extends CrudRepository<TeamPlayerJoinEntity, Long> {
    Optional<TeamPlayerJoinEntity> findById(Long id);
    Optional<TeamPlayerJoinEntity> findByTeamAndPlayer(TeamEntity team, PlayerEntity player);
}