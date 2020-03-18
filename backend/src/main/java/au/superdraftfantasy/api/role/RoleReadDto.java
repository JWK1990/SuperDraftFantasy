package au.superdraftfantasy.api.role;

import au.superdraftfantasy.api.privilege.PrivilegeReadDto;
import au.superdraftfantasy.api.privilege.PrivilegeTypeEnum;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RoleReadDto {

    private RoleTypeEnum type;

    @JsonIgnore
    private Collection<PrivilegeReadDto> privileges;

    private List<PrivilegeTypeEnum> privilegeList;

    private List<PrivilegeTypeEnum> getPrivilegeList() {
        List<PrivilegeTypeEnum> privilegeList = Arrays.asList();
        privileges.stream().forEach(privilege -> privilegeList.add(privilege.getType()));
        return privilegeList;
    }

}
