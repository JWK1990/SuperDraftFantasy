package au.superdraftfantasy.api.watchlistJoin;

import au.superdraftfantasy.api.player.PlayerEntity;
import au.superdraftfantasy.api.player.PlayerRepository;
import au.superdraftfantasy.api.team.TeamEntity;
import au.superdraftfantasy.api.team.TeamRepository;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class WatchlistJoinService {

    WatchlistJoinRepository watchlistJoinRepository;
    TeamRepository teamRepository;
    PlayerRepository playerRepository;

    public WatchlistJoinService(
            WatchlistJoinRepository watchlistJoinRepository,
            TeamRepository teamRepository,
            PlayerRepository playerRepository
    ){
        this.watchlistJoinRepository = watchlistJoinRepository;
        this.teamRepository = teamRepository;
        this.playerRepository = playerRepository;
    };

    Set<Long> getWatchlistPlayerIdSetForTeamId(Long teamId) {
        return watchlistJoinRepository.findAllByTeamId(teamId)
                .stream().map(WatchlistJoinDao::getPlayerId)
                .collect(Collectors.toSet());
    }

    Set<Long> addPlayerToWatchlistForTeamId(Long teamId, Long playerId) {
        TeamEntity team = teamRepository.findById(teamId)
                .orElseThrow(() -> new NoSuchElementException("No Team Found."));
        PlayerEntity player = playerRepository.findById(playerId)
                .orElseThrow(() -> new NoSuchElementException("No Player Found."));
        WatchlistJoinEntity watchlistJoinToAdd = new WatchlistJoinEntity(null, team, player);
        watchlistJoinRepository.save(watchlistJoinToAdd);
        return watchlistJoinRepository.findAllByTeamId(teamId)
                .stream().map(WatchlistJoinDao::getPlayerId)
                .collect(Collectors.toSet());
    }

    Set<Long> removePlayerFromWatchlistForTeamId(Long teamId, Long playerId) {
        Optional<WatchlistJoinEntity> optionalWatchlistJoin = watchlistJoinRepository.findByTeam_IdAndPlayer_Id(
                teamId,
                playerId
        );
        optionalWatchlistJoin.ifPresent(watchlistJoinEntity -> watchlistJoinRepository.delete(watchlistJoinEntity));
        return watchlistJoinRepository.findAllByTeamId(teamId)
                .stream().map(WatchlistJoinDao::getPlayerId)
                .collect(Collectors.toSet());
    }

    Set<Long> addPlayerListToWatchlistForTeamId(Long teamId, Set<Long> playerIdSet) {
        // Compare the Set that we receive to the current Set in the DB.
        Set<Long> currentSet = watchlistJoinRepository.findAllByTeamId(teamId)
                .stream().map(WatchlistJoinDao::getPlayerId)
                .collect(Collectors.toSet());
        Set<Long> newIdsToBeAdded = playerIdSet.stream()
                .filter(playerId -> !currentSet.contains(playerId))
                .collect(Collectors.toSet());
        // If there are new Ids to be added, save them in the DB.
        if (newIdsToBeAdded.size() > 0) {
            Set<WatchlistJoinEntity> watchlistJoinEntitySet = new HashSet<>();
            TeamEntity team = teamRepository.findById(teamId)
                    .orElseThrow(() -> new NoSuchElementException("No Team Found."));
            newIdsToBeAdded.forEach(playerId -> {
                PlayerEntity player = playerRepository.findById(playerId)
                        .orElseThrow(() -> new NoSuchElementException("No Player Found."));
                watchlistJoinEntitySet.add(new WatchlistJoinEntity(null, team, player));
            });
            watchlistJoinRepository.saveAll(watchlistJoinEntitySet);
        }
        // Return the updated full Set of Player Ids.
        Set<Long> updatedFullSet = new HashSet<>();
        updatedFullSet.addAll(currentSet);
        updatedFullSet.addAll(newIdsToBeAdded);
        return updatedFullSet;
    }
}
