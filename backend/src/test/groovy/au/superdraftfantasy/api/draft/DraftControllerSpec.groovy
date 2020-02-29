package au.superdraftfantasy.api.draft

import au.superdraftfantasy.api.RestSpecification
import au.superdraftfantasy.api.TestData
import au.superdraftfantasy.api.roster.RosterReadDto
import org.spockframework.spring.SpringBean
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.mock.web.MockHttpServletResponse
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders

class DraftControllerSpec extends RestSpecification {

    @SpringBean
    DraftService draftService = Mock(DraftService)

    def "GET /drafts/{draftID} should return a DraftReadDto for the given draftID"() {
        given: "A draftID and a DraftReadDto"
        Long draftID = 1L;
        RosterReadDto rosterReadDto = TestData.Roster.createRosterReadDto(1L, "11111", 1, 1, 1, 1, 1)
        DraftReadDto draftReadDto = TestData.Draft.createDraftReadDto(1L, "Test Draft", rosterReadDto, null)

        and: "Mocked Methods"
        1 * draftService.getDraft(draftID) >> draftReadDto

        and: "A GET request to the /drafts/{draftID} endpoint"
        MockHttpServletRequestBuilder httpRequest = MockMvcRequestBuilders
                .get("/drafts/" + draftID)
                .contentType(MediaType.APPLICATION_JSON)
                .header('Authorization', mockJwtToken)

        when: "We execute the GET request"
        MockHttpServletResponse httpResponse = mockMvc.perform(httpRequest).andReturn().response

        then: "The DraftReadDto returned by the draftService should be returned"
        httpResponse.status == HttpStatus.OK.value()
        httpResponse.getContentAsString() == TestData.mapObjectToJson(draftReadDto)
    }

    def "POST /drafts should create a Draft from a DraftDTO and return the new Draft's ID"() {
        given: "A DraftDTO in JSON format"
        DraftWriteDto draftWriteDto = TestData.Draft.createDraftWriteDto(1L, "Test Draft")
        String draftDtoJson = TestData.mapObjectToJson(draftWriteDto)

        and: "A mocked ID for the created Draft"
        Long draftID = 1L

        and: "Mocked Methods"
        1 * draftService.createDraft(draftWriteDto) >> draftID

        and: "A POST request to the /drafts endpoint"
        MockHttpServletRequestBuilder httpRequest = MockMvcRequestBuilders
                .post("/drafts")
                .contentType(MediaType.APPLICATION_JSON)
                .content(draftDtoJson)
                .header('Authorization', mockJwtToken)

        when: "We execute the POST request"
        MockHttpServletResponse httpResponse = mockMvc.perform(httpRequest).andReturn().response

        then: "The created Draft's Id returned by the draftService should be returned"
        httpResponse.status == HttpStatus.OK.value()
        httpResponse.getContentAsString() == draftID.toString()
    }

}
