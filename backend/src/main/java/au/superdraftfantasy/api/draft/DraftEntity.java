package au.superdraftfantasy.api.draft;

import java.util.Date;
import java.util.Set;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotBlank;

import javax.persistence.Entity;

import au.superdraftfantasy.api.team.TeamEntity;
import lombok.Data;


@Entity
@Data
public class DraftEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @NotBlank
    String name;

    @NotBlank
    Long numOfTeams;

    @NotBlank
    String rosterType;

    @NotBlank
    Long budget;

    @NotBlank
    Date createdOn;

    @OneToMany
    Set<TeamEntity> teams;

}