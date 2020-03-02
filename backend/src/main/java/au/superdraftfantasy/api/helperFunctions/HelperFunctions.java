package au.superdraftfantasy.api.helperFunctions;

import au.superdraftfantasy.api.player.PlayerEntity;
import au.superdraftfantasy.api.teamPlayerJoin.TeamPlayerJoinEntity;

import java.util.List;
import java.util.stream.Collectors;

public class HelperFunctions {

    public List<PlayerEntity> getPlayerList (List<TeamPlayerJoinEntity> teamPlayerJoins) {
        return teamPlayerJoins.stream().map(teamPlayerJoin -> teamPlayerJoin.getPlayer()).collect(Collectors.toList());
    }

}
