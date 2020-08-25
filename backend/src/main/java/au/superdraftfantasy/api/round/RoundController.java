package au.superdraftfantasy.api.round;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import java.util.Date;

@Controller
public class RoundController {

    @MessageMapping("/startNextRound")
    @SendTo("/draft/rounds")
    public RoundReadDto startNextRound(RoundWriteDto roundWriteDto) {
        Date now = new Date();
        Date endTime = new Date(now.getTime() + roundWriteDto.getAdditionalTime() * 1000);
        return new RoundReadDto(1L, endTime);

    }

}
