package au.superdraftfantasy.api.player;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class PlayerBaseReadDto {

    Long id;

    String firstName;

    String lastName;

    String aflTeam;

    Integer jumperNumber;

    String primaryPosition;

    String secondaryPosition;

    Integer games;

    double average;

    double disposals;

    double disposalEfficiency;

    double tackles;

}
