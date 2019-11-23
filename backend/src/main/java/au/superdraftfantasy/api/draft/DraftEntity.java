package au.superdraftfantasy.api.draft;

import java.util.Date;
import java.util.Set;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotBlank;

import org.hibernate.annotations.Entity;

import au.superdraftfantasy.api.team.TeamEntity;


@Entity
public class DraftEntity {

    @GeneratedValue(strategy = GenerationType.SEQUENCE)
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