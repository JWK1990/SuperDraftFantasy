package au.superdraftfantasy.api.draft;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import au.superdraftfantasy.api.coach.CoachEntity;
import au.superdraftfantasy.api.roster.RosterEntity;
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
public class DraftEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String name;

    @NotNull
    private Long numOfTeams;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "roster_id")
    private RosterEntity roster;

    @NotNull
    private Long budget;

    @OneToMany(mappedBy = "draft", cascade = CascadeType.ALL, orphanRemoval = true)
    @EqualsAndHashCode.Exclude
    private Set<CoachEntity> coaches = new HashSet<>();

    @NotNull
    @Enumerated(EnumType.ORDINAL)
    @Column(name = "status_id")
    private DraftStatusEnum status;

    @CreationTimestamp
    private LocalDateTime createdOn;

    @UpdateTimestamp
    private LocalDateTime updatedOn;

}