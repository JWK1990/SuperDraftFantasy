package au.superdraftfantasy.api.game;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class GameService {

    private final GameRepository gameRepository;

    public GameService(
            GameRepository gameRepository
    ) {
        this.gameRepository = gameRepository;
    }

    /**
     * Read all SeasonSummaries by PlayerId.
     * @return
     */
    @Transactional
    public List<IGameBase> getGamesByPlayerId(Long playerId) {
        return gameRepository.findAllByPlayer_Id(playerId);
    };

}
