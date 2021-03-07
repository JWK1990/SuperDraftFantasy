package au.superdraftfantasy.api.playerDraft;

import au.superdraftfantasy.api.player.AflTeamEnum;
import au.superdraftfantasy.api.player.PlayerEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PlayerDraftEntity {

    @Id
    @Column(name="player_id")
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @MapsId
    private PlayerEntity player;

    private String origin;

    private int draftRound;

    private int draftPick;

    private int draftYear;

    private String draftType;

    @NotBlank
    @Enumerated(EnumType.ORDINAL)
    private AflTeamEnum draftingTeam;

}
