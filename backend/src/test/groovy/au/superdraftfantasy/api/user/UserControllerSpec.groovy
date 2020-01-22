package au.superdraftfantasy.api.user

import au.superdraftfantasy.api.RestSpecification
import au.superdraftfantasy.api.TestData
import org.spockframework.spring.SpringBean
import org.springframework.http.HttpStatus
import org.springframework.mock.web.MockHttpServletResponse
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.http.MediaType

class UserControllerSpec extends RestSpecification {

    @SpringBean
    UserService userService = Mock(UserService)

    def "POST /users/sign-up should create a User from a UserDTO and return the new User's Id"() {
        given: "A UserDTO in JSON format"
        UserDTO userDto = TestData.User.createDto(1L, "testuser1")
        String userDtoJson = TestData.mapObjectToJson(userDto)

        and: "A mocked ID for the created User"
        Long userID = 1L

        and: "Mocked Methods"
        1 * userService.createUser(userDto) >> userID

        and: "A POST request to the /users/sign-up endpoint"
        MockHttpServletRequestBuilder httpRequest = MockMvcRequestBuilders
                .post("/users/sign-up")
                .contentType(MediaType.APPLICATION_JSON)
                .content(userDtoJson)

        when: "We execute the POST request"
        MockHttpServletResponse httpResponse = mockMvc.perform(httpRequest).andReturn().response

        then: "The created User's Id should be returned"
        httpResponse.status == HttpStatus.OK.value()
        httpResponse.getContentAsString() == userID.toString()
    }

}
