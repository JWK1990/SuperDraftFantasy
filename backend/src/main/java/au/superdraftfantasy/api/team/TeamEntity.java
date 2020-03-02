package au.superdraftfantasy.api.team;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import au.superdraftfantasy.api.coach.CoachEntity;
import au.superdraftfantasy.api.teamPlayerJoin.TeamPlayerJoinEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
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

    @OneToMany(mappedBy="team", cascade = CascadeType.ALL)
    private List<TeamPlayerJoinEntity> teamPlayerJoins;

    @CreationTimestamp
    private LocalDateTime createdOn;

    @UpdateTimestamp
    private LocalDateTime updatedOn;
}