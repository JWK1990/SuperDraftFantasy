package au.superdraftfantasy.api.team;

import au.superdraftfantasy.api.draft.DraftEntity;
import au.superdraftfantasy.api.player.PlayerReadDto;
import au.superdraftfantasy.api.roster.RosterEntity;
import au.superdraftfantasy.api.teamPlayerJoin.TeamPlayerJoinReadDto;
import au.superdraftfantasy.api.user.UserReadDto;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TeamReadDto {

    private Long id;

    private String name;

    private TeamTypeEnum type;

    private Long budget;

    private Long maxBid;

    private boolean onTheBlock;

    @JsonIgnore
    private List<TeamPlayerJoinReadDto> teamPlayerJoins;

    private List<PlayerReadDto> players;

    private UserReadDto user;

    @JsonIgnore
    private DraftEntity draft;

    public List<PlayerReadDto> getPlayers() {
        return this.teamPlayerJoins.stream().map(teamPlayerJoin -> teamPlayerJoin.getPlayer()).collect(Collectors.toList());
    }

    public Long getMaxBid() {
        RosterEntity roster = draft.getRoster();
        Long rosterSize = roster.getDef() + roster.getMid() + roster.getRuc() + roster.getFwd() + roster.getBench();
        int playerSize = teamPlayerJoins.size();
        return budget - (rosterSize - playerSize - 1);
    }

}
