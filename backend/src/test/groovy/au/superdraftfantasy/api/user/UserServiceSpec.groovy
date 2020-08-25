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

    Long userID = 1L
    String username = "testuser"
    UserWriteDto userWriteDto = TestData.User.createWriteDto(userID, username)
    UserEntity user = TestData.mapObjectToClass(userWriteDto, UserEntity.class)
    UserReadDto userReadDto = TestData.User.createReadDto(userID, username)

    def "createUser should create a valid User and assign an initial Role" () {
        given: "Mocked Methods (for valid UserEntity)"
        1 * bCryptPasswordEncoder.encode(userWriteDto.getPassword()) >> "encodedPassword"
        1 * modelMapper.map(userWriteDto, UserEntity.class) >> user
        1 * roleRepository.findByType(RoleTypeEnum.USER) >> Optional.of(TestData.Role.createUserRole())
        1 * userRepository.existsByUsername(user.getUsername()) >> false
        1 * userRepository.existsByEmail(user.getEmail()) >> false
        1 * modelMapper.map(user, UserReadDto.class) >> userReadDto


        when: "A call to the createUser method is made"
        UserReadDto response = userService.createUser(userWriteDto)

        then: "The User should be saved with an initial role and the User ID returned"
        1 * userRepository.save(user) >> user
        user.getRoles().first().getType() == RoleTypeEnum.USER
        response == userReadDto
    }

    def "createUser should throw an Exception if initial Role Type doesn't exist" () {
        given: "Mocked Methods (for non-existent Role Type)"
        1 * bCryptPasswordEncoder.encode(userWriteDto.getPassword()) >> "encodedPassword"
        1 * modelMapper.map(userWriteDto, UserEntity.class) >> user
        1 * roleRepository.findByType(RoleTypeEnum.USER) >> Optional.empty()
        0 * userRepository.existsByUsername(user.getUsername())
        0 * userRepository.existsByEmail(user.getEmail())

        when: "A call to the createUser method is made"
        userService.createUser(userWriteDto)

        then: "An Exception should be thrown"
        ResponseStatusException exception = thrown(ResponseStatusException)
        exception.getStatus() == HttpStatus.NOT_FOUND
        exception.getReason() == "Initial Role Type Not Found."
    }

    def "createUser should throw an Exception for an invalid User (duplicate username)" () {
        given: "Mocked Methods (for duplicate username)"
        1 * bCryptPasswordEncoder.encode(userWriteDto.getPassword()) >> "encodedPassword"
        1 * modelMapper.map(userWriteDto, UserEntity.class) >> user
        1 * roleRepository.findByType(RoleTypeEnum.USER) >> Optional.of(TestData.Role.createUserRole())
        1 * userRepository.existsByUsername(user.getUsername()) >> true
        0 * userRepository.existsByEmail(user.getEmail()) >> false

        when: "A call to the createUser method is made"
        userService.createUser(userWriteDto)

        then: "An Exception should be thrown"
        ResponseStatusException exception = thrown(ResponseStatusException)
        exception.getStatus() == HttpStatus.CONFLICT
        exception.getReason() == "A user with the username '" + user.getUsername() + "' already exists."
    }

    def "createUser should throw an Exception for an invalid User (duplicate email)" () {
        given: "Mocked Methods (for duplicate email)"
        1 * bCryptPasswordEncoder.encode(userWriteDto.getPassword()) >> "encodedPassword"
        1 * modelMapper.map(userWriteDto, UserEntity.class) >> user
        1 * roleRepository.findByType(RoleTypeEnum.USER) >> Optional.of(TestData.Role.createUserRole())
        1 * userRepository.existsByUsername(user.getUsername()) >> false
        1 * userRepository.existsByEmail(user.getEmail()) >> true

        when: "A call to the createUser method is made"
        userService.createUser(userWriteDto)

        then: "An Exception should be thrown"
        ResponseStatusException exception = thrown(ResponseStatusException)
        exception.getStatus() == HttpStatus.CONFLICT
        exception.getReason() == "A user with the email '" + user.getEmail() + "' already exists."
    }

    def "getUser should return the requested UserReadDto" () {
        given: "Mocked Methods for a valid username"
        1 * userRepository.findByUsername(username) >> Optional.of(user)
        1 * modelMapper.map(user, UserReadDto.class) >> userReadDto

        when: "A call to the getUser method is made"
        UserReadDto response = userService.getCurrentUser(username)

        then: "The UserEntity found by the Repository should be returned as a UserReadDto"
        response == userReadDto
    }

    def "getUser should throw an Exception if the requested User does not exist" () {
        given: "Mocked Methods for an invalid username"
        1 * userRepository.findByUsername(username) >> Optional.empty()
        0 * modelMapper.map(user, UserReadDto.class)

        when: "A call to the getUser method is made"
        userService.getCurrentUser(username)

        then: "An Exception should be thrown"
        ResponseStatusException exception = thrown(ResponseStatusException)
        exception.getStatus() == HttpStatus.NOT_FOUND
        exception.getReason() == "User not found."
    }

}
