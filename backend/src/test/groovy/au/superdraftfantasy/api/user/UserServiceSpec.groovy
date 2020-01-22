package au.superdraftfantasy.api.user

import au.superdraftfantasy.api.TestData
import au.superdraftfantasy.api.role.RoleRepository
import au.superdraftfantasy.api.role.RoleTypeEnum
import org.springframework.http.HttpStatus
import org.springframework.web.server.ResponseStatusException
import spock.lang.Specification
import spock.lang.Subject

class UserServiceSpec extends Specification {

    private UserRepository userRepository = Mock(UserRepository)
    private RoleRepository roleRepository = Mock(RoleRepository)

    @Subject
        UserService userService = new UserService(userRepository, roleRepository)

    UserEntity user

    def setup() {
        user =  TestData.User.create(1L, "username")
    }

    def "createUser should create a valid User and assign an initial Role" () {
        given: "A UserEntity"

        and: "Mocked Methods (for valid UserEntity)"
        1 * roleRepository.findByType(RoleTypeEnum.USER) >> Optional.of(TestData.Role.createUserRole())
        1 * userRepository.existsByUsername(user.getUsername()) >> false
        1 * userRepository.existsByEmail(user.getEmail()) >> false

        when: "A call to the createUser method is made"
        userService.createUser(user)

        then: "The User should be saved with an initial role"
        1 * userRepository.save(user) >> user
        user.getRoles().first().getType() == RoleTypeEnum.USER
    }

    def "createUser should throw an Exception for an invalid User (duplicate username)" () {
        given: "A UserEntity"
        UserEntity user = TestData.User.create(1L, "username")

        and: "Mocked Methods (for duplicate username)"
        1 * userRepository.existsByUsername(user.getUsername()) >> true

        when: "A call to the createUser method is made"
        userService.createUser(user)

        then: "An Exception should be thrown"
        ResponseStatusException exception = thrown(ResponseStatusException)
        exception.getStatus() == HttpStatus.CONFLICT
        exception.getReason() == "A user with the username '" + user.getUsername() + "' already exists."
    }

    def "createUser should throw an Exception for an invalid User (duplicate email)" () {
        given: "A UserEntity"
        UserEntity user = TestData.User.create(1L, "username")

        and: "Mocked Methods (for duplicate email)"
        1 * userRepository.existsByEmail(user.getEmail()) >> true

        when: "A call to the createUser method is made"
        userService.createUser(user)

        then: "An Exception should be thrown"
        ResponseStatusException exception = thrown(ResponseStatusException)
        exception.getStatus() == HttpStatus.CONFLICT
        exception.getReason() == "A user with the email '" + user.getEmail() + "' already exists."
    }

    def "createUser should throw an Exception if initial Role Type doesn't exist" () {
        given: "A UserEntity"
        UserEntity user = TestData.User.create(1L, "username")

        and: "Mocked Methods (for non-existent Role Type)"
        1 * roleRepository.findByType(RoleTypeEnum.USER) >> Optional.empty()

        when: "A call to the createUser method is made"
        userService.createUser(user)

        then: "An Exception should be thrown"
        ResponseStatusException exception = thrown(ResponseStatusException)
        exception.getStatus() == HttpStatus.NOT_FOUND
        exception.getReason() == "Initial Role Type Not Found."

    }
}
