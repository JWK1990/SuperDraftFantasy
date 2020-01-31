package au.superdraftfantasy.api.user;

import au.superdraftfantasy.api.role.RoleReadDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Collection;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserReadDto {

    private Long id;

    private String username;

    private String firstName;

    private String lastName;

    private String email;

    private Collection<RoleReadDto> roles;

}