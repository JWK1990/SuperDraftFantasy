package au.superdraftfantasy.api.draft

import au.superdraftfantasy.api.TestData
import au.superdraftfantasy.api.coach.CoachTypeEnum
import au.superdraftfantasy.api.user.UserEntity
import au.superdraftfantasy.api.user.UserRepository
import org.springframework.http.HttpStatus
import org.springframework.security.core.Authentication
import org.springframework.security.core.context.SecurityContext
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.web.server.ResponseStatusException
import spock.lang.Specification
import spock.lang.Subject

class DraftServiceSpec extends Specification {

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
        DraftService draftService = new DraftService(draftRepository, userRepository)

    def "createDraft should save a valid Draft with the current User as Commissioner" () {
        given: "A DraftEntity"
        DraftEntity draft = TestData.Draft.create(1L, "Test Draft 1")

        and: "A current User"
        UserEntity user = TestData.User.create(1L, "username")
        mockAuthenticatedUser(user)

        and: "Mocked Methods (for valid UserEntity)"
        1 * userRepository.findByUsername(user.getUsername()) >> Optional.of(user)

        when: "A call to the createUser method is made"
        draftService.createDraft(draft)

        then: "The Draft should be saved with the current User as Commissioner"
        1 * draftRepository.save(draft) >> draft
        draft.getCoaches().size() == 1L
        draft.getCoaches().first().getUser() == user
        draft.getCoaches().first().getType() == CoachTypeEnum.COMMISSIONER
    }

    def "createDraft should throw an Exception if the Draft Name is already taken" () {
        given: "A DraftEntity"
        DraftEntity draft = TestData.Draft.create(1L, "Test Draft 1")

        and: "Mocked Methods (for invalid Draft Name)"
        1 * draftRepository.existsByName(draft.getName()) >> true

        when: "A call to the createUser method is made"
        draftService.createDraft(draft)

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
        draftService.createDraft(draft)

        then: "An Exception should be thrown"
        UsernameNotFoundException exception = thrown(UsernameNotFoundException)
        exception.getMessage() == "User With Username '" + user.getUsername() + "' Not Found."
    }

}
