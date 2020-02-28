package au.superdraftfantasy.api.round;

import au.superdraftfantasy.api.bid.BidReadDto;
import au.superdraftfantasy.api.bid.BidWriteDto;
import org.modelmapper.ModelMapper;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import java.util.Date;

@Controller
public class RoundController {

    private final ModelMapper modelMapper;

    public RoundController(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    @MessageMapping("/startNextRound")
    @SendTo("/bidding/rounds")
    public RoundReadDto startNextRound(RoundWriteDto roundWriteDto) throws Exception {
        // TODO: Calculate current team on the block.
        // TODO: Calculate top available player for current team.
        RoundReadDto roundReadDto = new RoundReadDto(1L, 1L, 1L, null);
        Date now = new Date();
        Date endTime = new Date(now.getTime() + roundWriteDto.getAdditionalTime() * 1000);
        roundReadDto.setEndTime(endTime);
        return roundReadDto;
    }

}
