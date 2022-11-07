package au.superdraftfantasy.api.game;

import au.superdraftfantasy.api.player.AflTeamEnum;
import au.superdraftfantasy.api.player.PlayerEntity;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

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

    @NotBlank
    @Enumerated(EnumType.ORDINAL)
    private AflTeamEnum aflTeamId;

    private Integer round;

    @NotBlank
    @Enumerated(EnumType.ORDINAL)
    private AflTeamEnum opponentAflTeamId;

    private String result;

    private Integer kicks;

    private Integer handballs;

    private Integer disposals;

    private Integer marks;

    private Integer goals;

    private Integer behinds;

    private Integer tackles;

    private Integer hitouts;

    private Integer clearances;

    private Integer clangers;

    private Integer reboundFiftys;

    private Integer insideFiftys;

    private Integer dreamTeam;

    private Integer average;

    private Integer contestedPossessions;

    private Integer uncontestedPossessions;

    private Integer disposalEfficiency;

    private Integer centerClearances;

    private Integer metersGained;

    private Integer turnovers;

    private Integer intercepts;

    private Integer timeOnGround;

    private Integer hardnessRating;

}
