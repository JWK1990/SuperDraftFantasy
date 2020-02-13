package au.superdraftfantasy.api.draft;

import au.superdraftfantasy.api.coach.CoachReadDto;
import au.superdraftfantasy.api.roster.RosterEntity;
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

    private RosterEntity roster;

    private Long budget;

    private Set<CoachReadDto> coaches;

}