package au.superdraftfantasy.api.player;

import au.superdraftfantasy.api.coach.CoachEntity;
import au.superdraftfantasy.api.coach.CoachTypeEnum;
import au.superdraftfantasy.api.draft.*;
import au.superdraftfantasy.api.roster.RosterEntity;
import au.superdraftfantasy.api.roster.RosterRepository;
import au.superdraftfantasy.api.team.TeamEntity;
import au.superdraftfantasy.api.user.UserEntity;
import au.superdraftfantasy.api.user.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

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
        return modelMapper.map(playerEntity, PlayerReadDto.class);
    }

}