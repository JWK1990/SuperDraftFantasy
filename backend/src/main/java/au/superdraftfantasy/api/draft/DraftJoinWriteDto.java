package au.superdraftfantasy.api.draft;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DraftJoinWriteDto {

    @NotNull
    private String teamName;

}
