package au.superdraftfantasy.api.user;

import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @Autowired
    private ModelMapper modelMapper;

    @PostMapping(name = "createUser", path = "/create-user")
    public Long createUser(@RequestBody final UserDTO userDTO) throws ParseException {
        UserEntity userEntity = convertToEntity(userDTO);
        return userService.createUser(userEntity);
    }

    private UserEntity convertToEntity(UserDTO userDTO) throws ParseException {
        return modelMapper.map(userDTO, UserEntity.class);
    }

}
