package au.superdraftfantasy.api.round;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RoundReadDto {

    private Long teamId;

    private Date endTime;

}
