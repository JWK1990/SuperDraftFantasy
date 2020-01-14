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
    private final ModelMapper modelMapper;

    public UserController(UserService userService, ModelMapper modelMapper) {
        this.userService = userService;
        this.modelMapper = modelMapper;
    }

    @PostMapping(name = "createUser", path = "/create-user")
    public Long createUser(@RequestBody final UserDTO userDTO) throws ParseException {
        UserEntity userEntity = convertToEntity(userDTO);
        return userService.createUser(userEntity);
    }

    private UserEntity convertToEntity(UserDTO userDTO) throws ParseException {
        return modelMapper.map(userDTO, UserEntity.class);
    }

}
