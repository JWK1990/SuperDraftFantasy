package au.superdraftfantasy.api.coach

import au.superdraftfantasy.api.RestSpecification
import au.superdraftfantasy.api.TestData
import org.spockframework.spring.SpringBean
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.mock.web.MockHttpServletResponse
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders

class CoachControllerSpec extends RestSpecification {

    @SpringBean
    CoachService coachService = Mock(CoachService)

    def "POST /coaches should create a Coach and add them to a Draft"() {
        given: "A CoachDTO"
        CoachDTO coachDto = TestData.Coach.createDTO(1L)
        String coachDtoJson = TestData.mapObjectToJson(coachDto)

        and: "A mocked ID for the created Coach"
        Long coachID = 1L

        and: "Mocked Methods"
        1 * coachService.createCoach(coachDto) >> coachID

        and: "A POST request to the /coaches endpoint"
        MockHttpServletRequestBuilder httpRequest = MockMvcRequestBuilders
                .post("/coaches")
                .header('Authorization', mockJwtToken)
                .contentType(MediaType.APPLICATION_JSON)
                .content(coachDtoJson)

        when: "We execute the POST request"
        MockHttpServletResponse httpResponse = mockMvc.perform(httpRequest).andReturn().response

        then: "The created Coach's ID should be returned"
        httpResponse.status == HttpStatus.OK.value()
        httpResponse.getContentAsString() == coachID.toString()
    }

}
