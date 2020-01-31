package au.superdraftfantasy.api.coach

import au.superdraftfantasy.api.TestData
import au.superdraftfantasy.api.draft.DraftEntity
import au.superdraftfantasy.api.draft.DraftRepository
import au.superdraftfantasy.api.user.UserEntity
import au.superdraftfantasy.api.user.UserRepository
import org.modelmapper.ModelMapper
import org.springframework.http.HttpStatus
import org.springframework.security.core.Authentication
import org.springframework.security.core.context.SecurityContext
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.web.server.ResponseStatusException
import spock.lang.Specification
import spock.lang.Subject

class CoachServiceSpec extends Specification {

    private ModelMapper modelMapper = Mock(ModelMapper)
    private DraftRepository draftRepository = Mock(DraftRepository)
    private UserRepository userRepository = Mock(UserRepository)
    private CoachRepository coachRepository = Mock(CoachRepository)

    @Subject
        CoachService coachService = new CoachService(modelMapper, draftRepository, userRepository, coachRepository, )

    private void mockAuthenticatedUser(UserEntity user) {
        Authentication authentication = Mock(Authentication.class);
        SecurityContext securityContext = Mock(SecurityContext.class);
        securityContext.getAuthentication() >> authentication;
        SecurityContextHolder.setContext(securityContext);
        authentication.getPrincipal() >> user
        authentication.getName() >> user.getUsername()
    }

    Long draftID = 1L;
    DraftEntity draft = TestData.Draft.create(draftID, "Test Draft")
    CoachDTO coachDto = TestData.Coach.createDTO(draftID)
    CoachEntity coach = TestData.mapObjectToClass(coachDto, CoachEntity.class)
    UserEntity user = TestData.User.create(1L, "testuser")

    def setup() {
        mockAuthenticatedUser(user)
    }

    def "createCoach should create a valid Coach" () {
        given: "Mocked Methods (for valid Coach)"
        1 * modelMapper.map(coachDto, CoachEntity.class) >> coach
        1 * draftRepository.findById(coachDto.getDraftId()) >> Optional.of(draft)
        1 * userRepository.findByUsername(user.getUsername()) >> Optional.of(user)

        when: "A call to the createCoach method is made"
        Long response = coachService.createCoach(coachDto)

        then: "The Coach should be saved with the correct details and the Coach ID returned"
        1 * coachRepository.save(coach) >> coach
        coach.draft == draft
        coach.typeId == CoachTypeEnum.MEMBER
        coach.user == user
        coach.team.budget == draft.getBudget()
        coach.team.name == user.getUsername() + "'s Team"
        response == coach.getId()
    }

    def "createCoach should throw an Exception if the Draft doesn't exist" () {
        given: "Mocked Methods (for an invalid Draft)"
        1 * modelMapper.map(coachDto, CoachEntity.class) >> coach
        1 * draftRepository.findById(coachDto.getDraftId()) >> Optional.empty()
        0 * userRepository.findByUsername(user.getUsername()) >> Optional.of(user)

        when: "A call to the createUser method is made"
        coachService.createCoach(coachDto)

        then: "An Exception should be thrown"
        ResponseStatusException exception = thrown(ResponseStatusException)
        exception.getStatus() == HttpStatus.NOT_FOUND
        exception.getReason() == "Draft with ID '" + coachDto.getDraftId() + "'Not Found."
    }

    def "createCoach should throw an Exception if the User doesn't exist" () {
        given: "Mocked Methods (for an invalid User)"
        1 * modelMapper.map(coachDto, CoachEntity.class) >> coach
        1 * draftRepository.findById(coachDto.getDraftId()) >> Optional.of(draft)
        1 * userRepository.findByUsername(user.getUsername()) >> Optional.empty()

        when: "A call to the createUser method is made"
        coachService.createCoach(coachDto)

        then: "An Exception should be thrown"
        UsernameNotFoundException exception = thrown(UsernameNotFoundException)
        exception.getMessage() == "User With Username '" + user.getUsername() + "' Not Found."
    }

    def "createCoach should throw an Exception if the Current User has already joined the Draft" () {
        given: "A Draft where the Current User has already joined"
        draft.getCoaches().add(coach)

        and: "Mocked Methods"
        1 * modelMapper.map(coachDto, CoachEntity.class) >> coach
        1 * draftRepository.findById(coachDto.getDraftId()) >> Optional.of(draft)
        1 * userRepository.findByUsername(user.getUsername()) >> Optional.of(user)

        when: "A call to the createUser method is made"
        coachService.createCoach(coachDto)

        then: "An Exception should be thrown"
        ResponseStatusException exception = thrown(ResponseStatusException)
        exception.getStatus() == HttpStatus.BAD_REQUEST
        exception.getReason() == "User with ID '" + user.getId() + "'Already Exists In Draft with ID '" + draftID + "'."
    }

    /*
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
*/

}
