package au.superdraftfantasy.api.teamPlayerJoin;

import au.superdraftfantasy.api.player.PlayerReadDto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TeamPlayerJoinReadDto {

    private PlayerReadDto player;

    @JsonIgnore
    private String myTeamPosition;

    public PlayerReadDto getPlayer() {
        PlayerReadDto player = this.player;
        player.setMyTeamPosition(this.myTeamPosition);
        return player;
    }

}
