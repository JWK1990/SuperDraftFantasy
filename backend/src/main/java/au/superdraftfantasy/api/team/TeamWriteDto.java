package au.superdraftfantasy.api.team;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TeamWriteDto {

    private Long id;

    @NotNull
    private Long draftId;

}
