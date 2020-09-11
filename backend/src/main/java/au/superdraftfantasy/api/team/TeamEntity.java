package au.superdraftfantasy.api.team;

import au.superdraftfantasy.api.draft.DraftEntity;
import au.superdraftfantasy.api.teamPlayerJoin.TeamPlayerJoinEntity;
import au.superdraftfantasy.api.user.UserEntity;
import com.fasterxml.jackson.annotation.JsonBackReference;
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
import java.util.List;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TeamEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String name;

    @Enumerated(EnumType.ORDINAL)
    @Column(name = "type_id")
    private TeamTypeEnum type;

    @NotNull
    private Long budget;

    @NotNull
    private boolean onTheBlock;

    @NotNull
    private Long orderIndex;

    @OneToMany(mappedBy="team", cascade = CascadeType.ALL)
    @JsonManagedReference(value="team-teamPlayerJoin")
    private List<TeamPlayerJoinEntity> teamPlayerJoins;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @JsonBackReference(value="user-coach")
    private UserEntity user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "draft_id")
    @JsonBackReference(value="draft-team")
    private DraftEntity draft;

    @CreationTimestamp
    private LocalDateTime createdOn;

    @UpdateTimestamp
    private LocalDateTime updatedOn;

}
