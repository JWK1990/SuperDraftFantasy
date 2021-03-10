package au.superdraftfantasy.api.player;

import au.superdraftfantasy.api.seasonSummary.ISeasonSummaryBase;
import au.superdraftfantasy.api.teamPlayerJoin.ITeamPlayerJoinBase;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class PlayerBaseReadDto {

    public PlayerBaseReadDto(
            IPlayerBase playerBase,
            ISeasonSummaryBase baseStats,
            ITeamPlayerJoinBase teamPlayerJoin
    ) {
        this.id = playerBase.getId();
        this.firstName = playerBase.getFirstName();
        this.lastName = playerBase.getLastName();
        this.fullName = playerBase.getFirstName() + " " + playerBase.getLastName();
        this.aflTeam = playerBase.getAflTeam();
        this.jumperNumber = playerBase.getJumperNumber();
        this.primaryPosition = playerBase.getPrimaryPosition();
        this.secondaryPosition = playerBase.getSecondaryPosition();
        this.fullPosition = getFullPosition(this.primaryPosition, this.secondaryPosition);
        if(baseStats != null) {
            this.games = baseStats.getGames();
            this.average = baseStats.getAverage();
            this.disposals = baseStats.getDisposals();
            this.disposalEfficiency = baseStats.getDisposalEfficiency();
            this.tackles = baseStats.getTackles();
        }
        if(teamPlayerJoin != null) {
            this.available = false;
            this.draftTeamId = teamPlayerJoin.getTeamId();
            this.draftTeamName = teamPlayerJoin.getTeamName();
            this.price = teamPlayerJoin.getPrice();
        } else {
            this.available = true;
        }
    }

    Long id;

    String firstName;

    String lastName;

    String fullName;

    String aflTeam;

    Integer jumperNumber;

    String primaryPosition;

    String secondaryPosition;

    String fullPosition;

    Integer games;

    double average;

    double disposals;

    double disposalEfficiency;

    double tackles;

    boolean available;

    Long draftTeamId;

    String draftTeamName;

    Integer price;

    private String getFullPosition(String primaryPosition, String secondaryPosition) {
        String fullPosition = primaryPosition;
        if(secondaryPosition != null) {
            fullPosition += "-" + secondaryPosition;
        }
        return fullPosition;
    }


}
