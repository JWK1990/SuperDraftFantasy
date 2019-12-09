package au.superdraftfantasy.api.user;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;


@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(
        @NotNull UserRepository userRepository
    ) {
        this.userRepository = userRepository;
    }


    public Long createUser(@NotBlank final UserEntity userEntity) {
        
        final String username = userEntity.getUsername();
        final String email = userEntity.getEmail();

        if(userRepository.existsByUsername(username)) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Cannot create User. A user with the username '" + username + "' already exists.");
        } else if(userRepository.existsByEmail(email)) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Cannot create User. A user with the email '" + email + "' already exists.");
        }

        return userRepository.save(userEntity).getId();
    }

}