package au.superdraftfantasy.api.player;

import java.util.Collection;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.validation.constraints.NotBlank;

import au.superdraftfantasy.api.position.PositionEntity;
import au.superdraftfantasy.api.team.TeamEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PlayerEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String firstName;

    @NotBlank
    private String lastName;

    @NotBlank
    @Enumerated(EnumType.ORDINAL)
    private AflTeamEnum aflTeamId;

    @NotBlank
    private Long average;

    @ManyToMany
    @JoinTable(
            name = "player_position_join",
            joinColumns = @JoinColumn(name = "player_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "position_id", referencedColumnName = "id"))
    private Collection<PositionEntity> positions;

    @ManyToMany(mappedBy = "players")
    @EqualsAndHashCode.Exclude
    private Set<TeamEntity> teams;

}