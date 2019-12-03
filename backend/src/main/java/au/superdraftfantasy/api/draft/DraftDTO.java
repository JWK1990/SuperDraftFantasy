package au.superdraftfantasy.api.draft;

import java.util.Date;
import java.util.Set;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import au.superdraftfantasy.api.team.TeamEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class DraftDTO {

    @NotBlank
    private String name;

    @NotNull
    private Long numOfTeams;

    @NotBlank
    private String rosterType;

    @NotNull
    private Long budget;

    @OneToMany
    private Set<TeamEntity> teams;

}