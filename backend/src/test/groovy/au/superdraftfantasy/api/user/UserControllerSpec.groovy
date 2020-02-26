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

    def "POST /users/sign-up should create a User from a UserDTO and return the new UserReadDto"() {
        given: "A UserWriteDto in JSON format"
        UserWriteDto userWriteDto = TestData.User.createWriteDto(1L, "testuser1")
        String userWriteDtoJson = TestData.mapObjectToJson(userWriteDto)

        and: "A mocked ID for the created User"
        Long userID = 1L

        and: "A UserReadDto"
        UserReadDto userReadDto = TestData.User.createReadDto(1L, "testuser1")

        and: "Mocked Methods"
        1 * userService.createUser(userWriteDto) >> userReadDto

        and: "A POST request to the /users/sign-up endpoint"
        MockHttpServletRequestBuilder httpRequest = MockMvcRequestBuilders
                .post("/users/sign-up")
                .contentType(MediaType.APPLICATION_JSON)
                .content(userWriteDtoJson)

        when: "We execute the POST request"
        MockHttpServletResponse httpResponse = mockMvc.perform(httpRequest).andReturn().response

        then: "The created UserReadDto should be returned"
        httpResponse.status == HttpStatus.OK.value()
    }

}
