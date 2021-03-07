package au.superdraftfantasy.api.player;

import au.superdraftfantasy.api.draft.DraftEntity;
import au.superdraftfantasy.api.draft.DraftRepository;
import au.superdraftfantasy.api.seasonSummary.SeasonSummaryBaseStats;
import au.superdraftfantasy.api.teamPlayerJoin.TeamPlayerJoinEntity;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PlayerService {

    private final ModelMapper modelMapper;
    private final PlayerRepository playerRepository;
    private final DraftRepository draftRepository;

    public PlayerService(
            ModelMapper modelMapper,
            PlayerRepository playerRepository,
            DraftRepository draftRepository
    ) {
        this.modelMapper = modelMapper;
        this.playerRepository = playerRepository;
        this.draftRepository = draftRepository;
    }

    /**
     * Read a list of all Players.
     * @return
     */
    public List<PlayerEntity> getAllPlayers() {
        return playerRepository.findAll();
    }

    /**
     * Read a list of all Players including Draft specific attributes.
     * @return
     */
    @Transactional
    public List<PlayerInDraftReadDto> getPlayersByDraft(Long draftId) {
        List<PlayerEntity> playerList = playerRepository.findAll();
        DraftEntity draft = draftRepository.findById(draftId).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "Draft with ID '" + draftId + "' not found.")
        );

        List<TeamPlayerJoinEntity> draftedPlayerList = draft.getTeams().stream()
                .flatMap(coach -> coach.getTeamPlayerJoins().stream())
                .collect(Collectors.toList());

        List<PlayerInDraftReadDto> playerInDraftReadDtoList = new ArrayList<>();
        playerList.forEach((player) -> {
            playerInDraftReadDtoList.add(convertToPlayerInDraftReadDto(player, draftedPlayerList));
        });

        return playerInDraftReadDtoList;
    }

    public PlayerBaseReadDto getPlayerById(Long playerId) {
       PlayerBaseInterface playerBase = playerRepository.findBaseById(playerId)
               .orElseThrow(() -> new NoSuchElementException("Player with id " + playerId + " not found."));
       SeasonSummaryBaseStats baseStats = playerBase.getBaseStats(2019);
       return convertToPlayerBaseReadDto(playerBase, baseStats);
    }

    private PlayerBaseReadDto convertToPlayerBaseReadDto(PlayerBaseInterface playerBase, SeasonSummaryBaseStats baseStats) {
        PlayerBaseReadDto readDto = modelMapper.map(playerBase, PlayerBaseReadDto.class);
        readDto.setGames(baseStats.getGames());
        readDto.setAverage(baseStats.getAverage());
        readDto.setDisposals(baseStats.getDisposals());
        readDto.setDisposalEfficiency(baseStats.getDisposalEfficiency());
        readDto.setTackles(baseStats.getTackles());
        return readDto;
    }

    private PlayerInDraftReadDto convertToPlayerInDraftReadDto(PlayerEntity playerEntity, List<TeamPlayerJoinEntity> draftedPlayerList) {
        PlayerInDraftReadDto playerReadDto = modelMapper.map(playerEntity, PlayerInDraftReadDto.class);

        Optional<TeamPlayerJoinEntity> alreadyDraftedPlayer = draftedPlayerList.stream()
                .filter(draftedPlayer -> draftedPlayer.getPlayer().getId().equals(playerEntity.getId()))
                .findAny();

        if(alreadyDraftedPlayer.isPresent()) {
            playerReadDto.setAvailable(false);
            playerReadDto.setPrice(alreadyDraftedPlayer.get().getPrice());
            playerReadDto.setDraftTeam(alreadyDraftedPlayer.get().getTeam().getName());
        } else {
            playerReadDto.setAvailable(true);
        }

        return playerReadDto;
    }

}
