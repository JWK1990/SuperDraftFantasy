package au.superdraftfantasy.api.team;

import java.util.Date;
import java.util.Set;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;

import org.hibernate.annotations.Entity;

import au.superdraftfantasy.api.user.UserEntity;
import au.superdraftfantasy.api.draft.DraftEntity;
import au.superdraftfantasy.api.team.TeamEntity;


@Entity
public class TeamEntity {

    @GeneratedValue(strategy = GenerationType.SEQUENCE)
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
    @JoinTable
    Set<TeamEntity> players;

}