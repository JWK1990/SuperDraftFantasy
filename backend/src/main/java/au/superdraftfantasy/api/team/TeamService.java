package au.superdraftfantasy.api.team;

import au.superdraftfantasy.api.block.BlockDto;
import au.superdraftfantasy.api.draft.DraftRepository;
import au.superdraftfantasy.api.player.PlayerEntity;
import au.superdraftfantasy.api.player.PlayerRepository;
import au.superdraftfantasy.api.player.PlayerService;
import au.superdraftfantasy.api.position.PositionEntity;
import au.superdraftfantasy.api.position.PositionRepository;
import au.superdraftfantasy.api.position.PositionTypeEnum;
import au.superdraftfantasy.api.roster.RosterEntity;
import au.superdraftfantasy.api.teamPlayerJoin.*;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.*;
import java.util.stream.Collectors;


@Service
public class TeamService {

    private final ModelMapper modelMapper;
    private final TeamRepository teamRepository;
    private final PlayerRepository playerRepository;
    private final SimpMessagingTemplate simpMessagingTemplate;
    private final PositionRepository positionRepository;
    private final PlayerService playerService;
    private final TeamPlayerJoinRepository teamPlayerJoinRepository;
    private final DraftRepository draftRepository;

    public TeamService(
            ModelMapper modelMapper,
            TeamRepository teamRepository,
            PlayerRepository playerRepository,
            SimpMessagingTemplate simpMessagingTemplate,
            PositionRepository positionRepository,
            PlayerService playerService,
            TeamPlayerJoinRepository teamPlayerJoinRepository,
            DraftRepository draftRepository
    ) {
        this.modelMapper = modelMapper;
        this.teamRepository = teamRepository;
        this.playerRepository = playerRepository;
        this.simpMessagingTemplate = simpMessagingTemplate;
        this.positionRepository = positionRepository;
        this.playerService = playerService;
        this.teamPlayerJoinRepository = teamPlayerJoinRepository;
        this.draftRepository = draftRepository;
    }

    /**
     * Get a List of Teams in a given Draft.
     * @param draftId
     * @return
     */
    List<ITeamStats> getAllTeamStatsByDraft(Long draftId) {
        return teamRepository.findAllBaseByDraftId(draftId);
    };

    /**
     * Get a Team in a given Draft.
     * @param teamId
     * @return
     */
    ITeamStats getTeamStatsByTeamId(Long teamId) {
        return teamRepository.findBaseById(teamId);
    };

    /**
     * Adds the current Block Player to a Team when bidding finishes.
     * @param readDto
     * @return
     */
    @Transactional
    public TeamReadDto addPlayerToTeam(BlockDto readDto) {
        // TODO BEFORE DRAFT: Update to use getOne.
        TeamEntity team = teamRepository.findById(readDto.getBidderTeamId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Team with ID '" + readDto.getOnTheBlockTeamId() + "' Not Found."));
        checkIfPlayerAlreadyDrafted(team, readDto.getPlayerId());
        PlayerEntity player =  playerRepository.findById(readDto.getPlayerId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Player with ID '" + readDto.getPlayerId() + "' Not Found."));

        // Update Team.
        // TODO: Update Average PurchaseReviewRating.
        RosterEntity roster = team.getDraft().getRoster();
        addPlayer(team, player, readDto.getPrice(), roster);
        team.setBudget(team.getBudget() - readDto.getPrice());
        long totalRosterSlots = roster.getDef() + roster.getMid() + roster.getRuc() + roster.getFwd() + roster.getBench();
        if(team.getTeamPlayerJoins().size() >= totalRosterSlots) {
            team.setStatus(TeamStatusEnum.READY);
        }
        teamRepository.save(team);

        // Update Player.
        // Update Purchsae Review Rating.
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
        List<TeamPlayerJoinReadDto> updatedTeamPlayerJoins = new ArrayList<>();

        writeDto.forEach(myTeamPositionUpdate -> {
            TeamPlayerJoinEntity teamPlayerJoinToUpdate = teamPlayerJoins.stream()
                    .filter(teamPlayerJoin -> teamPlayerJoin.getPlayer().getId().equals(myTeamPositionUpdate.getPlayerId()))
                    .findFirst().orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "TeamPlayerJoinEntity not found"));
            PositionEntity position = positionRepository.findByType(myTeamPositionUpdate.getMyTeamPosition())
                    .orElseThrow(() ->new NoSuchElementException(myTeamPositionUpdate.getMyTeamPosition() + " position not found."));
            teamPlayerJoinToUpdate.setMyTeamPosition(position);
            teamPlayerJoinToUpdate.setSlotId(myTeamPositionUpdate.getSlotId());
            updatedTeamPlayerJoins.add(modelMapper.map(teamPlayerJoinToUpdate, TeamPlayerJoinReadDto.class));
        });
        teamRepository.save(team);

        MyTeamPositionReadDto myTeamPositionReadDto = new MyTeamPositionReadDto(teamId, updatedTeamPlayerJoins);
        this.simpMessagingTemplate.convertAndSend("/draft/updateMyTeamPositions", myTeamPositionReadDto);
        return myTeamPositionReadDto;
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
        // Get availability at each position.
        Map<PositionTypeEnum, Boolean> positionalAvailabilityMap = getPositionalAvailabilityMap(draftId, teamId);

        Long bestAvailablePlayerId;

        if(positionalAvailabilityMap.get(PositionTypeEnum.BENCH)) {
            bestAvailablePlayerId = playerService.getBestUndraftedPlayerId(draftId);
        } else {
            List<String> positionExclusionList = getPositionExclusionList(positionalAvailabilityMap);
            bestAvailablePlayerId = playerService.getBestUndraftedPlayerIdWithPositionFilter(draftId, positionExclusionList);
        }

        return bestAvailablePlayerId;
    }

    private List<String> getPositionExclusionList(Map<PositionTypeEnum, Boolean> positionalAvailabilityMap) {
        List<String> positionExclusionList = new ArrayList<>();
        if(!positionalAvailabilityMap.get(PositionTypeEnum.DEF)) {
            positionExclusionList.add(PositionTypeEnum.DEF.name());
        }
        if(!positionalAvailabilityMap.get(PositionTypeEnum.FWD)) {
            positionExclusionList.add(PositionTypeEnum.FWD.name());
        }
        if(!positionalAvailabilityMap.get(PositionTypeEnum.RUC)) {
            positionExclusionList.add(PositionTypeEnum.RUC.name());
        }
        if(!positionalAvailabilityMap.get(PositionTypeEnum.MID)) {
            positionExclusionList.add(PositionTypeEnum.MID.name());
        }
        return positionExclusionList;
    }

    private Map<PositionTypeEnum, Boolean> getPositionalAvailabilityMap(Long draftId, Long teamId) {
        // Get required inputs.
        List<ITeamPlayerJoinBase> teamPlayerJoinsForTeam = teamPlayerJoinRepository.findByTeam_Id(teamId);
        RosterEntity draftRoster = draftRepository.getOne(draftId).getRoster();

      // Get count of Players in each position for a given Team.
       Map<PositionTypeEnum, Long> positionCountMap = teamPlayerJoinsForTeam.stream()
                .collect(Collectors.groupingBy(ITeamPlayerJoinBase::getMyTeamPosition, Collectors.counting()));

       // Map these counts to a boolean indicating whether or not a slot is available at that position.
       Map<PositionTypeEnum, Boolean> positionalAvailabilityMap = getNewPositionalAvailabilityMap();
        for (Map.Entry<PositionTypeEnum, Long> mapEntry : positionCountMap.entrySet()) {
            PositionTypeEnum position = mapEntry.getKey();
            Long numOfSlotsTakenForPosition = mapEntry.getValue();
            Long totalNumOfSlotsForPosition = getTotalNumOfSlotsForPosition(position, draftRoster);
            positionalAvailabilityMap.put(position, numOfSlotsTakenForPosition < totalNumOfSlotsForPosition);
        }
       return positionalAvailabilityMap;
    };

    private Map<PositionTypeEnum, Boolean> getNewPositionalAvailabilityMap() {
        Map<PositionTypeEnum, Boolean> positionalAvailabilityMap = new HashMap<>();
        positionalAvailabilityMap.put(PositionTypeEnum.DEF, true);
        positionalAvailabilityMap.put(PositionTypeEnum.MID, true);
        positionalAvailabilityMap.put(PositionTypeEnum.RUC, true);
        positionalAvailabilityMap.put(PositionTypeEnum.FWD, true);
        positionalAvailabilityMap.put(PositionTypeEnum.BENCH, true);
        return positionalAvailabilityMap;
    }

    private Long getTotalNumOfSlotsForPosition(PositionTypeEnum position, RosterEntity draftRoster) {
        Long totalSlotsForPosition = 0L;
        switch (position) {
            case DEF: totalSlotsForPosition = draftRoster.getDef(); break;
            case MID: totalSlotsForPosition = draftRoster.getMid(); break;
            case RUC: totalSlotsForPosition = draftRoster.getRuc(); break;
            case FWD: totalSlotsForPosition = draftRoster.getFwd(); break;
            case BENCH: totalSlotsForPosition = draftRoster.getBench(); break;
            default: break;
        }
        return totalSlotsForPosition;
    }

    private void addPlayer(TeamEntity team, PlayerEntity player, Long price, RosterEntity roster) {
        PositionEntity myTeamPosition = getMyTeamPosition(team, player);

        Integer purchaseReviewRating = null;
        Integer priceDifference = null;

        if(player.getMoneyballPrice() != null) {
            priceDifference = (int) (price - player.getMoneyballPrice());
            purchaseReviewRating = getPurchaseReviewRating(priceDifference, player);
        }

        String slotId = generateSlotId(team, roster, myTeamPosition);

        TeamPlayerJoinEntity teamPlayerJoin = new TeamPlayerJoinEntity(
                null,
                team,
                player,
                price,
                myTeamPosition,
                purchaseReviewRating,
                priceDifference,
                slotId
        );
        team.getTeamPlayerJoins().add(teamPlayerJoin);
    }

    private PositionEntity getMyTeamPosition(TeamEntity team, PlayerEntity player) {
        List<PositionTypeEnum> positions = player.getPositions().stream()
                .map(PositionEntity::getType).collect(Collectors.toList());

        Map<PositionTypeEnum, Boolean> positionAvailabilityMap = getPositionalAvailabilityMap(
                team.getDraft().getId(),
                team.getId()
        );

        PositionTypeEnum positionType = null;
        PositionEntity position = null;

        // The below order is significant, as it determines which positions are treated as primary and which are secondary.
        if(positions.contains(PositionTypeEnum.DEF) && positionAvailabilityMap.get(PositionTypeEnum.DEF)) {
            positionType = PositionTypeEnum.DEF;
        } else if(positions.contains(PositionTypeEnum.FWD) && positionAvailabilityMap.get(PositionTypeEnum.FWD)) {
            positionType = PositionTypeEnum.FWD;
        } else if(positions.contains(PositionTypeEnum.RUC) && positionAvailabilityMap.get(PositionTypeEnum.RUC)) {
            positionType = PositionTypeEnum.RUC;
        } else if(positions.contains(PositionTypeEnum.MID) && positionAvailabilityMap.get(PositionTypeEnum.MID)) {
            positionType = PositionTypeEnum.MID;
        } else if(positionAvailabilityMap.get(PositionTypeEnum.BENCH)){
            positionType = PositionTypeEnum.BENCH;
        }

        if(positionType != null) {
            position = positionRepository.findByType(positionType)
                    .orElseThrow(() -> new NoSuchElementException("Position not found."));
        }
        return position;
    }

    private Integer getPurchaseReviewRating(Integer priceDifference, PlayerEntity playerEntity) {
        // If Team paid $15 and moneyballPrice is $10, priceDifference is $5.
        // PurchaseReviewRating 0 is F and 5 is A+.
        Integer purchaseReviewRating = 3;
        if(priceDifference > 15) {
            purchaseReviewRating = 0; // F.
        } else if(priceDifference > 10) {
            purchaseReviewRating = 1; // E.
        } else if(priceDifference > 5) {
            purchaseReviewRating = 2; // D
        } else if(priceDifference > -5) {
            purchaseReviewRating = 3; // C
        } else if(priceDifference > -10) {
            purchaseReviewRating = 4; // B
        } else if(priceDifference > -15) {
            purchaseReviewRating = 5;
        } else {
            purchaseReviewRating = 6;
        }
        return purchaseReviewRating;
    }

    private boolean isSlotAvailableForPosition(TeamEntity team, PositionTypeEnum position) {
        Long totalSlotsForPosition = getTotalSlotsForPosition(position, team);
        long filledSlotsForPosition = team.getTeamPlayerJoins().stream().filter(
                teamPlayerJoin -> teamPlayerJoin.getMyTeamPosition().getType().equals(position)
        ).count();
        return filledSlotsForPosition < totalSlotsForPosition;
    }

    private Long getTotalSlotsForPosition(PositionTypeEnum position, TeamEntity team) {
        Long totalSlotsForPosition = 0L;
        switch (position) {
            case DEF: totalSlotsForPosition = team.getDraft().getRoster().getDef(); break;
            case MID: totalSlotsForPosition = team.getDraft().getRoster().getMid(); break;
            case RUC: totalSlotsForPosition = team.getDraft().getRoster().getRuc(); break;
            case FWD: totalSlotsForPosition = team.getDraft().getRoster().getFwd(); break;
            case BENCH: totalSlotsForPosition = team.getDraft().getRoster().getBench(); break;
            default: break;
        }
        return totalSlotsForPosition;
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

    private String generateSlotId(TeamEntity team, RosterEntity roster, PositionEntity myTeamPosition) {
        PositionTypeEnum positionType = myTeamPosition.getType();
        Long numOfSlotsForPosition = getTotalSlotsForPosition(positionType, team);
        // Get the full list of potential slot ids (e.g. DEF0, DEF1, DEF2, DEF3, DEF4).
        List<String> potentialSlotIdList = new ArrayList<>();
        for(int i = 0; i < numOfSlotsForPosition; i++) {
            potentialSlotIdList.add(positionType.toString() + i);
        }
        // Get the list of taken slot ids.
        List<String> takenSlotIds = team.getTeamPlayerJoins().stream()
                .map(TeamPlayerJoinEntity::getSlotId)
                .collect(Collectors.toList());
        // Find and return the first potential slot id that isn't taken or default to the last slot id.
        Optional<String> slotId = potentialSlotIdList.stream()
                .filter(potentialSlot -> !takenSlotIds.contains(potentialSlot))
                .findFirst();
        return slotId.orElseGet(() -> potentialSlotIdList.get(potentialSlotIdList.size() - 1));
    }

}
