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
    DraftWriteDto draftWriteDto = TestData.Draft.createDraftWriteDto(draftID, "Test Draft 1")
    DraftEntity draftEntity = TestData.mapObjectToClass(draftWriteDto, DraftEntity.class)
    DraftReadDto draftReadDto = TestData.mapObjectToClass(draftEntity, DraftReadDto.class)
    UserEntity user = TestData.User.create(1L, "username")

    def setup() {
        mockAuthenticatedUser(user)
    }

    def "findDraft should return a DraftReadDto if given a valid draftID" () {
        given: "Mocked Methods (for a valid draftID)"
        1 * draftRepository.findById(draftID) >> Optional.of(draftEntity)
        1 * modelMapper.map(draftEntity, DraftReadDto.class) >> draftReadDto

        when: "A call to the createDraft method is made"
        DraftReadDto response = draftService.readDraft(draftID)

        then: "The correct DraftReadDto should be returned"
        response == draftReadDto
    }

    def "findDraft should throw an exception if the draftID cannot be found" () {
        given: "Mocked Methods (for an invalid draftID)"
        1 * draftRepository.findById(draftID) >> Optional.empty()
        0 * modelMapper.map(draftEntity, DraftReadDto.class)

        when: "A call to the createDraft method is made"
        draftService.readDraft(draftID)

        then: "An Exception should be thrown"
        ResponseStatusException exception = thrown(ResponseStatusException)
        exception.getStatus() == HttpStatus.NOT_FOUND
        exception.getReason() == "Draft with ID '" + draftID + "' not found."
    }


    def "createDraft should create a valid Draft with the current User as Commissioner" () {
        given: "Mocked Methods (for a valid Draft and User)"
        1 * modelMapper.map(draftWriteDto, DraftEntity.class) >> draftEntity
        1 * draftRepository.existsByName(draftEntity.getName()) >> false
        1 * userRepository.findByUsername(user.getUsername()) >> Optional.of(user)

        when: "A call to the createDraft method is made"
        Long response = draftService.createDraft(draftWriteDto)

        then: "The Draft should be saved with the current User as Commissioner and the Draft ID returned"
        1 * draftRepository.save(draftEntity) >> draftEntity
        Set<CoachEntity> coaches = draftEntity.getCoaches()
        coaches.size() == 1L
        coaches.first().user == user
        coaches.first().type == CoachTypeEnum.COMMISSIONER
        response == draftEntity.getId()
    }

    def "createDraft should throw an Exception if the Draft Name is already taken" () {
        given: "Mocked Methods (for invalid Draft Name)"
        1 * modelMapper.map(draftWriteDto, DraftEntity.class) >> draftEntity
        1 * draftRepository.existsByName(draftEntity.getName()) >> true
        0 * userRepository.findByUsername(user.getUsername())

        when: "A call to the createUser method is made"
        draftService.createDraft(draftWriteDto)

        then: "An Exception should be thrown"
        ResponseStatusException exception = thrown(ResponseStatusException)
        exception.getStatus() == HttpStatus.CONFLICT
        exception.getReason() == "A draft with the name '" + draftEntity.getName() + "' already exists."
    }

    def "createDraft should throw an Exception if the current User is not matched in the DB" () {
        given: "Mocked Methods (for invalid User)"
        1 * modelMapper.map(draftWriteDto, DraftEntity.class) >> draftEntity
        1 * draftRepository.existsByName(draftEntity.getName()) >> false
        1 * userRepository.findByUsername(user.getUsername()) >> Optional.empty()

        when: "A call to the createUser method is made"
        draftService.createDraft(draftWriteDto)

        then: "An Exception should be thrown"
        UsernameNotFoundException exception = thrown(UsernameNotFoundException)
        exception.getMessage() == "User With Username '" + user.getUsername() + "' Not Found."
    }

}
