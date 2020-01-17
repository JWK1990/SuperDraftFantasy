package au.superdraftfantasy.api.draft

import au.superdraftfantasy.api.TestData
import au.superdraftfantasy.api.user.UserDTO
import au.superdraftfantasy.api.user.UserEntity
import au.superdraftfantasy.api.user.UserService
import org.modelmapper.ModelMapper
import org.spockframework.spring.SpringBean
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.HttpStatus
import org.springframework.mock.web.MockHttpServletResponse
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.web.context.WebApplicationContext
import spock.lang.Specification
import org.springframework.http.MediaType

@SpringBootTest
@AutoConfigureMockMvc
class UserControllerSpec extends Specification {

    @SpringBean
    DraftService draftService = Mock(DraftService)

    @SpringBean
    ModelMapper modelMapper = Mock(ModelMapper)

    @Autowired
    private MockMvc mockMvc

    @Autowired
    private WebApplicationContext context

    def "Should create a User from a UserDTO and return the new User's Id"() {
        given: "A UserDTO in JSON format"
        UserDTO userDto = TestData.User.createDto(1L, "testuser1")
        String userDtoJson = TestData.mapObjectToJson(userDto)

        and: "A User created from the UserDTO"
        UserEntity user = TestData.mapObjectToClass(userDto, UserEntity.class)

        and: "Mocked Methods"
        1 * bCryptPasswordEncoder.encode(userDto.getPassword()) >> userDto.getPassword()
        1 * modelMapper.map(userDto, UserEntity.class) >> user
        1 * userService.createUser(user) >> user.getId()

        and: "A POST request to the /users/sign-up endpoint"
        MockHttpServletRequestBuilder postRequest = MockMvcRequestBuilders
                .post("/users/sign-up")
                .contentType(MediaType.APPLICATION_JSON)
                .content(userDtoJson)

        when: "We execute the POST request"
        MockHttpServletResponse response = mockMvc.perform(postRequest).andReturn().response

        then: "Except the created User's Id to be returned"
        response.status == HttpStatus.OK.value()
        response.getContentAsString() == user.getId().toString()
    }

}

