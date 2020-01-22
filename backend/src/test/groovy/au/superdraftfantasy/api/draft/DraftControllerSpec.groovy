package au.superdraftfantasy.api.draft

import au.superdraftfantasy.api.RestSpecification
import au.superdraftfantasy.api.TestData
import org.spockframework.spring.SpringBean
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.mock.web.MockHttpServletResponse
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders

class DraftControllerSpec extends RestSpecification {

    @SpringBean
    DraftService draftService = Mock(DraftService)

    def "POST /drafts should create a Draft from a DraftDTO and return the new Draft's ID"() {
        given: "A DraftDTO in JSON format"
        DraftDTO draftDto = TestData.Draft.createDto(1L, "Test Draft")
        String draftDtoJson = TestData.mapObjectToJson(draftDto)

        and: "A mocked ID for the created Draft"
        Long draftID = 1L

        and: "Mocked Methods"
        1 * draftService.createDraft(draftDto) >> draftID

        and: "A POST request to the /drafts endpoint"
        MockHttpServletRequestBuilder httpRequest = MockMvcRequestBuilders
                .post("/drafts")
                .contentType(MediaType.APPLICATION_JSON)
                .content(draftDtoJson)
                .header('Authorization', mockJwtToken)

        when: "We execute the POST request"
        MockHttpServletResponse httpResponse = mockMvc.perform(httpRequest).andReturn().response

        then: "The created Draft's Id should be returned"
        httpResponse.status == HttpStatus.OK.value()
        httpResponse.getContentAsString() == draftID.toString()
    }

}
