package au.superdraftfantasy.api.draft;

import au.superdraftfantasy.api.coach.CoachReadDto;
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

    private String rosterType;

    private Long budget;

    private Set<CoachReadDto> coaches;


}