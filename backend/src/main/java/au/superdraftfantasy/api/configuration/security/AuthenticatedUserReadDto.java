package au.superdraftfantasy.api.configuration.security;

import lombok.Data;

@Data
public class AuthenticatedUserReadDto {

    private Long id;

    private String username;

    private String firstName;

    private String lastName;

    private String email;

}

