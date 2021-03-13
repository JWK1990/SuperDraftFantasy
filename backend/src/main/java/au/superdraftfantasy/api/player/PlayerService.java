package au.superdraftfantasy.api.player;

import au.superdraftfantasy.api.position.PositionRepository;
import au.superdraftfantasy.api.position.PositionTypeEnum;
import au.superdraftfantasy.api.seasonSummary.ISeasonSummaryBase;
import au.superdraftfantasy.api.teamPlayerJoin.ITeamPlayerJoinBase;
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
import java.util.stream.Collectors;

@Service
public class PlayerService {

    private final PlayerRepository playerRepository;
    private final PositionRepository positionRepository;

    public PlayerService(
            PlayerRepository playerRepository,
            PositionRepository positionRepository
    ) {
        this.playerRepository = playerRepository;
        this.positionRepository = positionRepository;
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
                    player.getSeasonSummary(2020),
                    player.getTeamPlayerJoin(draftId)
            );
            readDtoList.add(readDto);
        });
        return readDtoList;
    }

    /**
     * Read a Page of Players for a given Draft.
     * @return
     */
    @Transactional
    public Page<PlayerBaseReadDto> getPlayersPageByDraftId(
            Long draftId,
            Integer pageNum,
            Integer pageSize,
            String search,
            String position
    ) {
        Pageable pageable = PageRequest.of(pageNum, pageSize, Sort.by("id"));
        List<PositionTypeEnum> positionsList = getPositionsFilterList(position);
        Page<IPlayerBase> playerPage;

        // TODO: Try and get working with FirstName search as well.
        // Maybe try and use @Query.
        if(positionsList.size() > 0 ) {
            playerPage = playerRepository.findAllBasePageByPositions_TypeInAndLastNameIgnoreCaseContaining(
                    positionsList,
                    search,
                    pageable
            );
        } else {
            playerPage = playerRepository.findAllBasePageByLastNameIgnoreCaseContaining(
                    search,
                    pageable
            );
        }

        return mapToReadDtoPage(playerPage, 2020, draftId);
    }

    /**
     * Read a page of Drafted Players for a given Draft.
     * @return
     */
    @Transactional
    public Page<PlayerBaseReadDto> getDraftedPlayersPage(
            Long draftId,
            Integer pageNum,
            Integer pageSize,
            String search,
            String position
    ) {
        Pageable pageable = PageRequest.of(pageNum, pageSize, Sort.by("id"));
        List<PositionTypeEnum> positionsList = getPositionsFilterList(position);
        Page<IPlayerBase> draftedPlayerPage;

        // TODO: Try and get working with FirstName search as well.
        // Maybe try and use @Query.
        if(positionsList.size() > 0 ) {
            draftedPlayerPage = playerRepository.findByTeamPlayerJoins_Team_DraftIdAndPositions_TypeInAndLastNameIgnoreCaseContaining(
                    draftId,
                    positionsList,
                    search,
                    pageable
            );
        } else {
            draftedPlayerPage = playerRepository.findByTeamPlayerJoins_Team_DraftIdAndLastNameIgnoreCaseContaining(
                    draftId,
                    search,
                    pageable
            );
        }

        return mapToReadDtoPage(draftedPlayerPage, 2020, draftId);
    }

    /**
     * Read a page of Available Players for a given Draft.
     * @return
     */
    @Transactional
    public Page<PlayerBaseReadDto> getAvailablePlayersPage(
            Long draftId,
            Integer pageNum,
            Integer pageSize,
            String search,
            String position
    ) {
        List<IDraftedPlayerId> draftedPlayerIdList = playerRepository.findPlayerIdByTeamPlayerJoins_Team_DraftId(draftId);
        List<Long> idList = draftedPlayerIdList.stream().map(IDraftedPlayerId::getId).collect(Collectors.toList());


        // If no DraftedPlayers then return full DraftPlayersPage.
        // Else get AvailablePlayer Page.
        if(idList.size() < 1) {
            return getPlayersPageByDraftId(draftId, pageNum, pageSize, search, position);
        } else {
            Pageable pageable = PageRequest.of(pageNum, pageSize, Sort.by("id"));
            List<PositionTypeEnum> positionsList = getPositionsFilterList(position);

            Page<IPlayerBase> availablePlayersPage;
            if(positionsList.size() > 0 ) {
                availablePlayersPage = playerRepository.findByIdNotInAndPositions_TypeInAndLastNameIgnoreCaseContaining(
                        idList,
                        positionsList,
                        search,
                        pageable
                );
            } else {
                availablePlayersPage = playerRepository.findByIdNotInAndLastNameIgnoreCaseContaining(
                        idList,
                        search,
                        pageable
                );
            }

            return mapToReadDtoPage(availablePlayersPage, 2020, draftId);
        }

    }

    /**
     * Read an individual Player by Id.
     * @return
     */
    @Transactional
    public PlayerBaseReadDto getPlayerBaseById(Long playerId, Long draftId) {
        IPlayerBase playerBase = playerRepository.findPlayerBaseById(playerId)
                .orElseThrow(() -> new NoSuchElementException("Player with id " + playerId + " not found."));
        ISeasonSummaryBase baseStats = playerBase.getSeasonSummary(2020);
        ITeamPlayerJoinBase teamPlayerJoin = playerBase.getTeamPlayerJoin(draftId);
        return new PlayerBaseReadDto(playerBase, baseStats, teamPlayerJoin);
    }

    /**
     * Read an individual Player by Id.
     * @return
     */
    @Transactional
    public PlayerDetailsReadDto getPlayerDetailsById(Long playerId, Long draftId) {
        IPlayerDetails playerDetails = playerRepository.findPlayerDetailsById(playerId)
                .orElseThrow(() -> new NoSuchElementException("Player with id " + playerId + " not found."));
        return new PlayerDetailsReadDto(playerDetails, 2020, draftId);
    }

    /**
     * Get the ID of the best available Player in a given Draft.
     * @return
     */
    @Transactional
    public Long getBestUndraftedPlayerId(Long draftId) {
        return playerRepository.getBestUndraftedPlayerId(draftId);
    }

    /**
     * Get the ID of the best available Player in a given Draft for given Position.
     * @return
     */
    @Transactional
    public Long getBestUndraftedPlayerIdWithPositionFilter(Long draftId, List<String> positionExclusionList) {
        return playerRepository.getBestUndraftedPlayerIdWithPositionFilter(draftId, positionExclusionList);
    }

    private List<PositionTypeEnum> getPositionsFilterList(String position) {
        List<PositionTypeEnum> positionsList = new ArrayList<>();
        if(position != null) {
            if(position.contains("DEF")) {
                positionsList.add(PositionTypeEnum.DEF);
            }
            if(position.contains("MID")) {
                positionsList.add(PositionTypeEnum.MID);
            }
            if(position.contains("RUC")) {
                positionsList.add(PositionTypeEnum.RUC);
            }
            if(position.contains("FWD")) {
                positionsList.add(PositionTypeEnum.FWD);
            }
        }
        return positionsList;
    }

    private Page<PlayerBaseReadDto> mapToReadDtoPage(Page<IPlayerBase> iPlayerBasePage, Integer year, Long draftId) {
        return iPlayerBasePage.map(new Function<IPlayerBase, PlayerBaseReadDto>() {
            @Override
            public PlayerBaseReadDto apply(IPlayerBase player) {
                return new PlayerBaseReadDto(
                        player,
                        player.getSeasonSummary(year),
                        player.getTeamPlayerJoin(draftId)
                );
            }
        });
    }

}
