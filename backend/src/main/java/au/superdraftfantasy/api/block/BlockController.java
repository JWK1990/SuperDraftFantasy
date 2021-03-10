package au.superdraftfantasy.api.block;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class BlockController {

    private final BlockService blockService;

    public BlockController(
            BlockService blockService
    ) {
        this.blockService = blockService;
    }

    @MessageMapping("/addToBlock")
    @SendTo("/draft/addToBlocks")
    public BlockDto addToBlock(BlockDto blockDto) {
        return blockService.processBlockEvent(blockDto, true);
    }

    @MessageMapping("/bid")
    @SendTo("/draft/bids")
    public BlockDto bid(BlockDto blockDto) {
        return blockService.processBlockEvent(blockDto, false);
    }

}
