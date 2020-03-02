package au.superdraftfantasy.api.teamPlayerJoin;

import au.superdraftfantasy.api.player.PlayerEntity;
import au.superdraftfantasy.api.team.TeamEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TeamPlayerJoinEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "team_id")
    private TeamEntity team;

    @ManyToOne
    @JoinColumn(name = "player_id")
    private PlayerEntity player;

    @Column(name = "myTeamPosition")
    private String myTeamPosition;

}
