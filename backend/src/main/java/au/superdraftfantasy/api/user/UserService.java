package au.superdraftfantasy.api.user;

import java.util.Arrays;

import javax.validation.constraints.NotBlank;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import au.superdraftfantasy.api.role.RoleEntity;
import au.superdraftfantasy.api.role.RoleRepository;
import au.superdraftfantasy.api.role.RoleTypeEnum;


@Service
public class UserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    public UserService(UserRepository userRepository, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    public Long createUser(@NotBlank final UserEntity user) {
        checkUserValidity(user);
        assignInitialRole(user);
        return userRepository.save(user).getId();
    }

    private void checkUserValidity(UserEntity user) {
        final String username = user.getUsername();
        final String email = user.getEmail();

        if(userRepository.existsByUsername(username)) {
            throw new ResponseStatusException(
                    HttpStatus.CONFLICT,
                    "Cannot create User. A user with the username '" + username + "' already exists."
            );
        } else if(userRepository.existsByEmail(email)) {
            throw new ResponseStatusException(
                    HttpStatus.CONFLICT,
                    "Cannot create User. A user with the email '" + email + "' already exists."
            );
        }
    }

    private void assignInitialRole(UserEntity user) {
        RoleTypeEnum initialRoleType = RoleTypeEnum.USER;
        RoleEntity userRole = roleRepository.findByType(initialRoleType).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Initial Role Type Not Found."));
        user.setRoles(Arrays.asList(userRole));
    }

}