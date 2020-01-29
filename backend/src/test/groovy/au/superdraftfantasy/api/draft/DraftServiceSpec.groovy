package au.superdraftfantasy.api.draft

import au.superdraftfantasy.api.TestData
import au.superdraftfantasy.api.coach.CoachEntity
import au.superdraftfantasy.api.coach.CoachTypeEnum
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

class DraftServiceSpec extends Specification {

    private ModelMapper modelMapper = Mock(ModelMapper)
    private DraftRepository draftRepository = Mock(DraftRepository)
    private UserRepository userRepository = Mock(UserRepository)

    private void mockAuthenticatedUser(UserEntity user) {
        Authentication authentication = Mock(Authentication.class);
        SecurityContext securityContext = Mock(SecurityContext.class);
        securityContext.getAuthentication() >> authentication;
        SecurityContextHolder.setContext(securityContext);
        authentication.getPrincipal() >> user
        authentication.getName() >> user.getUsername()
    }

    @Subject
        DraftService draftService = new DraftService(modelMapper, draftRepository, userRepository)

    Long draftID = 1L
    DraftWriteDto draftDto = TestData.Draft.createDto(draftID, "Test Draft 1")
    DraftEntity draft = TestData.mapObjectToClass(draftDto, DraftEntity.class)
    UserEntity user = TestData.User.create(1L, "username")

    def setup() {
        mockAuthenticatedUser(user)
    }

    def "createDraft should create a valid Draft with the current User as Commissioner" () {
        given: "Mocked Methods (for a valid Draft and User)"
        1 * modelMapper.map(draftDto, DraftEntity.class) >> draft
        1 * draftRepository.existsByName(draft.getName()) >> false
        1 * userRepository.findByUsername(user.getUsername()) >> Optional.of(user)

        when: "A call to the createDraft method is made"
        draftService.createDraft(draftDto)

        then: "The Draft should be saved with the current User as Commissioner"
        1 * draftRepository.save(draft) >> draft
        Set<CoachEntity> coaches = draft.getCoaches()
        coaches.size() == 1L
        coaches.first().user == user
        coaches.first().typeId == CoachTypeEnum.COMMISSIONER
    }

    def "createDraft should throw an Exception if the Draft Name is already taken" () {
        given: "Mocked Methods (for invalid Draft Name)"
        1 * modelMapper.map(draftDto, DraftEntity.class) >> draft
        1 * draftRepository.existsByName(draft.getName()) >> true
        0 * userRepository.findByUsername(user.getUsername()) >> Optional.of(user)

        when: "A call to the createUser method is made"
        draftService.createDraft(draftDto)

        then: "An Exception should be thrown"
        ResponseStatusException exception = thrown(ResponseStatusException)
        exception.getStatus() == HttpStatus.CONFLICT
        exception.getReason() == "A draft with the name '" + draft.getName() + "' already exists."
    }

    def "createDraft should throw an Exception if the current User is not matched in the DB" () {
        given: "Mocked Methods (for invalid User)"
        1 * modelMapper.map(draftDto, DraftEntity.class) >> draft
        1 * draftRepository.existsByName(draft.getName()) >> false
        1 * userRepository.findByUsername(user.getUsername()) >> Optional.empty()

        when: "A call to the createUser method is made"
        draftService.createDraft(draftDto)

        then: "An Exception should be thrown"
        UsernameNotFoundException exception = thrown(UsernameNotFoundException)
        exception.getMessage() == "User With Username '" + user.getUsername() + "' Not Found."
    }

}
