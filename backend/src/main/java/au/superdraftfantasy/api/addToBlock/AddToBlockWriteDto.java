package au.superdraftfantasy.api.addToBlock;

import au.superdraftfantasy.api.player.PlayerReadDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AddToBlockWriteDto {

    private Long playerId;

    private Long teamId;

    private Long bidPrice;

    private Long additionalTime;

}
