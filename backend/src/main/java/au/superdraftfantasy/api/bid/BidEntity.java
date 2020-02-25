package au.superdraftfantasy.api.bid;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BidEntity {

    private String bidder;

    private Long bid;

}
