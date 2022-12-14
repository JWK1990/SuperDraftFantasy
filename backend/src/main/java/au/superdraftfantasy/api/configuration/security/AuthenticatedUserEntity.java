package au.superdraftfantasy.api.configuration.security;

import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.Collection;

@Data
public class AuthenticatedUserEntity extends User {

    private Long id;

    private String firstName;

    private String lastName;

    private String email;

    public AuthenticatedUserEntity(
            String username,
            String password,
            Collection<? extends GrantedAuthority> authorities,
            Long id,
            String firstName,
            String lastName,
            String email
    ) {
        super(username, password, authorities);
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

}
