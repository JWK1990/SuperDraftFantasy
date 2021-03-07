package au.superdraftfantasy.api.player;

import au.superdraftfantasy.api.playerSeason.PlayerSeasonEntity;
import au.superdraftfantasy.api.seasonSummary.SeasonSummaryEntity;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotBlank;
import java.time.LocalDate;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PlayerEntity {

    @Id
    private Long id;

    @NotBlank
    private String firstName;

    @NotBlank
    private String lastName;

    private LocalDate dateOfBirth;

    @OneToMany(mappedBy = "player", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference(value="player-seasonDetails")
    private List<PlayerSeasonEntity> seasonDetails;

    @OneToMany(mappedBy = "player", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference(value="player-seasonSummary")
    private List<SeasonSummaryEntity> seasonSummaries;

}
