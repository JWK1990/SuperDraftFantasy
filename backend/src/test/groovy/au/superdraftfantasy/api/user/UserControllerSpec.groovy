package au.superdraftfantasy.api.user


import org.modelmapper.ModelMapper
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.web.context.WebApplicationContext
import spock.lang.Specification
import org.springframework.http.MediaType

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class UserControllerSpec extends Specification {

    UserService userService = Mock(UserService)
    ModelMapper modelMapper = Mock(ModelMapper)
    BCryptPasswordEncoder bCryptPasswordEncoder = Mock(BCryptPasswordEncoder)

    MockMvc mockMvc

    @Autowired
    private WebApplicationContext context

    def "when get is performed then the response has status 200 and content is 'Hello world!'"() {
        given: "A UserDTO"
        UserDTO userDTO = new UserDTO(null, "username", "First", "Last", "test.user@gmail.com", "password")
        UserEntity convertedUser = new UserEntity(null, "username", "First", "Last", "test.user@gmail.com", "password", null, null, null)
        UserEntity hashedUser = clone(convertedUser)
        hashedUser.setPassword("encodedPassword")

        and: "Mocked Dependencies"
        1 * modelMapper.map(_, _) >> convertedUser
        1 * bCryptPasswordEncoder.encode(_) >> "encodedPassword"
        1 * userService.createUser(hashedUser)

        and: "A POST request to the /users/sign-up endpoint"
        def postRequest = MockMvcRequestBuilders
                .post("/users/sign-up")
                .contentType(MediaType.APPLICATION_JSON)

        when: "We execute the POST request"
        def response = mockMvc.perform(postRequest).andReturn().response

        then: "Except the created User's Id to be returned"
        response == userDTO.getId();
    }

}
