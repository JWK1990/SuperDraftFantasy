package au.superdraftfantasy.api.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {

    private Long id;

    private String username;

    private String firstName;

    private String lastName;

    private String email;

    private String password;

}