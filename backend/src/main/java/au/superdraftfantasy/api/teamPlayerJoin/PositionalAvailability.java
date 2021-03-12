package au.superdraftfantasy.api.teamPlayerJoin;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PositionalAvailability {

    boolean isDefSlotAvailable;

    boolean isMidSlotAvailable;

    boolean isRucSlotAvailable;

    boolean isFwdSlotAvailable;

    boolean isBenchSlotAvailable;
}
