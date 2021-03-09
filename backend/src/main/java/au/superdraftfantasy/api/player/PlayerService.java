package au.superdraftfantasy.api.player;

import au.superdraftfantasy.api.draft.DraftRepository;
import au.superdraftfantasy.api.seasonSummary.SeasonSummaryBaseStats;
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
    public List<PlayerBaseInterface> getAllPlayers() {
        return playerRepository.findAllBaseBy();
    }

    /**
     * Read an individual Player by Id.
     * @return
     */
    public PlayerBaseReadDto getPlayerById(Long playerId) {
        PlayerBaseInterface playerBase = playerRepository.findBaseById(playerId)
                .orElseThrow(() -> new NoSuchElementException("Player with id " + playerId + " not found."));
        SeasonSummaryBaseStats baseStats = playerBase.getBaseStats(2019);
        TeamPlayerJoinBaseInterface teamPlayerJoin = playerBase.getTeamPlayerJoin(1L);
        return new PlayerBaseReadDto(playerBase, baseStats, teamPlayerJoin);
    }

    /**
     * Read a list of all Players including Draft specific attributes.
     * @return
     */
    @Transactional
    public List<PlayerBaseReadDto> getAllPlayersByDraft(Long draftId) {
        List<PlayerBaseInterface> playerList = playerRepository.findAllBaseBy();
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
    public Page<PlayerBaseInterface> getPlayersPageByDraft(Long draftId, Integer pageNum, Integer pageSize) {
        Pageable pageable = PageRequest.of(pageNum, pageSize, Sort.by("id"));
        Page<PlayerBaseInterface> page = playerRepository.findAllBasePageBy(pageable);
        return page;
    }

}
