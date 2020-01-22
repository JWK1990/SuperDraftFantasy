package au.superdraftfantasy.api.draft

import au.superdraftfantasy.api.RestSpecification
import au.superdraftfantasy.api.TestData
import org.modelmapper.ModelMapper
import org.spockframework.spring.SpringBean
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.mock.web.MockHttpServletResponse
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders

class DraftControllerSpec extends RestSpecification {

    @SpringBean
    DraftService draftService = Mock(DraftService)

    @SpringBean
    ModelMapper modelMapper = Mock(ModelMapper)

    def "Should create a Draft from a DraftDTO and return the new Draft's Id"() {
        given: "A DraftDTO in JSON format"
        DraftDTO draftDto = TestData.Draft.createDto(1L, "Test Draft")
        String draftDtoJson = TestData.mapObjectToJson(draftDto)

        and: "A Draft created from the DraftDTO"
        DraftEntity draft = TestData.mapObjectToClass(draftDto, DraftEntity.class)

        and: "Mocked Methods"
        1 * modelMapper.map(draftDto, DraftEntity.class) >> draft
        1 * draftService.createDraft(draft) >> draft.getId()

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
        httpResponse.getContentAsString() == draft.getId().toString()
    }

}
