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
        this.age = playerBase.getAge();
        this.careerGames = playerBase.getCareerGames();
        this.aflTeam = playerBase.getAflTeam();
        this.jumperNumber = playerBase.getJumperNumber();
        this.primaryPosition = playerBase.getPrimaryPosition();
        this.secondaryPosition = playerBase.getSecondaryPosition();
        this.fullPosition = getFullPosition(this.primaryPosition, this.secondaryPosition);
        this.roosterRating = playerBase.getRoosterRating();
        this.moneyballPrice = playerBase.getMoneyballPrice();
        this.psAverage = playerBase.getPsAverage();
        this.price2021 = playerBase.getPrice2021();
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
            this.purchaseReviewRating = teamPlayerJoin.getPurchaseReviewRating();
        } else {
            this.available = true;
        }
    }

    Long id;

    String firstName;

    String lastName;

    String fullName;

    Integer age;

    Integer careerGames;

    String aflTeam;

    Integer jumperNumber;

    Integer roosterRating;

    Integer moneyballPrice;

    Integer psAverage;

    Integer price2021;

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

    String purchaseReviewRating;

    private String getFullPosition(String primaryPosition, String secondaryPosition) {
        String fullPosition = primaryPosition;
        if(secondaryPosition != null) {
            fullPosition += "-" + secondaryPosition;
        }
        return fullPosition;
    }


}
