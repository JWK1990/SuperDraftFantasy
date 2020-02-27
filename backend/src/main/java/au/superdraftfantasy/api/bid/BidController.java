package au.superdraftfantasy.api.bid;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class BidController {

    @MessageMapping("/bid")
    @SendTo("/bidding/bids")
    public BidEntity send(BidEntity bid) throws Exception {
        return new BidEntity(bid.getBidder(), bid.getBid());
    }

}
