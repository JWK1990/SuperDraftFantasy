package au.superdraftfantasy.api.player;

import au.superdraftfantasy.api.position.PositionTypeEnum;
import au.superdraftfantasy.api.teamPlayerJoin.ITeamPlayerJoinBase;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class PlayerAvailabilityDto {

    public PlayerAvailabilityDto(
            IPlayerAvailability playerAvailability,
            Long draftId
    ) {
        this.id = playerAvailability.getId();
        this.primaryPosition = playerAvailability.getPrimaryPosition();
        this.secondaryPosition = playerAvailability.getSecondaryPosition();
        ITeamPlayerJoinBase teamPlayerJoin = playerAvailability.getTeamPlayerJoin(draftId);
        if(teamPlayerJoin != null) {
            this.available = false;
            this.draftTeam = teamPlayerJoin.getTeamId();
            this.price = teamPlayerJoin.getPrice();
        } else {
            this.available = true;
        }
    }

    Long id;

    PositionTypeEnum primaryPosition;

    PositionTypeEnum secondaryPosition;

    boolean available;

    Long draftTeam;

    Integer price;

}
