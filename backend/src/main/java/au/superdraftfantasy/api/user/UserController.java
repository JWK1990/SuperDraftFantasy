package au.superdraftfantasy.api.user;

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

@RestController
public class UserController {

    private final UserService userService;
    private final ModelMapper modelMapper;
    private final PasswordEncoder passwordEncoder;
    private final RoleRepository roleRepository;

    public UserController(UserService userService, ModelMapper modelMapper, PasswordEncoder passwordEncoder, RoleRepository roleRepository) {
        this.userService = userService;
        this.modelMapper = modelMapper;
        this.passwordEncoder = passwordEncoder;
        this.roleRepository = roleRepository;
    }

    @PostMapping(name = "createUser", path = "/create-user")
    public Long createUser(@RequestBody final UserDTO userDTO) throws ParseException {
        UserEntity user = convertToEntity(userDTO);
        return userService.createUser(user);
    }

    private UserEntity convertToEntity(UserDTO userDTO) throws ParseException {
        userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        UserEntity user = modelMapper.map(userDTO, UserEntity.class);
        setInitialRoles(user);
        return user;
    }

    private void setInitialRoles(UserEntity user) {
        Collection<RoleEntity> roles = Arrays.asList(roleRepository.findByName("ROLE_USER"));
        user.setRoles(roles);
    } 

}
