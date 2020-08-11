package au.superdraftfantasy.api.configuration.security;

import au.superdraftfantasy.api.user.UserEntity;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.modelmapper.ModelMapper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.UUID;

import static au.superdraftfantasy.api.configuration.security.SecurityConstants.*;


public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private AuthenticationManager authenticationManager;
    private final ObjectMapper objectMapper;
    private final ModelMapper modelMapper;


    public JWTAuthenticationFilter(
            AuthenticationManager authenticationManager,
            ObjectMapper objectMapper,
            ModelMapper modelMapper
    ) {
        this.authenticationManager = authenticationManager;
        this.objectMapper = objectMapper;
        this.modelMapper = modelMapper;
    }

    // TODO - Add tests for JWT Security.
    // The below handles requests to /login as part of Spring Security (see https://auth0.com/blog/implementing-jwt-authentication-on-spring-boot/).
    @Override
    public Authentication attemptAuthentication(HttpServletRequest req,
                                                HttpServletResponse res) throws AuthenticationException {
        try {
            UserEntity creds = objectMapper
                    .readValue(req.getInputStream(), UserEntity.class);

            return authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            creds.getUsername(),
                            creds.getPassword(),
                            new ArrayList<>()
                    )
            );
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest req,
                                            HttpServletResponse res,
                                            FilterChain chain,
                                            Authentication auth) throws IOException {

        AuthenticatedUserReadDto authenticatedUserReadDto = modelMapper.map(auth.getPrincipal(), AuthenticatedUserReadDto.class);
        String authenticatedUserString = objectMapper.writeValueAsString(authenticatedUserReadDto);

        PrintWriter printWriter = res.getWriter();

        String token = JWTUtils.createJWT(
                UUID.randomUUID().toString(), // TODO check the issuer
                DEFAULT_ISSUER,
                ((User) auth.getPrincipal()).getUsername(),
                EXPIRATION_TIME
        );

        res.addHeader(HEADER_STRING, TOKEN_PREFIX + token);
        res.setContentType("application/json");
        res.setCharacterEncoding("UTF-8");
        printWriter.print(authenticatedUserString);
        printWriter.flush();
    }
}
