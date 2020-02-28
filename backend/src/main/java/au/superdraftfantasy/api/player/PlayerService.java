package au.superdraftfantasy.api.player;

import au.superdraftfantasy.api.position.PositionEntity;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class PlayerService {

    private final ModelMapper modelMapper;
    private final PlayerRepository playerRepository;

    public PlayerService(ModelMapper modelMapper, PlayerRepository playerRepository) {
        this.modelMapper = modelMapper;
        this.playerRepository = playerRepository;
    }

    /**
     * Read a list of all Players.
     * @return
     */
    public List<PlayerReadDto> getAllPlayers() {
        List<PlayerEntity> playerList = playerRepository.findAll();
        List<PlayerReadDto> playerReadDtoList = new ArrayList<>();
        playerList.stream().forEach((player) -> {
            playerReadDtoList.add(convertToReadDto(player));
        });
        return playerReadDtoList;
    }

    private PlayerReadDto convertToReadDto(PlayerEntity playerEntity) {
        PlayerReadDto playerReadDto = modelMapper.map(playerEntity, PlayerReadDto.class);
        playerReadDto.setPosition(convertPositionsToString(playerEntity.getPositions()));
        return playerReadDto;
    }

    private String convertPositionsToString(Collection<PositionEntity> positions) {
        StringJoiner joiner = new StringJoiner("-");
        positions.stream().forEach((position) -> {
            joiner.add(position.getType().toString());
        });
        return joiner.toString();
    }

}