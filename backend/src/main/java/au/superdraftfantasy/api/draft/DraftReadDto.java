package au.superdraftfantasy.api.draft;

import au.superdraftfantasy.api.roster.RosterReadDto;
import au.superdraftfantasy.api.team.TeamReadDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DraftReadDto {

    private Long id;

    private String name;

    private Long numOfTeams;

    private RosterReadDto roster;

    private DraftStatusEnum status;

    private Long budget;

    private Long onTheBlockTimer;

    private Long bidTimer;

    private List<TeamReadDto> teams;

    private Long onTheBlockCoachId;

}
