package au.superdraftfantasy.api.player;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Collection;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import au.superdraftfantasy.api.position.PositionEntity;


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
    
    String primaryPosition;

    String secondaryPosition;

    String myTeamPosition;

    public String getPrimaryPosition() {
        return this.positions.get(0).getType().toString();
    }

    public String getSecondaryPosition() {
        if(this.positions.size() > 1) {
            return this.positions.get(1).getType().toString();
        } else {
            return null;
        }
    }

}
