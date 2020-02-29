package au.superdraftfantasy.api

import au.superdraftfantasy.api.coach.CoachDTO
import au.superdraftfantasy.api.coach.CoachEntity
import au.superdraftfantasy.api.coach.CoachReadDto
import au.superdraftfantasy.api.coach.CoachTypeEnum
import au.superdraftfantasy.api.draft.DraftReadDto
import au.superdraftfantasy.api.draft.DraftStatusEnum
import au.superdraftfantasy.api.draft.DraftWriteDto
import au.superdraftfantasy.api.draft.DraftEntity
import au.superdraftfantasy.api.player.AflTeamEnum
import au.superdraftfantasy.api.player.PlayerEntity
import au.superdraftfantasy.api.player.PlayerReadDto
import au.superdraftfantasy.api.role.RoleEntity
import au.superdraftfantasy.api.role.RoleTypeEnum
import au.superdraftfantasy.api.roster.RosterEntity
import au.superdraftfantasy.api.roster.RosterReadDto
import au.superdraftfantasy.api.team.TeamAddPlayerDto
import au.superdraftfantasy.api.team.TeamEntity
import au.superdraftfantasy.api.team.TeamReadDto
import au.superdraftfantasy.api.user.UserReadDto
import au.superdraftfantasy.api.user.UserWriteDto
import au.superdraftfantasy.api.user.UserEntity
import com.fasterxml.jackson.databind.ObjectMapper
import org.modelmapper.ModelMapper

import java.time.LocalDateTime

class TestData {

    static ModelMapper modelMapper = new ModelMapper()
    static ObjectMapper objectMapper = new ObjectMapper()

    static Object mapObjectToClass(Object object, Class objectClass) {
        return modelMapper.map(object, objectClass)
    }

    static String mapObjectToJson(Object object) {
        return objectMapper.writeValueAsString(object)
    }

    static class Draft {
        static DraftEntity create(Long id, String name, RosterEntity roster, List<CoachEntity> coaches) {
            return new DraftEntity(id, name, 10, roster, 300, 10, 10, coaches, DraftStatusEnum.IN_SETUP, LocalDateTime.now(), LocalDateTime.now());
        }
        static DraftWriteDto createDraftWriteDto(Long id, String name) {
            return new DraftWriteDto(id, name, 10, "TEST-ROSTER", 300, 10, 10);
        }

        static DraftReadDto createDraftReadDto(Long id, String name, RosterReadDto rosterReadDto, List<CoachEntity> coaches) {
            return new DraftReadDto(id, name, 10, rosterReadDto, DraftStatusEnum.IN_SETUP, 300, 10, 10, coaches, 1L)
        }
    }

    static class Roster {
        static RosterEntity create(Long id, String type, Long d, Long m, Long r, Long f, Long b) {
            return new RosterEntity(id, type, d, m, r, f, b, null)
        }

        static RosterReadDto createRosterReadDto(Long id, String type, Long d, Long m, Long r, Long f, Long b) {
            return new RosterReadDto(id, type, d, m, r, f, b)
        }
    }

    static class Coach {
        static CoachEntity createCommissioner(Long id, UserEntity user, DraftEntity draft, TeamEntity team) {
            return new CoachEntity(id, CoachTypeEnum.COMMISSIONER, user, draft, team, null, null)
        }
        static CoachEntity createMember(Long id, UserEntity user, DraftEntity draft, TeamEntity team) {
            return new CoachEntity(id, CoachTypeEnum.MEMBER, user, draft, team, null, null)
        }
        static CoachDTO createWriteDto(Long draftId) {
            return new CoachDTO(null, draftId)
        }
        static CoachReadDto createReadDto(Long id, UserReadDto userReadDto, TeamReadDto teamReadDto) {
            return new CoachReadDto(id, CoachTypeEnum.COMMISSIONER, userReadDto, teamReadDto)
        }
    }

    static class Team {
        static TeamEntity create(Long id, String name, CoachEntity coach) {
            return new TeamEntity(id, name, 300L, coach, new ArrayList<PlayerEntity>(), LocalDateTime.now(), LocalDateTime.now())
        }
        static TeamAddPlayerDto createTeamAddPlayerDto(Long salePrice) {
            return new TeamAddPlayerDto(salePrice)
        }
        static TeamReadDto createReadDto(Long id, String name) {
            return new TeamReadDto(id, name, 300L, new ArrayList<PlayerReadDto>())
        }
    }

    static class Player {
        static PlayerEntity create(Long id) {
            return new PlayerEntity(id, "Cyril", "Rioli", AflTeamEnum.HAWTHORN_HAWKS, 100, null, null)
        }
    }

    static class User {
        static UserEntity create(Long id, String username) {
            return new UserEntity(id, username, "First", "Last", "test.user@gmail.com","password", LocalDateTime.now(), LocalDateTime.now(), null)
        }
        static UserWriteDto createWriteDto(Long id, String username) {
            return new UserWriteDto(id, username, "First", "Last", "test.user@gmail.com", "password")
        }
        static UserReadDto createReadDto(Long id, String username) {
            return new UserReadDto(id, username, "First", "Last", "test.user@gmail.com", null)
        }
    }

    static class Role {
        static RoleEntity createAdminRole(Long id) {
            return new RoleEntity(id, RoleTypeEnum.ADMIN, null, null)
        }
        static RoleEntity createUserRole(Long id) {
            return new RoleEntity(id, RoleTypeEnum.USER, null, null)
        }
    }

}
