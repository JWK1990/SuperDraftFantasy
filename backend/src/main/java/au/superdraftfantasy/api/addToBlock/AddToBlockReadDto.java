package au.superdraftfantasy.api.addToBlock;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AddToBlockReadDto {

    private Long playerId;

    private Long teamId;

    private Long bidPrice;

    private Date endTime;

}
