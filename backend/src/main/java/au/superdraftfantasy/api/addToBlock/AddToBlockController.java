package au.superdraftfantasy.api.addToBlock;

import org.modelmapper.ModelMapper;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import java.util.Date;

@Controller
public class AddToBlockController {

    private final ModelMapper modelMapper;

    public AddToBlockController(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    @MessageMapping("/addToBlock")
    @SendTo("/bidding/addsToBlock")
    public AddToBlockReadDto addToBlock(AddToBlockWriteDto addToBlockWriteDto) throws Exception {
        AddToBlockReadDto addToBlockReadDto = modelMapper.map(addToBlockWriteDto, AddToBlockReadDto.class);
        Date now = new Date();
        Date endTime = new Date(now.getTime() + addToBlockWriteDto.getAdditionalTime() * 1000);
        addToBlockReadDto.setEndTime(endTime);
        return addToBlockReadDto;
    }

}
