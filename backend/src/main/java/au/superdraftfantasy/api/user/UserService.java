package au.superdraftfantasy.api.user;

import au.superdraftfantasy.api.configuration.security.AuthenticatedUserReadDto;
import au.superdraftfantasy.api.role.RoleEntity;
import au.superdraftfantasy.api.role.RoleRepository;
import au.superdraftfantasy.api.role.RoleTypeEnum;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.constraints.NotBlank;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;


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

    /**
     * Create a User and return the generated ID.
     * @param userWriteDto
     * @return
     */
    public UserReadDto createUser(@NotBlank final UserWriteDto userWriteDto) {
        UserEntity user = convertToEntity(userWriteDto);
        checkUserValidity(user);
        userRepository.save(user);
        return modelMapper.map(user, UserReadDto.class);
    }

    public AuthenticatedUserReadDto getCurrentUser(Authentication authentication) {
        return modelMapper.map(
                authentication.getPrincipal(),
                AuthenticatedUserReadDto.class
        );
    }

    private UserEntity convertToEntity(UserWriteDto userWriteDto) {
        userWriteDto.setPassword(bCryptPasswordEncoder.encode(userWriteDto.getPassword()));
        UserEntity user = modelMapper.map(userWriteDto, UserEntity.class);
        user.setRoles(getInitialRoles());
        return user;
    }

    private Set<RoleEntity> getInitialRoles() {
        RoleTypeEnum initialRoleType = RoleTypeEnum.USER;
        RoleEntity initialRole = roleRepository.findByType(initialRoleType).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Initial Role Type Not Found."));
        return new HashSet <>(Arrays.asList(initialRole));
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
