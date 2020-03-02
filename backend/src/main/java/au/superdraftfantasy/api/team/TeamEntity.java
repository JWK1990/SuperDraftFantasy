package au.superdraftfantasy.api.team;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import au.superdraftfantasy.api.player.PlayerEntity;
import au.superdraftfantasy.api.coach.CoachEntity;
import au.superdraftfantasy.api.teamPlayerJoin.TeamPlayerJoinEntity;
import lombok.EqualsAndHashCode;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TeamEntity {

    @Id
    @Column(name = "coach_id")
    private Long id;

    @NotBlank
    private String name;

    // TODO rename to currentMoney or something.
    @NotNull
    private Long budget;

    @MapsId
    @OneToOne(mappedBy = "team", fetch = FetchType.LAZY)
    @JoinColumn(name = "coach_id")
    @EqualsAndHashCode.Exclude
    private CoachEntity coach;

    @OneToMany(mappedBy="team")
    @EqualsAndHashCode.Exclude
    private Set<TeamPlayerJoinEntity> teamPlayerJoins;

    @CreationTimestamp
    private LocalDateTime createdOn;

    @UpdateTimestamp
    private LocalDateTime updatedOn;
}