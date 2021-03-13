package au.superdraftfantasy.api.seasonSummary;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/seasonSummary")
public class SeasonSummaryController {

    private final SeasonSummaryService seasonSummaryService;

    public SeasonSummaryController(SeasonSummaryService seasonSummaryService) {
        this.seasonSummaryService = seasonSummaryService;
    }

    @GetMapping(name = "getPlayerDetailsById", path = "/{playerId}/details")
    public ISeasonSummaryDetails getPlayerDetailsById(
            @PathVariable Long playerId,
            @RequestParam String year
    ) {
        return seasonSummaryService.getSeasonSummaryByPlayerIdAndYear(playerId, Integer.decode(year));
    }

}
