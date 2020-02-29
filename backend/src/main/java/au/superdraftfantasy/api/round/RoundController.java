package au.superdraftfantasy.api.round;

import java.util.Date;

import org.modelmapper.ModelMapper;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class RoundController {

    private final ModelMapper modelMapper;

    public RoundController(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    @MessageMapping("/startNextRound")
    @SendTo("/bidding/rounds")
    public RoundReadDto startNextRound(RoundWriteDto roundWriteDto) throws Exception {
        Date now = new Date();
        Date endTime = new Date(now.getTime() + roundWriteDto.getAdditionalTime() * 1000);
        return new RoundReadDto(1L, endTime);

    }

}
