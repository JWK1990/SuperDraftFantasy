package au.superdraftfantasy.api.draft;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DraftReorderTeamsDto {

    Long draftId;

    List<Long> teamIdList;

}
