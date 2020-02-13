package au.superdraftfantasy.api

import au.superdraftfantasy.api.coach.CoachDTO
import au.superdraftfantasy.api.coach.CoachEntity
import au.superdraftfantasy.api.coach.CoachTypeEnum
import au.superdraftfantasy.api.draft.DraftReadDto
import au.superdraftfantasy.api.draft.DraftStatusEnum
import au.superdraftfantasy.api.draft.DraftWriteDto
import au.superdraftfantasy.api.draft.DraftEntity
import au.superdraftfantasy.api.player.AflTeamEnum
import au.superdraftfantasy.api.player.PlayerEntity
import au.superdraftfantasy.api.role.RoleEntity
import au.superdraftfantasy.api.role.RoleTypeEnum
import au.superdraftfantasy.api.roster.RosterEntity
import au.superdraftfantasy.api.roster.RosterReadDto
import au.superdraftfantasy.api.team.TeamDTO
import au.superdraftfantasy.api.team.TeamEntity
import au.superdraftfantasy.api.user.UserDTO
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
        static DraftEntity create(Long id, String name, RosterEntity roster) {
            return new DraftEntity(id, name, 10, roster, 300, new HashSet<CoachEntity>(), DraftStatusEnum.IN_SETUP, LocalDateTime.now(), LocalDateTime.now());
        }
        static DraftWriteDto createDraftWriteDto(Long id, String name) {
            return new DraftWriteDto(id, name, 10, "TEST-ROSTER", 300);
        }

        static DraftReadDto createDraftReadDto(Long id, String name, RosterReadDto rosterReadDto) {
            return new DraftReadDto(id, name, 10, rosterReadDto, DraftStatusEnum.IN_SETUP, 300, null)
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
        static CoachDTO createDTO(Long draftId) {
            return new CoachDTO(null, draftId)
        }
    }

    static class Team {
        static TeamEntity create(Long id, String name, CoachEntity coach) {
            return new TeamEntity(id, name, 300, coach, new HashSet<PlayerEntity>(), LocalDateTime.now(), LocalDateTime.now())
        }
        static TeamDTO createDto(Long id, String name, Long draftId) {
            return new TeamDTO(id, name, draftId)
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
        static UserDTO createDto(Long id, String username) {
            return new UserDTO(id, username, "First", "Last", "test.user@gmail.com", "password")
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
