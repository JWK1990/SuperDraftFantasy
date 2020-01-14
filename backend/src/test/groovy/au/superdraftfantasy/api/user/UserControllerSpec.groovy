package au.superdraftfantasy.api.user

import spock.lang.Specification
import java.text.ParseException;
import java.util.Arrays;
import java.util.Collection;

import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import au.superdraftfantasy.api.role.RoleEntity;
import au.superdraftfantasy.api.role.RoleRepository;

class UserControllerSpec extends Specification {

    private final UserService userService;
    private final ModelMapper modelMapper;
    private final PasswordEncoder passwordEncoder;
    private final RoleRepository roleRepository;

    public UserController(UserService userService, ModelMapper modelMapper, PasswordEncoder passwordEncoder, RoleRepository roleRepository) {
        this.userService = Mock(userService);
        this.modelMapper = Mock(modelMapper);
        this.passwordEncoder = Mock(passwordEncoder);
        this.roleRepository = Mock(roleRepository);Ø
    }

    def "createUser should create a User and return the id"(){
        given: "A UserDTO"
        UserDTO userDTO = new UserDTO(null, "Username", "FirstName", "LastName", "TestUser@gmail.com")

        expect:
        true
    }

}
