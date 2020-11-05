package au.superdraftfantasy.api.user;

import au.superdraftfantasy.api.configuration.security.AuthenticatedUserReadDto;
import au.superdraftfantasy.api.configuration.security.JWTUtils;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.UUID;

import static au.superdraftfantasy.api.configuration.security.SecurityConstants.*;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(name = "createUser", path = "/sign-up")
    public UserReadDto createUser(
            @RequestBody @Valid final UserWriteDto userWriteDto,
            HttpServletResponse response
    ) {
        UserReadDto userReadDto = userService.createUser(userWriteDto);
        String jwtToken = TOKEN_PREFIX + JWTUtils.createJWT(UUID.randomUUID().toString(), DEFAULT_ISSUER, userReadDto.getUsername(), EXPIRATION_TIME);
        response.addHeader("Authorization", jwtToken);
        return userReadDto;
    }

    @GetMapping(name = "getCurrentUser", path="/me")
    @ResponseBody
    public AuthenticatedUserReadDto getCurrentUser(Authentication authentication) {
        return userService.getCurrentUser(authentication);
    }

}
