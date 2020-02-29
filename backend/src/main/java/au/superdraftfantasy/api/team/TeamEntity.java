package au.superdraftfantasy.api.team;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import au.superdraftfantasy.api.player.PlayerEntity;
import au.superdraftfantasy.api.coach.CoachEntity;
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

    @ManyToMany
    @JoinTable(
            name = "team_player_join",
            joinColumns = @JoinColumn(name = "team_id"),
            inverseJoinColumns = @JoinColumn(name = "player_id")
    )
    private List<PlayerEntity> players = new ArrayList<PlayerEntity>();

    @CreationTimestamp
    private LocalDateTime createdOn;

    @UpdateTimestamp
    private LocalDateTime updatedOn;
}