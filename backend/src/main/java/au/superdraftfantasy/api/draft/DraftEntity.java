package au.superdraftfantasy.api.draft;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import au.superdraftfantasy.api.coach.CoachEntity;
import au.superdraftfantasy.api.roster.RosterEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
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

    @NotNull
    private Long onTheBlockTimer;

    @NotNull
    private Long bidTimer;

    @OneToMany(mappedBy = "draft", cascade = CascadeType.ALL, orphanRemoval = true)
    @EqualsAndHashCode.Exclude
    private List<CoachEntity> coaches = new ArrayList<CoachEntity>();

    @NotNull
    @Enumerated(EnumType.ORDINAL)
    @Column(name = "status_id")
    private DraftStatusEnum status;

    @CreationTimestamp
    private LocalDateTime createdOn;

    @UpdateTimestamp
    private LocalDateTime updatedOn;

}