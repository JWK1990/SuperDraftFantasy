package au.superdraftfantasy.api.team;

import au.superdraftfantasy.api.block.BlockDto;
import au.superdraftfantasy.api.player.PlayerEntity;
import au.superdraftfantasy.api.player.PlayerInDraftReadDto;
import au.superdraftfantasy.api.player.PlayerRepository;
import au.superdraftfantasy.api.player.PlayerService;
import au.superdraftfantasy.api.position.PositionEntity;
import au.superdraftfantasy.api.position.PositionRepository;
import au.superdraftfantasy.api.position.PositionTypeEnum;
import au.superdraftfantasy.api.roster.RosterEntity;
import au.superdraftfantasy.api.teamPlayerJoin.MyTeamPositionReadDto;
import au.superdraftfantasy.api.teamPlayerJoin.MyTeamPositionWriteDto;
import au.superdraftfantasy.api.teamPlayerJoin.TeamPlayerJoinEntity;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.security.web.firewall.RequestRejectedException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Set;
import java.util.stream.Collectors;


@Service
public class TeamService {

    private final ModelMapper modelMapper;
    private final TeamRepository teamRepository;
    private final PlayerRepository playerRepository;
    private final SimpMessagingTemplate simpMessagingTemplate;
    private final PositionRepository positionRepository;
    private final PlayerService playerService;

    public TeamService(
            ModelMapper modelMapper,
            TeamRepository teamRepository,
            PlayerRepository playerRepository,
            SimpMessagingTemplate simpMessagingTemplate,
            PositionRepository positionRepository,
            PlayerService playerService
    ) {
        this.modelMapper = modelMapper;
        this.teamRepository = teamRepository;
        this.playerRepository = playerRepository;
        this.simpMessagingTemplate = simpMessagingTemplate;
        this.positionRepository = positionRepository;
        this.playerService = playerService;
    }

    /**
     * Adds the current Block Player to a Team when bidding finishes.
     * @param readDto
     * @return
     */
    @Transactional
    public TeamReadDto addPlayerToTeam(BlockDto readDto) {
        TeamEntity team = teamRepository.findById(readDto.getBidderTeamId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Team with ID '" + readDto.getOnTheBlockTeamId() + "' Not Found."));
        checkIfPlayerAlreadyDrafted(team, readDto.getPlayerId());
        addPlayer(team, readDto.getPlayerId(), readDto.getPrice());
        team.setBudget(team.getBudget() - readDto.getPrice());

        RosterEntity roster = team.getDraft().getRoster();
        long totalRosterSlots = roster.getDef() + roster.getMid() + roster.getRuc() + roster.getFwd() + roster.getBench();
        if(team.getTeamPlayerJoins().size() >= totalRosterSlots) {
            team.setStatus(TeamStatusEnum.READY);
        }
        teamRepository.save(team);
        return modelMapper.map(team, TeamReadDto.class);
    }

    /**
     * Updates a Player's current field position within a Team.
     * @param teamId
     * @param writeDto
     * @return
     */
    public MyTeamPositionReadDto updateMyTeamPosition(final Long teamId, List<MyTeamPositionWriteDto> writeDto) {
        TeamEntity team = teamRepository.findById(teamId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Team with ID '" + teamId + "' Not Found."));

        List<TeamPlayerJoinEntity> teamPlayerJoins = team.getTeamPlayerJoins();
        MyTeamPositionReadDto readDto = new MyTeamPositionReadDto(teamId, new ArrayList<>());

        writeDto.forEach(myTeamPositionUpdate -> {
            TeamPlayerJoinEntity teamPlayerJoinToUpdate = teamPlayerJoins.stream()
                    .filter(teamPlayerJoin -> teamPlayerJoin.getPlayer().getId().equals(myTeamPositionUpdate.getPlayerId()))
                    .findFirst().orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "TeamPlayerJoinEntity not found"));
            PositionEntity position = positionRepository.findByType(myTeamPositionUpdate.getMyTeamPosition())
                    .orElseThrow(() ->new NoSuchElementException(myTeamPositionUpdate.getMyTeamPosition() + " position not found."));
            teamPlayerJoinToUpdate.setMyTeamPosition(position);
            readDto.getMyTeamPositions().add(myTeamPositionUpdate);
        });
        teamRepository.save(team);

        this.simpMessagingTemplate.convertAndSend("/draft/updateMyTeamPositions", readDto);
        return readDto;
    }

    /**
     * Gets the best available player for a given team based on their available slots.
     * @param draftId
     * @param teamId
     * @return
     */
    //TODO: Could update to get based on highest rank. For this need to add a rank field so that we're not just using average.
    @Transactional
    public Long getBestAvailablePlayerForTeam(Long draftId, Long teamId) {
        // TODO: Update so that we only grab the required player from the DB. Not the entire list every time. We could query on available and position.
        List<PlayerInDraftReadDto> playerList = playerService.getPlayersByDraft(draftId);
        TeamEntity team = teamRepository.findById(teamId).orElseThrow(() -> new NoSuchElementException("Team with id " + teamId + " not found."));
        // Get first available Player if bench is free, or if not, get first available Player that has a position with a free slot.
        PlayerInDraftReadDto bestAvailablePlayer = playerList.stream().filter(player ->
                player.isAvailable() && (
                        isSlotAvailableForPosition(team, PositionTypeEnum.BENCH)
                                || isSlotAvailableForPosition(team, player.getPrimaryPosition())
                                        || (player.getSecondaryPosition() != null && isSlotAvailableForPosition(team, player.getSecondaryPosition()))
                )
        )
                .findFirst()
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Could not fetch best available Player."));
        return bestAvailablePlayer.getId();
    }

    private void addPlayer(TeamEntity team, Long playerID, Long price) {
        PlayerEntity player =  playerRepository.findById(playerID).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Player with ID '" + playerID + "' Not Found."));
        PositionEntity myTeamPosition = getMyTeamPosition(team, player);
        if(myTeamPosition != null) {
            TeamPlayerJoinEntity teamPlayerJoin = new TeamPlayerJoinEntity(null, team, player, price, myTeamPosition);
            team.getTeamPlayerJoins().add(teamPlayerJoin);
        } else {
            throw new RequestRejectedException("There is no space for the selected player in the given team.");
        }
    }

    private PositionEntity getMyTeamPosition(TeamEntity team, PlayerEntity player) {
        // TODO - Fetch 2021 here.
        Set<PositionTypeEnum> positions = player.getSeasonDetails().get(0).getPositions().stream().map(PositionEntity::getType).collect(Collectors.toSet());

        // The below order is significant, as it determines which positions are treated as primary and which are secondary.
        PositionTypeEnum positionType = null;
        if(positions.contains(PositionTypeEnum.DEF) && isSlotAvailableForPosition(team, PositionTypeEnum.DEF)) {
            positionType = PositionTypeEnum.DEF;
        } else if(positions.contains(PositionTypeEnum.MID) && isSlotAvailableForPosition(team, PositionTypeEnum.MID)) {
            positionType = PositionTypeEnum.MID;
        } else if(positions.contains(PositionTypeEnum.RUC) && isSlotAvailableForPosition(team, PositionTypeEnum.RUC)) {
            positionType = PositionTypeEnum.RUC;
        } else if(positions.contains(PositionTypeEnum.FWD) && isSlotAvailableForPosition(team, PositionTypeEnum.FWD)) {
            positionType = PositionTypeEnum.FWD;
        } else if(isSlotAvailableForPosition(team, PositionTypeEnum.BENCH)){
            positionType = PositionTypeEnum.BENCH;
        }

        PositionEntity position = null;
        if(positionType != null) {
            position = positionRepository.findByType(positionType).orElseThrow(() -> new NoSuchElementException("Position not found."));
        }
        return position;
    }

    private boolean isSlotAvailableForPosition(TeamEntity team, PositionTypeEnum position) {
        Long totalSlotsForPosition = 0L;
        switch (position) {
            case DEF: totalSlotsForPosition = team.getDraft().getRoster().getDef(); break;
            case MID: totalSlotsForPosition = team.getDraft().getRoster().getMid(); break;
            case RUC: totalSlotsForPosition = team.getDraft().getRoster().getRuc(); break;
            case FWD: totalSlotsForPosition = team.getDraft().getRoster().getFwd(); break;
            case BENCH: totalSlotsForPosition = team.getDraft().getRoster().getBench(); break;
            default: break;
        }
        Long filledSlotsForPosition = team.getTeamPlayerJoins().stream().filter(teamPlayerJoin -> teamPlayerJoin.getMyTeamPosition().getType().equals(position)).count();
        return filledSlotsForPosition < totalSlotsForPosition;
    }

    private void checkIfPlayerAlreadyDrafted(TeamEntity team, Long playerID) {
        List<TeamEntity> teamList = team.getDraft().getTeams();
        teamList.forEach(teamInDraft -> {
            List<PlayerEntity> playerList = getPlayers(teamInDraft.getTeamPlayerJoins());
            boolean playerAlreadyDrafted = playerList.stream().anyMatch(player -> player.getId().equals(playerID));
            if(playerAlreadyDrafted) {
                throw new ResponseStatusException(HttpStatus.CONFLICT, "Player with ID '" + playerID + "' is already drafted by '" + teamInDraft.getName() + "'.");
            }
        });
    }

    private List<PlayerEntity> getPlayers(List<TeamPlayerJoinEntity> teamPlayerJoins) {
        return teamPlayerJoins.stream().map(TeamPlayerJoinEntity::getPlayer).collect(Collectors.toList());
    }

}
