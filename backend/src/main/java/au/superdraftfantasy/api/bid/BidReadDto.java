package au.superdraftfantasy.api.bid;

import au.superdraftfantasy.api.player.PlayerReadDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BidReadDto {

    private Long teamId;

    private Long bidPrice;

    private Date endTime;

}
