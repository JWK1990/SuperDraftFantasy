package au.superdraftfantasy.api.user;

import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(name = "createUser", path = "/sign-up")
    public Long createUser(@RequestBody @Valid final UserWriteDto userWriteDto) {
        return userService.createUser(userWriteDto);
    }

    @GetMapping(name = "getUser", path = "{username}")
    public UserReadDto getUser(@PathVariable final String username) {
        return userService.getUser(username);
    }

}
