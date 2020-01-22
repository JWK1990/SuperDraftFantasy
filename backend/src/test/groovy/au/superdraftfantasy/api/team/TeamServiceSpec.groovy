package au.superdraftfantasy.api.team

import au.superdraftfantasy.api.TestData
import au.superdraftfantasy.api.coach.CoachEntity
import au.superdraftfantasy.api.draft.DraftEntity
import au.superdraftfantasy.api.player.PlayerEntity
import au.superdraftfantasy.api.player.PlayerRepository
import au.superdraftfantasy.api.user.UserEntity
import org.springframework.http.HttpStatus
import org.springframework.web.server.ResponseStatusException
import spock.lang.Specification
import spock.lang.Subject

class TeamServiceSpec extends Specification {

    private PlayerRepository playerRepository = Mock(PlayerRepository)
    private TeamRepository teamRepository = Mock(TeamRepository)

    @Subject
        TeamService teamService = new TeamService(teamRepository, playerRepository)

    def createTeamWithCoachAndDraft(Long id, DraftEntity draft) {
        UserEntity user = TestData.User.create(id, "user" + id)
        CoachEntity coach = TestData.Coach.createMember(id, user, draft, null)
        TeamEntity team = TestData.Team.create(id, "Team " + id, coach)
        coach.setTeam(team)
        draft.getCoaches().add(coach)
        return team;
    }

    DraftEntity draft = TestData.Draft.create(1L, "Test Draft")
    Long teamID = 1L
    TeamEntity team = createTeamWithCoachAndDraft(teamID, draft)
    Long playerID = 2L
    PlayerEntity player = TestData.Player.create(playerID)

    def "addPlayer should add a valid Player to a valid Team" () {
        given: "Mocked Methods (for valid Player and Team)"
        1 * teamRepository.findById(teamID) >> Optional.of(team)
        1 * playerRepository.findById(playerID) >> Optional.of(player)

        when: "A call to the addPlayer method is made"
        teamService.addPlayer(teamID, playerID)

        then: "The Team should be saved with the Player added"
        1 * teamRepository.save(team) >> team
        Set<PlayerEntity> playerList = team.getPlayers()
        playerList.size() == 1L
        playerList.first() == player
    }


    def "addPlayer should throw an Exception if the Team doesn't exist" () {
        given: "Mocked Methods (for an invalid Team)"
        1 * teamRepository.findById(teamID) >> Optional.empty()
        0 * playerRepository.findById(playerID)

        when: "A call to the createUser method is made"
        teamService.addPlayer(teamID, playerID)

        then: "An Exception should be thrown"
        ResponseStatusException exception = thrown(ResponseStatusException)
        exception.getStatus() == HttpStatus.NOT_FOUND
        exception.getReason() == "Team with ID '" + teamID + "' Not Found."
    }

    def "addPlayer should throw an Exception if the Player has already been drafted by the drafting Team" () {
        given: "A Team already containing the Player"
        team.getPlayers().add(player)

        and: "Mocked Methods"
        1 * teamRepository.findById(teamID) >> Optional.of(team)
        0 * playerRepository.findById(playerID)

        when: "A call to the createUser method is made"
        teamService.addPlayer(teamID, playerID)

        then: "An Exception should be thrown"
        ResponseStatusException exception = thrown(ResponseStatusException)
        exception.getStatus() == HttpStatus.CONFLICT
        exception.getReason() == "Player with ID '" + playerID + "' is already drafted by Team with ID '" + teamID + "'."
    }

    def "addPlayer should throw an Exception if the Player has already been drafted by another Team" () {
        given: "Another Team in the same Draft already containing the Player"
        Long secondTeamID = 2L
        TeamEntity secondTeam = createTeamWithCoachAndDraft(secondTeamID, draft)
        secondTeam.getPlayers().add(player)

        and: "Mocked Methods"
        1 * teamRepository.findById(teamID) >> Optional.of(team)
        0 * playerRepository.findById(playerID)

        when: "A call to the createUser method is made"
        teamService.addPlayer(teamID, playerID)

        then: "An Exception should be thrown"
        ResponseStatusException exception = thrown(ResponseStatusException)
        exception.getStatus() == HttpStatus.CONFLICT
        exception.getReason() == "Player with ID '" + playerID + "' is already drafted by Team with ID '" + secondTeamID + "'."
    }

    def "addPlayer should throw an Exception if the Player doesn't exist" () {
        given: "Mocked Methods (for an invalid Player)"
        1 * teamRepository.findById(teamID) >> Optional.of(team)
        1 * playerRepository.findById(playerID) >> Optional.empty()

        when: "A call to the createUser method is made"
        teamService.addPlayer(teamID, playerID)

        then: "An Exception should be thrown"
        ResponseStatusException exception = thrown(ResponseStatusException)
        exception.getStatus() == HttpStatus.NOT_FOUND
        exception.getReason() == "Player with ID '" + playerID + "' Not Found."
    }

}
