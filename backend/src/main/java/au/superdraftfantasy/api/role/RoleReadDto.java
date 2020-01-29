package au.superdraftfantasy.api.role;

import au.superdraftfantasy.api.privilege.PrivilegeReadDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Collection;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RoleReadDto {

    private RoleTypeEnum type;

    private Collection<PrivilegeReadDto> privileges;

}