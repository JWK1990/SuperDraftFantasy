package au.superdraftfantasy.api.teamPlayerJoin;

import au.superdraftfantasy.api.player.PlayerReadDto;
import au.superdraftfantasy.api.position.PositionEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TeamPlayerJoinReadDto {

    private Long id;

    private PlayerReadDto player;

    private Long price;

    @JsonIgnore
    private PositionEntity myTeamPosition;

    private String myTeamPositionType;

    private String myTeamPositionType() {
        return myTeamPosition.getType().name();
    }

    private Integer purchaseReviewRating;

    private String slotId;

}
