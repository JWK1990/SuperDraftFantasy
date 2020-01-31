package au.superdraftfantasy.api.privilege;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PrivilegeReadDto {

    private PrivilegeTypeEnum type;

}