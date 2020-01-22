package au.superdraftfantasy.api.team

import au.superdraftfantasy.api.TestData
import au.superdraftfantasy.api.coach.CoachEntity
import au.superdraftfantasy.api.draft.DraftEntity
import au.superdraftfantasy.api.player.PlayerEntity
import au.superdraftfantasy.api.player.PlayerRepository
import au.superdraftfantasy.api.user.UserEntity
import spock.lang.Specification
import spock.lang.Subject

class TeamServiceSpec extends Specification {

    private PlayerRepository playerRepository = Mock(PlayerRepository)
    private TeamRepository teamRepository = Mock(TeamRepository)

    @Subject
        TeamService teamService = new TeamService(teamRepository, playerRepository)

    TeamEntity team
    PlayerEntity player
    Long teamID = 1L
    Long playerID = 2L

    // Setup full Team -> Coach -> Draft relationship.
    def setup() {
        UserEntity user = TestData.User.create(1L, "testuser")
        DraftEntity draft = TestData.Draft.create(1L, "Test Draft")
        CoachEntity coach = TestData.Coach.createCommissioner(user, draft, null)
        draft.getCoaches().add(coach)
        team = TestData.Team.create(teamID, "Test Team", coach)
        coach.setTeam(team)
        player = TestData.Player.create(playerID)
    }

    def "addPlayer should add a valid Player to a valid Team" () {
        given: "Mocked Methods (for valid Player and Team)"
        1 * playerRepository.findById(playerID) >> Optional.of(player)
        1 * teamRepository.findById(teamID) >> Optional.of(team)

        when: "A call to the addPlayer method is made"
        teamService.addPlayer(teamID, playerID)

        then: "The Team should be saved with the Player added"
        1 * teamRepository.save(team) >> team
        Set<PlayerEntity> playerList = team.getPlayers()
        playerList.size() == 1L
        playerList.first() == player
    }

    /*
    def "createDraft should throw an Exception if the Draft Name is already taken" () {
        given: "A DraftEntity"
        DraftEntity draft = TestData.Draft.create(1L, "Test Draft 1")

        and: "Mocked Methods (for invalid Draft Name)"
        1 * draftRepository.existsByName(draft.getName()) >> true

        when: "A call to the createUser method is made"
        teamService.createDraft(draft)

        then: "An Exception should be thrown"
        ResponseStatusException exception = thrown(ResponseStatusException)
        exception.getStatus() == HttpStatus.CONFLICT
        exception.getReason() == "A draft with the name '" + draft.getName() + "' already exists."
    }

    def "createDraft should throw an Exception if the current User is not matched in the DB" () {
        given: "A DraftEntity"
        DraftEntity draft = TestData.Draft.create(1L, "Test Draft 1")

        and: "A current User"
        UserEntity user = TestData.User.create(1L, "username")
        mockAuthenticatedUser(user)

        and: "Mocked Methods (for valid UserEntity)"
        1 * userRepository.findByUsername(user.getUsername()) >> Optional.empty()

        when: "A call to the createUser method is made"
        teamService.createDraft(draft)

        then: "An Exception should be thrown"
        UsernameNotFoundException exception = thrown(UsernameNotFoundException)
        exception.getMessage() == "User With Username '" + user.getUsername() + "' Not Found."
    }
    */

}
