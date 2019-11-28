package au.superdraftfantasy.api.user;

import org.springframework.stereotype.Service;

@Service
public class UserService {

    UserRepository userRepository;

    Long createUser(UserEntity user) {
        return user.id;
    }

}