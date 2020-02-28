package au.superdraftfantasy.api.bid;

import org.modelmapper.ModelMapper;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import java.util.Date;

@Controller
public class BidController {

    private final ModelMapper modelMapper;

    public BidController(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    @MessageMapping("/bid")
    @SendTo("/bidding/bids")
    public BidReadDto bid(BidWriteDto bidWriteDto) throws Exception {
        BidReadDto bidReadDto = modelMapper.map(bidWriteDto, BidReadDto.class);
        Date now = new Date();
        Date endTime = new Date(now.getTime() + bidWriteDto.getAdditionalTime() * 1000);
        bidReadDto.setEndTime(endTime);
        return bidReadDto;
    }

}
