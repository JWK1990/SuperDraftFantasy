package au.superdraftfantasy.api

import au.superdraftfantasy.api.configuration.security.JWTUtils
import org.spockframework.spring.SpringBean
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.web.servlet.MockMvc
import org.springframework.web.context.WebApplicationContext
import spock.lang.Specification

import static au.superdraftfantasy.api.configuration.security.SecurityConstants.DEFAULT_ISSUER
import static au.superdraftfantasy.api.configuration.security.SecurityConstants.EXPIRATION_TIME
import static au.superdraftfantasy.api.configuration.security.SecurityConstants.TOKEN_PREFIX

@SpringBootTest
@AutoConfigureMockMvc
class RestSpecification extends Specification {

    @Autowired
    protected MockMvc mockMvc

    protected mockJwtToken = TOKEN_PREFIX + JWTUtils.createJWT(UUID.randomUUID().toString(), DEFAULT_ISSUER, "username", EXPIRATION_TIME)

}
