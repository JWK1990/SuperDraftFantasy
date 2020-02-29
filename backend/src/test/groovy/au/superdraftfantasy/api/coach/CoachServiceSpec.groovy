package au.superdraftfantasy.api.coach

import au.superdraftfantasy.api.TestData
import au.superdraftfantasy.api.draft.DraftEntity
import au.superdraftfantasy.api.draft.DraftRepository
import au.superdraftfantasy.api.roster.RosterEntity
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
    RosterEntity roster = TestData.Roster.create(1L, "11111", 1, 1, 1, 1, 1);
    DraftEntity draft = TestData.Draft.create(draftID, "Test Draft", roster)

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
        coach.type == CoachTypeEnum.MEMBER
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

    def "createCoach should throw an Exception if the Draft is already full" () {
        given: "A Draft that is already full"
        draft.setNumOfTeams(2L)
        CoachEntity existingCoach1 = TestData.Coach.createMember(2L, null, null, null);
        CoachEntity existingCoach2 = TestData.Coach.createMember(3L, null, null, null);
        List<CoachEntity> existingCoachList = Arrays.asList(existingCoach1, existingCoach2)
        draft.getCoaches().addAll(existingCoachList)

        and: "Mocked Methods"
        1 * modelMapper.map(coachDto, CoachEntity.class) >> coach
        1 * draftRepository.findById(coachDto.getDraftId()) >> Optional.of(draft)
        1 * userRepository.findByUsername(user.getUsername()) >> Optional.of(user)

        when: "A call to the createUser method is made"
        coachService.createCoach(coachDto)

        then: "An Exception should be thrown"
        ResponseStatusException exception = thrown(ResponseStatusException)
        exception.getStatus() == HttpStatus.BAD_REQUEST
        exception.getReason() == "The Draft is already full."
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

}
