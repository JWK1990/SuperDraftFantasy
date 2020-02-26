package au.superdraftfantasy.api.user;

import static au.superdraftfantasy.api.configuration.security.SecurityConstants.DEFAULT_ISSUER;
import static au.superdraftfantasy.api.configuration.security.SecurityConstants.EXPIRATION_TIME;
import static au.superdraftfantasy.api.configuration.security.SecurityConstants.TOKEN_PREFIX;

import java.util.UUID;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import au.superdraftfantasy.api.configuration.security.JWTUtils;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(name = "createUser", path = "/sign-up")
    public UserReadDto createUser(@RequestBody @Valid final UserWriteDto userWriteDto, HttpServletResponse response) {
        UserReadDto userReadDto = userService.createUser(userWriteDto);
        String jwtToken = TOKEN_PREFIX + JWTUtils.createJWT(UUID.randomUUID().toString(), DEFAULT_ISSUER, userReadDto.getUsername(), EXPIRATION_TIME);
        response.addHeader("Authorization", jwtToken);
        return userReadDto;
    }

    @GetMapping(name = "getUser", path = "{username}")
    public UserReadDto getUser(@PathVariable final String username) {
        return userService.getUser(username);
    }

}
