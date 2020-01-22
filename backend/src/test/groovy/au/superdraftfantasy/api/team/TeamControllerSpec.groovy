package au.superdraftfantasy.api.team

import au.superdraftfantasy.api.RestSpecification
import org.spockframework.spring.SpringBean
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.mock.web.MockHttpServletResponse
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders

class TeamControllerSpec extends RestSpecification {

    @SpringBean
    TeamService teamService = Mock(TeamService)

    def "PUT /teams{teamID}/players/add/{playerID} should add a Player to a Team"() {
        given: "A TeamID"
        Long teamID = 1L

        and: "A PlayerID"
        Long playerID = 2L

        and: "Mocked Methods"
        1 * teamService.addPlayer(teamID, playerID) >> teamID

        and: "A PUT request to the /teams/{teamID}/players/add/{playerID} endpoint"
        MockHttpServletRequestBuilder httpRequest = MockMvcRequestBuilders
                .put("/teams/" + teamID + "/players/add/" + playerID)
                .contentType(MediaType.APPLICATION_JSON)
                .header('teamID', teamID)
                .header('playerID', playerID)
                .header('Authorization', mockJwtToken)

        when: "We execute the PUT request"
        MockHttpServletResponse httpResponse = mockMvc.perform(httpRequest).andReturn().response

        then: "The updated Team's ID should be returned"
        httpResponse.status == HttpStatus.OK.value()
        httpResponse.getContentAsString() == teamID.toString()
    }

}
