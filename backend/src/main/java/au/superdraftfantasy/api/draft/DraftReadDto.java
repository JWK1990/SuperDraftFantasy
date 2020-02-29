package au.superdraftfantasy.api.draft;

import java.util.List;

import au.superdraftfantasy.api.coach.CoachReadDto;
import au.superdraftfantasy.api.roster.RosterReadDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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

    private List<CoachReadDto> coaches;

    private Long onTheBlockCoachId;

}