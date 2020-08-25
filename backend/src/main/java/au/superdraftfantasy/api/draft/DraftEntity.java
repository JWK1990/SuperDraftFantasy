package au.superdraftfantasy.api.draft;

import au.superdraftfantasy.api.team.TeamEntity;
import au.superdraftfantasy.api.roster.RosterEntity;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

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

    @ManyToOne
    @JoinColumn(name = "roster_id")
    private RosterEntity roster;

    @NotNull
    private Long budget;

    @NotNull
    private Long onTheBlockTimer;

    @NotNull
    private Long bidTimer;

    @OneToMany(mappedBy = "draft", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference(value="draft-team")
    private List<TeamEntity> teams = new ArrayList<>();

    @NotNull
    @Enumerated(EnumType.ORDINAL)
    @Column(name = "status_id")
    private DraftStatusEnum status;

    @CreationTimestamp
    private LocalDateTime createdOn;

    @UpdateTimestamp
    private LocalDateTime updatedOn;

}
