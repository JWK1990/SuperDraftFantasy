package au.superdraftfantasy.api.team;

import java.util.Date;
import java.util.Set;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;

import javax.persistence.Entity;

import au.superdraftfantasy.api.user.UserEntity;
import lombok.Data;
import au.superdraftfantasy.api.draft.DraftEntity;
import au.superdraftfantasy.api.team.TeamEntity;


@Entity
@Data
public class TeamEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @NotBlank
    String name;

    @NotBlank
    Long budget;

    @NotBlank
    Date createdOn;

    @ManyToOne
    UserEntity sdUser;

    @ManyToOne
    DraftEntity draft;

    @ManyToMany
    @JoinTable(
        name = "team_player",
        joinColumns = @JoinColumn(name = "team_id", referencedColumnName = "id"),
        inverseJoinColumns = @JoinColumn(name = "player_id", referencedColumnName = "id")
    )
    Set<TeamEntity> players;

}