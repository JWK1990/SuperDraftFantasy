package au.superdraftfantasy.api

import au.superdraftfantasy.api.user.UserDTO
import au.superdraftfantasy.api.user.UserEntity
import com.fasterxml.jackson.databind.ObjectMapper
import org.modelmapper.ModelMapper

class TestData {

    static ModelMapper modelMapper = new ModelMapper()
    static ObjectMapper objectMapper = new ObjectMapper()

    static class User {

        static UserEntity create(Long id, String username) {
            return new UserEntity(id, username, "First", "Last", "test.user@gmail.com","password", null, null, null)
        }

        static UserDTO createDto(Long id, String username) {
            return new UserDTO(id, username, "First", "Last", "test.user@gmail.com", "password")
        }
    }

    static Object mapObjectToClass(Object object, Class objectClass) {
        return modelMapper.map(object, objectClass)
    }

    static String mapObjectToJson(Object object) {
        return objectMapper.writeValueAsString(object)
    }

}
