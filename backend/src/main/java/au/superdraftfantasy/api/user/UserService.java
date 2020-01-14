package au.superdraftfantasy.api.user;

import javax.validation.constraints.NotBlank;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;


@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Long createUser(@NotBlank final UserEntity user) {
        checkUserValidity(user);
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

}