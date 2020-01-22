package au.superdraftfantasy.api.user

import au.superdraftfantasy.api.TestData
import au.superdraftfantasy.api.role.RoleRepository
import au.superdraftfantasy.api.role.RoleTypeEnum
import org.modelmapper.ModelMapper
import org.springframework.http.HttpStatus
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.web.server.ResponseStatusException
import spock.lang.Specification
import spock.lang.Subject

class UserServiceSpec extends Specification {

    private BCryptPasswordEncoder bCryptPasswordEncoder = Mock(BCryptPasswordEncoder)
    private ModelMapper modelMapper = Mock(ModelMapper)
    private UserRepository userRepository = Mock(UserRepository)
    private RoleRepository roleRepository = Mock(RoleRepository)

    @Subject
        UserService userService = new UserService(bCryptPasswordEncoder, modelMapper, userRepository, roleRepository)

    UserDTO userDto = TestData.User.createDto(1L, "testuser")
    UserEntity user = TestData.mapObjectToClass(userDto, UserEntity.class)

    def "createUser should create a valid User and assign an initial Role" () {
        given: "Mocked Methods (for valid UserEntity)"
        1 * bCryptPasswordEncoder.encode(userDto.getPassword()) >> "encodedPassword"
        1 * modelMapper.map(userDto, UserEntity.class) >> user
        1 * roleRepository.findByType(RoleTypeEnum.USER) >> Optional.of(TestData.Role.createUserRole())
        1 * userRepository.existsByUsername(user.getUsername()) >> false
        1 * userRepository.existsByEmail(user.getEmail()) >> false

        when: "A call to the createUser method is made"
        userService.createUser(userDto)

        then: "The User should be saved with an initial role"
        1 * userRepository.save(user) >> user
        user.getRoles().first().getType() == RoleTypeEnum.USER
    }

    def "createUser should throw an Exception if initial Role Type doesn't exist" () {
        given: "Mocked Methods (for non-existent Role Type)"
        1 * bCryptPasswordEncoder.encode(userDto.getPassword()) >> "encodedPassword"
        1 * modelMapper.map(userDto, UserEntity.class) >> user
        1 * roleRepository.findByType(RoleTypeEnum.USER) >> Optional.empty()
        0 * userRepository.existsByUsername(user.getUsername())
        0 * userRepository.existsByEmail(user.getEmail())

        when: "A call to the createUser method is made"
        userService.createUser(userDto)

        then: "An Exception should be thrown"
        ResponseStatusException exception = thrown(ResponseStatusException)
        exception.getStatus() == HttpStatus.NOT_FOUND
        exception.getReason() == "Initial Role Type Not Found."
    }

    def "createUser should throw an Exception for an invalid User (duplicate username)" () {
        given: "Mocked Methods (for duplicate username)"
        1 * bCryptPasswordEncoder.encode(userDto.getPassword()) >> "encodedPassword"
        1 * modelMapper.map(userDto, UserEntity.class) >> user
        1 * roleRepository.findByType(RoleTypeEnum.USER) >> Optional.of(TestData.Role.createUserRole())
        1 * userRepository.existsByUsername(user.getUsername()) >> true
        0 * userRepository.existsByEmail(user.getEmail()) >> false

        when: "A call to the createUser method is made"
        userService.createUser(userDto)

        then: "An Exception should be thrown"
        ResponseStatusException exception = thrown(ResponseStatusException)
        exception.getStatus() == HttpStatus.CONFLICT
        exception.getReason() == "A user with the username '" + user.getUsername() + "' already exists."
    }

    def "createUser should throw an Exception for an invalid User (duplicate email)" () {
        given: "Mocked Methods (for duplicate email)"
        1 * bCryptPasswordEncoder.encode(userDto.getPassword()) >> "encodedPassword"
        1 * modelMapper.map(userDto, UserEntity.class) >> user
        1 * roleRepository.findByType(RoleTypeEnum.USER) >> Optional.of(TestData.Role.createUserRole())
        1 * userRepository.existsByUsername(user.getUsername()) >> false
        1 * userRepository.existsByEmail(user.getEmail()) >> true

        when: "A call to the createUser method is made"
        userService.createUser(userDto)

        then: "An Exception should be thrown"
        ResponseStatusException exception = thrown(ResponseStatusException)
        exception.getStatus() == HttpStatus.CONFLICT
        exception.getReason() == "A user with the email '" + user.getEmail() + "' already exists."
    }
}
