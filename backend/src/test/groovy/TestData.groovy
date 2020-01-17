package au.superdraftfantasy.api

import au.superdraftfantasy.api.coach.CoachEntity
import au.superdraftfantasy.api.draft.DraftDTO
import au.superdraftfantasy.api.draft.DraftEntity
import au.superdraftfantasy.api.player.PlayerEntity
import au.superdraftfantasy.api.role.RoleEntity
import au.superdraftfantasy.api.role.RoleTypeEnum
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
        static DraftEntity create(Long id, String name) {
            return new DraftEntity(id, name, 10, "DEFAULT", 300, new HashSet<CoachEntity>(), LocalDateTime.now(), LocalDateTime.now());
        }
        static DraftDTO createDto(Long id, String name) {
            return new DraftDTO(id, name, 10, "DEFAULT", 300);
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

    static class User {
        static UserEntity create(Long id, String username) {
            return new UserEntity(id, username, "First", "Last", "test.user@gmail.com","password", LocalDateTime.now(), LocalDateTime.now(), null)
        }
        static UserDTO createDto(Long id, String username) {
            return new UserDTO(id, username, "First", "Last", "test.user@gmail.com", "password")
        }
    }

    static class Role {
        static RoleEntity createAdminRole() {
            return new RoleEntity(1L, RoleTypeEnum.ADMIN, null, null)
        }
        static RoleEntity createUserRole() {
            return new RoleEntity(2L, RoleTypeEnum.USER, null, null)
        }
    }

}
