package au.superdraftfantasy.api.block;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BlockDto {

    private Long draftId;

    private Long playerId;

    private Long onTheBlockTeamId;

    private Long bidderTeamId;

    private String myTeamPosition;

    private Long price;

    private Long onTheBlockTimer;

    private Long bidTimer;

    private LocalDateTime endTime;

}
