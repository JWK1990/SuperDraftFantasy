package au.superdraftfantasy.api.player;

import au.superdraftfantasy.api.seasonSummary.ISeasonSummaryDetails;
import org.springframework.beans.factory.annotation.Value;

public interface IPlayerDetails extends IPlayerBase {

    @Value("#{@playerDataFetcher.getSeasonSummary(target, args[0])}")
    ISeasonSummaryDetails getSeasonSummary(int year);

}

