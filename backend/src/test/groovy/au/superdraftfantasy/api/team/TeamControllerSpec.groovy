package au.superdraftfantasy.api.team

import au.superdraftfantasy.api.RestSpecification
import au.superdraftfantasy.api.TestData
import au.superdraftfantasy.api.draft.DraftJoinWriteDto
import org.spockframework.spring.SpringBean
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.mock.web.MockHttpServletResponse
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders

class TeamControllerSpec extends RestSpecification {

    @SpringBean
    TeamService coachService = Mock(TeamService)

    def "POST /coaches should create a Coach and add them to a Draft"() {
        given: "A CoachDTO"
        DraftJoinWriteDto coachDto = TestData.Team.createWriteDto(1L)
        String coachDtoJson = TestData.mapObjectToJson(coachDto)

        and: "A mocked ID for the created Coach"
        Long coachID = 1L

        and: "Mocked Methods"
        1 * coachService.createTeam(coachDto) >> coachID

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

/*
    @SpringBean
    TeamService teamService = Mock(TeamService)

    def "PUT /teams{teamID}/players/add/{playerID} should add a Player to a Team"() {
        given: "A TeamID and TeamReadDto"
        Long teamID = 1L
        TeamReadDto teamReadDto = TestData.Team.createReadDto(1L, "Test Team 1")

        and: "A PlayerID"
        Long playerID = 2L

        and: "A valid TeamAddPlayerDto in JSON format"
        Long salePrice = 1L
        TeamAddPlayerDto teamAddPlayerDto = TestData.Team.createTeamAddPlayerDto(salePrice)
        String teamAddPlayerDtoJson = TestData.mapObjectToJson(teamAddPlayerDto)

        and: "Mocked Methods"
        1 * teamService.addPlayer(teamID, playerID, salePrice) >> teamReadDto

        and: "A PUT request to the /teams/{teamID}/players/add/{playerID} endpoint"
        MockHttpServletRequestBuilder httpRequest = MockMvcRequestBuilders
                .put("/teams/" + teamID + "/players/add/" + playerID)
                .contentType(MediaType.APPLICATION_JSON)
                .content(teamAddPlayerDtoJson)
                .header('Authorization', mockJwtToken)

        when: "We execute the PUT request"
        MockHttpServletResponse httpResponse = mockMvc.perform(httpRequest).andReturn().response

        then: "The updated Team's ID should be returned"
        httpResponse.status == HttpStatus.OK.value()
        httpResponse.getContentAsString() == TestData.mapObjectToJson(teamReadDto)
    }
 */
