package au.superdraftfantasy.api.team;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class TeamDTO {

    private Long id;

    private String name;

    private Long draftId;

}