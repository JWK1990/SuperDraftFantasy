package au.superdraftfantasy.api.draft;

import au.superdraftfantasy.api.coach.CoachReadDto;
import au.superdraftfantasy.api.roster.RosterReadDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Set;

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

    private Set<CoachReadDto> coaches;

}