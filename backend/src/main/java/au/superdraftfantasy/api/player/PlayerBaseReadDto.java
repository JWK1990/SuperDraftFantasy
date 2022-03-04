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
            ISeasonSummaryBase seasonSummaryBase,
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
        this.rank = playerBase.getRank();
        this.careerPrice = playerBase.getCareerPrice();
        this.careerActualValue = playerBase.getCareerActualValue();
        this.careerPriceOverUnder = playerBase.getCareerPriceOverUnder();
        this.careerPriceOverUnderPercentage = playerBase.getCareerPriceOverUnderPercentage();
        if(seasonSummaryBase != null) {
            this.games = seasonSummaryBase.getGames();
            this.average = seasonSummaryBase.getAverage();
            this.disposals = seasonSummaryBase.getDisposals();
            this.disposalEfficiency = seasonSummaryBase.getDisposalEfficiency();
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

    Integer rank;

    Integer careerPrice;

    Integer careerActualValue;

    Integer careerPriceOverUnder;

    Integer careerPriceOverUnderPercentage;

    String primaryPosition;

    String secondaryPosition;

    String fullPosition;

    Integer games;

    Integer average;

    Integer disposals;

    Integer disposalEfficiency;

    Boolean available;

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
