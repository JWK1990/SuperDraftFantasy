package au.superdraftfantasy.api.seasonSummary;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class SeasonSummaryService {

    private final SeasonSummaryRepository seasonSummaryRepository;

    public SeasonSummaryService(
            SeasonSummaryRepository seasonSummaryRepository
    ) {
        this.seasonSummaryRepository = seasonSummaryRepository;
    }

    /**
     * Read a SeasonSummary by PlayerId and Year.
     * @return
     */
    @Transactional
    public ISeasonSummaryDetails getSeasonSummaryByPlayerIdAndYear(
            Long playerId,
            Integer year
    ) {
        return seasonSummaryRepository.findByPlayer_IdAndYear(playerId, year)
                .orElse(null);
    };

}
