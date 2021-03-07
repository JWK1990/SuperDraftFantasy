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

    String fullName;

    @JsonIgnore
    List<PositionEntity> positions;
    
    PositionTypeEnum primaryPosition;

    PositionTypeEnum secondaryPosition;

    String fullPosition;

    public String getFullName() {
        return this.firstName + " " + this.lastName;
    }

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

    public String getFullPosition() {
        String fullPosition = getPrimaryPosition().toString();
        if(getSecondaryPosition() != null) {
            fullPosition += " - " + getSecondaryPosition();
        }
        return fullPosition;
    }

}
