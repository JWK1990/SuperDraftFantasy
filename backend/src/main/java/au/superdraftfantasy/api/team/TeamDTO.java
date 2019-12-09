package au.superdraftfantasy.api.team;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class TeamDTO {

    private Long id;

    private String name;

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