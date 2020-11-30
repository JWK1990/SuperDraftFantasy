package au.superdraftfantasy.api.teamPlayerJoin;

import au.superdraftfantasy.api.player.PlayerEntity;
import au.superdraftfantasy.api.position.PositionEntity;
import au.superdraftfantasy.api.team.TeamEntity;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class
TeamPlayerJoinEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "team_id")
    @JsonBackReference(value="team-teamPlayerJoin")
    private TeamEntity team;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "player_id")
    @JsonBackReference(value="player-teamPlayerJoin")
    private PlayerEntity player;

    Long price;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "my_team_position_id")
    // TODO: Should be of type PositionEntity.
    private PositionEntity myTeamPosition;

}
