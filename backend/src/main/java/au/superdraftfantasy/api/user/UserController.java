package au.superdraftfantasy.api.user;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
public class UserController {

    UserService userService;

    @PostMapping(name = "createUser", path = "/create")
    public Long createUser(UserEntity user) {
        return userService.createUser(user);
    }

}
