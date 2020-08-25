package au.superdraftfantasy.api.player;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PlayerInDraftReadDto extends PlayerReadDto {

    boolean available;

    String draftTeam;

    Long price;

}
