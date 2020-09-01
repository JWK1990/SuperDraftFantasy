package au.superdraftfantasy.api.team;

import au.superdraftfantasy.api.draft.DraftEntity;
import au.superdraftfantasy.api.roster.RosterEntity;
import au.superdraftfantasy.api.teamPlayerJoin.TeamPlayerJoinReadDto;
import au.superdraftfantasy.api.user.UserReadDto;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

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

    private List<TeamPlayerJoinReadDto> teamPlayerJoins;

    private UserReadDto user;

    @JsonIgnore
    private DraftEntity draft;


    public Long getMaxBid() {
        RosterEntity roster = draft.getRoster();
        Long rosterSize = roster.getDef() + roster.getMid() + roster.getRuc() + roster.getFwd() + roster.getBench();
        int playerSize = teamPlayerJoins.size();
        return budget - (rosterSize - playerSize - 1);
    }

}
