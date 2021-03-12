package au.superdraftfantasy.api.configuration.websockets;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        config.enableSimpleBroker("/draft/");
        config.setApplicationDestinationPrefixes("/app");
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/websocket")
                .setAllowedOrigins(
                        "http://localhost:3000",
                        "http://localhost:8080",
                        "http://localhost:80",
                        "http://localhost",
                        "http://superdraftfantasy.azurewebsites.net",
                        "https://superdraftfantasy.azurewebsites.net",
                        "http://superdraftfantasy.com",
                        "https://superdraftfantasy.com"
                )
                .withSockJS();
    }

}
