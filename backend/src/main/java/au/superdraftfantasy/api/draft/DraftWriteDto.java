package au.superdraftfantasy.api.draft;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DraftWriteDto {

    private Long id;

    private String name;

    private Long numOfTeams;

    private String rosterType;

    private Long budget;

    private Long onTheBlockTimer;

    private Long bidTimer;

}