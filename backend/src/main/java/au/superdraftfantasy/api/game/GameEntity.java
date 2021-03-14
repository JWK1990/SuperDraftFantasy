package au.superdraftfantasy.api.game;

import au.superdraftfantasy.api.player.PlayerEntity;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class GameEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "player_id")
    @JsonBackReference(value="player-games")
    private PlayerEntity player;

    private Integer year;

    private Integer round;

    private Integer disposals;

    private Integer goals;

    private Integer tackles;

    private Integer hitouts;

    private Integer clearances;

    private Integer average;

    private Integer contestedPossessions;

    private Integer uncontestedPossessions;

    private Integer disposalEfficiency;

    private Integer metersGained;

    private Integer intercepts;

    private Integer timeOnGround;

    private Integer hardnessRating;

}
