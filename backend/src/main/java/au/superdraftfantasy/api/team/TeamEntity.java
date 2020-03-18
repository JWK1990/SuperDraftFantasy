package au.superdraftfantasy.api.team;

import au.superdraftfantasy.api.coach.CoachEntity;
import au.superdraftfantasy.api.teamPlayerJoin.TeamPlayerJoinEntity;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.List;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id"
)
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
    @JsonManagedReference(value="team-teamPlayerJoin")
    private List<TeamPlayerJoinEntity> teamPlayerJoins;

    @CreationTimestamp
    private LocalDateTime createdOn;

    @UpdateTimestamp
    private LocalDateTime updatedOn;
}
