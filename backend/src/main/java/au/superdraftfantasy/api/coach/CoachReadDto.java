package au.superdraftfantasy.api.coach;

import au.superdraftfantasy.api.team.TeamReadDto;
import au.superdraftfantasy.api.user.UserReadDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CoachReadDto {

    private Long id;

    private CoachTypeEnum typeId;

    private UserReadDto user;

    private TeamReadDto team;

}