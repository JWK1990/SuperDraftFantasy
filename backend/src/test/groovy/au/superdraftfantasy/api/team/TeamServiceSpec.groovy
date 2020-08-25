package au.superdraftfantasy.api.team

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

class TeamServiceSpec extends Specification {

    private ModelMapper modelMapper = Mock(ModelMapper)
    private DraftRepository draftRepository = Mock(DraftRepository)
    private UserRepository userRepository = Mock(UserRepository)
    private TeamRepository coachRepository = Mock(TeamRepository)

    @Subject
        TeamService coachService = new TeamService(modelMapper, draftRepository, userRepository, coachRepository, )

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
    DraftEntity draft = TestData.Draft.create(draftID, "Test Draft", roster, new ArrayList<TeamEntity>())

    TeamWriteDto teamDto = TestData.Team.createWriteDto(draftID)
    TeamEntity team = TestData.mapObjectToClass(teamDto, TeamEntity.class)

    UserEntity user = TestData.User.create(1L, "testuser")

    def setup() {
        mockAuthenticatedUser(user)
    }

    def "createCoach should create a valid Coach" () {
        given: "Mocked Methods (for valid Coach)"
        1 * modelMapper.map(teamDto, TeamEntity.class) >> team
        1 * draftRepository.findById(teamDto.getDraftId()) >> Optional.of(draft)
        1 * userRepository.findByUsername(user.getUsername()) >> Optional.of(user)

        when: "A call to the createCoach method is made"
        Long response = coachService.createTeam(teamDto)

        then: "The Coach should be saved with the correct details and the Coach ID returned"
        1 * coachRepository.save(team) >> team
        team.draft == draft
        team.type == TeamTypeEnum.MEMBER
        team.user == user
        team.team.budget == draft.getBudget()
        team.team.name == user.getUsername() + "'s Team"
        response == team.getId()
    }

    def "createCoach should throw an Exception if the Draft doesn't exist" () {
        given: "Mocked Methods (for an invalid Draft)"
        1 * modelMapper.map(teamDto, TeamEntity.class) >> team
        1 * draftRepository.findById(teamDto.getDraftId()) >> Optional.empty()
        0 * userRepository.findByUsername(user.getUsername()) >> Optional.of(user)

        when: "A call to the createUser method is made"
        coachService.createTeam(teamDto)

        then: "An Exception should be thrown"
        ResponseStatusException exception = thrown(ResponseStatusException)
        exception.getStatus() == HttpStatus.NOT_FOUND
        exception.getReason() == "Draft with ID '" + teamDto.getDraftId() + "'Not Found."
    }

    def "createCoach should throw an Exception if the User doesn't exist" () {
        given: "Mocked Methods (for an invalid User)"
        1 * modelMapper.map(teamDto, TeamEntity.class) >> team
        1 * draftRepository.findById(teamDto.getDraftId()) >> Optional.of(draft)
        1 * userRepository.findByUsername(user.getUsername()) >> Optional.empty()

        when: "A call to the createUser method is made"
        coachService.createTeam(teamDto)

        then: "An Exception should be thrown"
        UsernameNotFoundException exception = thrown(UsernameNotFoundException)
        exception.getMessage() == "User With Username '" + user.getUsername() + "' Not Found."
    }

    def "createCoach should throw an Exception if the Draft is already full" () {
        given: "A Draft that is already full"
        draft.setNumOfTeams(2L)
        TeamEntity existingCoach1 = TestData.Team.createMember(2L, null, null, null);
        TeamEntity existingCoach2 = TestData.Team.createMember(3L, null, null, null);
        List<TeamEntity> existingCoachList = Arrays.asList(existingCoach1, existingCoach2)
        draft.getTeams().addAll(existingCoachList)

        and: "Mocked Methods"
        1 * modelMapper.map(teamDto, TeamEntity.class) >> team
        1 * draftRepository.findById(teamDto.getDraftId()) >> Optional.of(draft)
        1 * userRepository.findByUsername(user.getUsername()) >> Optional.of(user)

        when: "A call to the createUser method is made"
        coachService.createTeam(teamDto)

        then: "An Exception should be thrown"
        ResponseStatusException exception = thrown(ResponseStatusException)
        exception.getStatus() == HttpStatus.BAD_REQUEST
        exception.getReason() == "The Draft is already full."
    }

    def "createCoach should throw an Exception if the Current User has already joined the Draft" () {
        given: "A Draft where the Current User has already joined"
        draft.getTeams().add(team)

        and: "Mocked Methods"
        1 * modelMapper.map(teamDto, TeamEntity.class) >> team
        1 * draftRepository.findById(teamDto.getDraftId()) >> Optional.of(draft)
        1 * userRepository.findByUsername(user.getUsername()) >> Optional.of(user)

        when: "A call to the createUser method is made"
        coachService.createTeam(teamDto)

        then: "An Exception should be thrown"
        ResponseStatusException exception = thrown(ResponseStatusException)
        exception.getStatus() == HttpStatus.BAD_REQUEST
        exception.getReason() == "User with ID '" + user.getId() + "'Already Exists In Draft with ID '" + draftID + "'."
    }

}

/*
    private ModelMapper modelMapper = Mock(ModelMapper)
    private PlayerRepository playerRepository = Mock(PlayerRepository)
    private TeamRepository teamRepository = Mock(TeamRepository)

    @Subject
        TeamService teamService = new TeamService(modelMapper, teamRepository, playerRepository)

    def createTeamWithCoachAndDraft(Long id, DraftEntity draft) {
        UserEntity user = TestData.User.create(id, "user" + id)
        CoachEntity coach = TestData.Coach.createMember(id, user, draft, null)
        TeamEntity team = TestData.Team.create(id, "Team " + id, coach)
        coach.setTeam(team)
        draft.getCoaches().add(coach)
        return team;
    }

    RosterEntity roster = TestData.Roster.create(1L, "11111", 1, 1, 1, 1, 1)
    DraftEntity draft = TestData.Draft.create(1L, "Test Draft", roster, new ArrayList<CoachEntity>())

    Long teamID = 1L
    TeamEntity team = createTeamWithCoachAndDraft(teamID, draft)
    TeamReadDto teamReadDto = TestData.mapObjectToClass(team, TeamReadDto.class)

    Long playerID = 2L
    PlayerEntity player = TestData.Player.create(playerID)
    Long salePrice = 1L

    def "addPlayer should add a valid Player to a valid Team" () {
        given: "Mocked Methods (for valid Player and Team)"
        1 * teamRepository.findById(teamID) >> Optional.of(team)
        1 * playerRepository.findById(playerID) >> Optional.of(player)
        1 * modelMapper.map(team, TeamReadDto.class) >> teamReadDto

        when: "A call to the addPlayer method is made"
        TeamReadDto response = teamService.addPlayer(teamID, playerID, salePrice)

        then: "The Team should be saved with the Player added and the TeamReadDto returned"
        1 * teamRepository.save(team) >> team
        Set<PlayerEntity> playerList = team.getPlayers()
        playerList.size() == 1L
        playerList.first() == player
        response == teamReadDto
    }

    def "addPlayer should throw an Exception if the Team doesn't exist" () {
        given: "Mocked Methods (for an invalid Team)"
        1 * teamRepository.findById(teamID) >> Optional.empty()
        0 * playerRepository.findById(playerID)

        when: "A call to the createUser method is made"
        teamService.addPlayer(teamID, playerID, salePrice)

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
        teamService.addPlayer(teamID, playerID, salePrice)

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
        teamService.addPlayer(teamID, playerID, salePrice)

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
        teamService.addPlayer(teamID, playerID, salePrice)

        then: "An Exception should be thrown"
        ResponseStatusException exception = thrown(ResponseStatusException)
        exception.getStatus() == HttpStatus.NOT_FOUND
        exception.getReason() == "Player with ID '" + playerID + "' Not Found."
    }
 */
