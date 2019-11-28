package au.superdraftfantasy.api.user;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import au.superdraftfantasy.api.user.exception.UserAlreadyExistsException;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(
        @NotNull UserRepository userRepository
    ) {
        this.userRepository = userRepository;
    }


    public Long createUser(@NotBlank final UserEntity userEntity) throws UserAlreadyExistsException {
        
        final String username = userEntity.getUsername();

        if(userRepository.existsByUsername(username)) {
            throw new UserAlreadyExistsException(username);
        }

        return userRepository.save(userEntity).getId();
    }

}