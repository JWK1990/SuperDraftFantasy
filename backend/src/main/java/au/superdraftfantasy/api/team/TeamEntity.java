package au.superdraftfantasy.api.team;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import au.superdraftfantasy.api.player.PlayerEntity;
import au.superdraftfantasy.api.coach.CoachEntity;
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
    private Long id;

    @NotBlank
    private String name;

    // TODO rename to currentMoney or something.
    @NotNull
    private Long budget;

    @OneToOne(fetch = FetchType.LAZY)
    @MapsId
    private CoachEntity coach;

    @ManyToMany
    private Set<PlayerEntity> players = new HashSet<>();

    @CreationTimestamp
    private LocalDateTime createdOn;

    @UpdateTimestamp
    private LocalDateTime updatedOn;
}