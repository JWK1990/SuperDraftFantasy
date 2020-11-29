package au.superdraftfantasy.api.player;

import au.superdraftfantasy.api.position.PositionEntity;
import au.superdraftfantasy.api.position.PositionTypeEnum;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class PlayerReadDto {

    Long id;

    String firstName;

    String lastName;

    AflTeamEnum aflTeamId;

    Long average;

    @JsonIgnore
    List<PositionEntity> positions;
    
    PositionTypeEnum primaryPosition;

    PositionTypeEnum secondaryPosition;

    public PositionTypeEnum getPrimaryPosition() {
        return this.positions.get(0).getType();
    }

    public PositionTypeEnum getSecondaryPosition() {
        if(this.positions.size() > 1) {
            return this.positions.get(1).getType();
        } else {
            return null;
        }
    }

}
