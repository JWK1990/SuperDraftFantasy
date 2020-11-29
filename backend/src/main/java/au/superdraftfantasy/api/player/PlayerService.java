package au.superdraftfantasy.api.player;

import au.superdraftfantasy.api.draft.DraftEntity;
import au.superdraftfantasy.api.draft.DraftRepository;
import au.superdraftfantasy.api.teamPlayerJoin.TeamPlayerJoinEntity;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
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
    public List<PlayerReadDto> getAllPlayers() {
        List<PlayerEntity> playerList = playerRepository.findAll();
        List<PlayerReadDto> playerReadDtoList = new ArrayList<>();
        playerList.stream().forEach((player) -> {
            playerReadDtoList.add(convertToPlayerReadDto(player));
        });
        return playerReadDtoList;
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

    private PlayerReadDto convertToPlayerReadDto(PlayerEntity playerEntity) {
        PlayerReadDto playerReadDto = modelMapper.map(playerEntity, PlayerReadDto.class);
        return playerReadDto;
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
