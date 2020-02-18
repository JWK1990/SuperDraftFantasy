package au.superdraftfantasy.api.coach;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CoachDTO {

    private Long id;

    @NotNull
    private Long draftId;

}