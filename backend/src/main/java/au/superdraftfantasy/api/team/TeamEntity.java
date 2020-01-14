package au.superdraftfantasy.api.team;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import au.superdraftfantasy.api.player.PlayerEntity;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import au.superdraftfantasy.api.user.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import au.superdraftfantasy.api.draft.DraftEntity;
import au.superdraftfantasy.api.team.TeamEntity;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TeamEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String name;

    // TODO rename to currentMoney or something.
    @NotNull
    private Long budget;

    // Can remove link to User, can be linked to a Role potentially.
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id")
    private UserEntity user;

    // Isn't required anymore, can be resolved through the Role.
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "draft_id")
    private DraftEntity draft;

    @ManyToMany
    private Set<PlayerEntity> players = new HashSet<>();

    @CreationTimestamp
    private LocalDateTime createdOn;

    @UpdateTimestamp
    private LocalDateTime updatedOn;
}