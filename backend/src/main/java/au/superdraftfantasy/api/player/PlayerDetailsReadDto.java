package au.superdraftfantasy.api.player;

import au.superdraftfantasy.api.seasonSummary.ISeasonSummaryDetails;
import lombok.Data;
import lombok.EqualsAndHashCode;


@EqualsAndHashCode(callSuper = true)
@Data
public class PlayerDetailsReadDto extends PlayerBaseReadDto {

    public PlayerDetailsReadDto(
            IPlayerDetails playerDetails,
            int year,
            Long draftId
    ) {
        super(
                playerDetails,
                playerDetails.getSeasonSummary(year),
                playerDetails.getTeamPlayerJoin(draftId)
        );

        ISeasonSummaryDetails seasonSummaryDetails = playerDetails.getSeasonSummary(year);

        if(seasonSummaryDetails != null) {
            this.goals = seasonSummaryDetails.getGoals();
            this.hitouts = seasonSummaryDetails.getHitouts();
            this.insideFiftys = seasonSummaryDetails.getInsideFiftys();
            this.clearances = seasonSummaryDetails.getClearances();
            this.clangers = seasonSummaryDetails.getClangers();
            this.reboundFiftys = seasonSummaryDetails.getReboundFiftys();
            this.centerClearances = seasonSummaryDetails.getCenterClearances();
            this.turnovers = seasonSummaryDetails.getTurnovers();
            this.intercepts = seasonSummaryDetails.getIntercepts();
            this.timeOnGround = seasonSummaryDetails.getTimeOnGround();
        }
    }

    Double goals;
    Integer hitouts;
    Integer insideFiftys;
    Integer clearances;
    Integer clangers;
    Integer reboundFiftys;
    Double centerClearances;
    Integer turnovers;
    Integer intercepts;
    Integer timeOnGround;
}
