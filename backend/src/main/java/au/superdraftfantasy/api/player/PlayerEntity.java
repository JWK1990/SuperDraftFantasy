package au.superdraftfantasy.api.player;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

import lombok.Data;

@Entity
@Data
public class PlayerEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @NotBlank
    String firstName;

    @NotBlank
    String lastName;

    @NotBlank
    @Enumerated(EnumType.ORDINAL)
    AflTeamEnum aflTeam;

    @NotBlank
    Long average;

}