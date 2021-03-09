package au.superdraftfantasy.api.player;

import au.superdraftfantasy.api.draft.DraftRepository;
import au.superdraftfantasy.api.seasonSummary.ISeasonSummaryBase;
import au.superdraftfantasy.api.seasonSummary.ISeasonSummaryDetails;
import au.superdraftfantasy.api.teamPlayerJoin.TeamPlayerJoinBaseInterface;
import au.superdraftfantasy.api.teamPlayerJoin.TeamPlayerJoinRepository;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.function.Function;

@Service
public class PlayerService {

    private final ModelMapper modelMapper;
    private final PlayerRepository playerRepository;
    private final DraftRepository draftRepository;
    private final TeamPlayerJoinRepository teamPlayerJoinRepository;

    public PlayerService(
            ModelMapper modelMapper,
            PlayerRepository playerRepository,
            DraftRepository draftRepository,
            TeamPlayerJoinRepository teamPlayerJoinRepository
    ) {
        this.modelMapper = modelMapper;
        this.playerRepository = playerRepository;
        this.draftRepository = draftRepository;
        this.teamPlayerJoinRepository = teamPlayerJoinRepository;
    }

    /**
     * Read a list of all Players.
     * @return
     */
    public List<IPlayerBase> getAllPlayers() {
        return playerRepository.findAllBaseBy();
    }

    /**
     * Read a list of all Players including Draft specific attributes.
     * @return
     */
    @Transactional
    public List<PlayerBaseReadDto> getAllPlayersByDraft(Long draftId) {
        List<IPlayerBase> playerList = playerRepository.findAllBaseBy();
        List<PlayerBaseReadDto> readDtoList = new ArrayList<>();
        playerList.forEach((player) -> {
            PlayerBaseReadDto readDto = new PlayerBaseReadDto(
                    player,
                    player.getBaseStats(2020),
                    player.getTeamPlayerJoin(draftId)
            );
            readDtoList.add(readDto);
        });
        return readDtoList;
    }

    /**
     * Read a list of a subset of Players including Draft specific attributes.
     * @return
     */
    @Transactional
    public Page<PlayerBaseReadDto> getPlayersPageByDraftId(Long draftId, Integer pageNum, Integer pageSize) {
        Pageable pageable = PageRequest.of(pageNum, pageSize, Sort.by("id"));
        Page<IPlayerBase> playersPage = playerRepository.findAllBasePageBy(pageable);
        // The below is required to add in the specific baseStats and teamPlayerJoins for the PlayerBase.
        // TODO: See if there is a better way that we can handle this data conversion.
        return playersPage.map(new Function<IPlayerBase, PlayerBaseReadDto>() {
            @Override
            public PlayerBaseReadDto apply(IPlayerBase player) {
                return new PlayerBaseReadDto(
                        player,
                        player.getBaseStats(2020),
                        player.getTeamPlayerJoin(draftId)
                );
            }
        });
    }

    /**
     * Read an individual Player by Id.
     * @return
     */
    public PlayerBaseReadDto getPlayerBaseById(Long playerId) {
        IPlayerBase playerBase = playerRepository.findPlayerBaseById(playerId)
                .orElseThrow(() -> new NoSuchElementException("Player with id " + playerId + " not found."));
        ISeasonSummaryBase baseStats = playerBase.getBaseStats(2020);
        TeamPlayerJoinBaseInterface teamPlayerJoin = playerBase.getTeamPlayerJoin(1L);
        return new PlayerBaseReadDto(playerBase, baseStats, teamPlayerJoin);
    }

    /**
     * Read an individual Player by Id.
     * @return
     */
    public PlayerDetailsReadDto getPlayerDetailsById(Long playerId) {
        IPlayerDetails playerDetails = playerRepository.findPlayerDetailsById(playerId)
                .orElseThrow(() -> new NoSuchElementException("Player with id " + playerId + " not found."));
        ISeasonSummaryDetails baseStats = playerDetails.getBaseStats(2020);
        TeamPlayerJoinBaseInterface teamPlayerJoin = playerDetails.getTeamPlayerJoin(1L);
        return new PlayerDetailsReadDto(playerDetails, baseStats, teamPlayerJoin);
    }

}
