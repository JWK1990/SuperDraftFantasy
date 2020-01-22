package au.superdraftfantasy.api.player;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

import au.superdraftfantasy.api.team.TeamEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
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
    AflTeamEnum aflTeamId;

    @NotBlank
    Long average;

    @ManyToMany(mappedBy = "players")
    @EqualsAndHashCode.Exclude
    Set<TeamEntity> teams;

}