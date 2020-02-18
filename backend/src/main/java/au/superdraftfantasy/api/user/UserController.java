package au.superdraftfantasy.api.user;

import au.superdraftfantasy.api.draft.DraftReadDto;
import org.springframework.web.bind.annotation.*;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import org.modelmapper.ModelMapper;

import javax.validation.Valid;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(name = "createUser", path = "/sign-up")
    public Long createUser(@RequestBody @Valid final UserDTO userDTO) {
        return userService.createUser(userDTO);
    }

    @GetMapping(name = "getUser", path = "{username}")
    public UserReadDto getUser(@PathVariable final String username) {
        return userService.getUser(username);
    }

}
