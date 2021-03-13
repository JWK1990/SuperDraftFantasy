package au.superdraftfantasy.api.seasonSummary;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/seasonSummary")
public class SeasonSummaryController {

    private final SeasonSummaryService seasonSummaryService;

    public SeasonSummaryController(SeasonSummaryService seasonSummaryService) {
        this.seasonSummaryService = seasonSummaryService;
    }

    @GetMapping(name = "getSeasonSummaryByPlayerId", path = "/{playerId}/details")
    public ISeasonSummaryDetails getSeasonSummaryByPlayerId(
            @PathVariable Long playerId,
            @RequestParam(required = false) String year
    ) {
        return seasonSummaryService.getSeasonSummaryByPlayerIdAndYear(playerId, Integer.decode(year));
    }

    @GetMapping(name = "getAllSeasonSummariesByPlayerId", path = "/{playerId}/details/all")
    public List<ISeasonSummaryDetails> getSeasonSummariesByPlayer(
            @PathVariable Long playerId
    ) {
        return seasonSummaryService.getSeasonSummariesByPlayer(playerId);
    }

}
