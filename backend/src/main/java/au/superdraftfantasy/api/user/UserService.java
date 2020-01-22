package au.superdraftfantasy.api.user;

import java.util.Arrays;
import java.util.List;

import javax.validation.constraints.NotBlank;

import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import au.superdraftfantasy.api.role.RoleEntity;
import au.superdraftfantasy.api.role.RoleRepository;
import au.superdraftfantasy.api.role.RoleTypeEnum;


@Service
public class UserService {

    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final ModelMapper modelMapper;
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    public UserService(BCryptPasswordEncoder bCryptPasswordEncoder, ModelMapper modelMapper, UserRepository userRepository, RoleRepository roleRepository) {
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.modelMapper = modelMapper;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    public Long createUser(@NotBlank final UserDTO userDto) {
        UserEntity user = convertToEntity(userDto);
        checkUserValidity(user);
        return userRepository.save(user).getId();
    }

    private UserEntity convertToEntity(UserDTO userDTO) {
        userDTO.setPassword(bCryptPasswordEncoder.encode(userDTO.getPassword()));
        UserEntity user = modelMapper.map(userDTO, UserEntity.class);
        user.setRoles(getInitialRoles());
        return user;
    }

    private List<RoleEntity> getInitialRoles() {
        RoleTypeEnum initialRoleType = RoleTypeEnum.USER;
        RoleEntity initialRole = roleRepository.findByType(initialRoleType).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Initial Role Type Not Found."));
        return Arrays.asList(initialRole);
    }

    private void checkUserValidity(UserEntity user) {
        final String username = user.getUsername();
        final String email = user.getEmail();

        if(userRepository.existsByUsername(username)) {
            throw new ResponseStatusException(HttpStatus.CONFLICT,  "A user with the username '" + username + "' already exists."
            );
        } else if(userRepository.existsByEmail(email)) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "A user with the email '" + email + "' already exists."
            );
        }
    }

}