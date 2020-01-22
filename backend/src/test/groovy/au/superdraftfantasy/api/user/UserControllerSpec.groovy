package au.superdraftfantasy.api.user

import au.superdraftfantasy.api.RestSpecification
import au.superdraftfantasy.api.TestData
import org.modelmapper.ModelMapper
import org.spockframework.spring.SpringBean
import org.springframework.http.HttpStatus
import org.springframework.mock.web.MockHttpServletResponse
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.http.MediaType

class UserControllerSpec extends RestSpecification {

    @SpringBean
    UserService userService = Mock(UserService)

    @SpringBean
    ModelMapper modelMapper = Mock(ModelMapper)

    @SpringBean
    BCryptPasswordEncoder bCryptPasswordEncoder = Mock(BCryptPasswordEncoder)

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
        MockHttpServletRequestBuilder httpRequest = MockMvcRequestBuilders
                .post("/users/sign-up")
                .contentType(MediaType.APPLICATION_JSON)
                .content(userDtoJson)

        when: "We execute the POST request"
        MockHttpServletResponse httpResponse = mockMvc.perform(httpRequest).andReturn().response

        then: "The created User's Id should be returned"
        httpResponse.status == HttpStatus.OK.value()
        httpResponse.getContentAsString() == user.getId().toString()
    }

}
