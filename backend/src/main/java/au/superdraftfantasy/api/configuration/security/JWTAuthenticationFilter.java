package au.superdraftfantasy.api.configuration.security;

import static au.superdraftfantasy.api.configuration.security.SecurityConstants.DEFAULT_ISSUER;
import static au.superdraftfantasy.api.configuration.security.SecurityConstants.EXPIRATION_TIME;
import static au.superdraftfantasy.api.configuration.security.SecurityConstants.HEADER_STRING;
import static au.superdraftfantasy.api.configuration.security.SecurityConstants.TOKEN_PREFIX;

import java.io.IOException;
import java.util.ArrayList;
import java.util.UUID;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import au.superdraftfantasy.api.user.UserEntity;


public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private AuthenticationManager authenticationManager;

    public JWTAuthenticationFilter(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    // TODO - Add tests for JWT Security.
    // The below handles requests to /login as part of Spring Security (see https://auth0.com/blog/implementing-jwt-authentication-on-spring-boot/).
    @Override
    public Authentication attemptAuthentication(HttpServletRequest req,
                                                HttpServletResponse res) throws AuthenticationException {
        try {
            UserEntity creds = new ObjectMapper()
                    .readValue(req.getInputStream(), UserEntity.class);

            return authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            creds.getUsername(),
                            creds.getPassword(),
                            new ArrayList<>())
            );
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest req,
                                            HttpServletResponse res,
                                            FilterChain chain,
                                            Authentication auth) throws IOException, ServletException {

        String token = JWTUtils
                .createJWT(UUID.randomUUID().toString(), // TODO check the issuer
                        DEFAULT_ISSUER,
                        ((User) auth.getPrincipal()).getUsername(),
                        EXPIRATION_TIME);
        res.addHeader(HEADER_STRING, TOKEN_PREFIX + token);
    }
}