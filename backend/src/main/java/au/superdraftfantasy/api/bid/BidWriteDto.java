package au.superdraftfantasy.api.bid;

import au.superdraftfantasy.api.player.PlayerReadDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BidWriteDto {

    private Long teamId;

    private Long bidPrice;

    private Long additionalTime;

}
