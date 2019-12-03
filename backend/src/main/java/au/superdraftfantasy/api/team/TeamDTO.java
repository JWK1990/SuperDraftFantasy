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
import javax.validation.constraints.NotNull;
import javax.persistence.Entity;

import au.superdraftfantasy.api.user.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import au.superdraftfantasy.api.draft.DraftEntity;
import au.superdraftfantasy.api.team.TeamEntity;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class TeamDTO {

    @NotBlank
    private String name;

    @NotNull
    private Long budget;

    @NotNull
    private Long userId;

    @NotNull
    private Long draftId;

    /*
    @ManyToMany
    @JoinTable(
        name = "team_player",
        joinColumns = @JoinColumn(name = "team_id", referencedColumnName = "id"),
        inverseJoinColumns = @JoinColumn(name = "player_id", referencedColumnName = "id")
    )
    private Set<TeamEntity> players;
    */

}