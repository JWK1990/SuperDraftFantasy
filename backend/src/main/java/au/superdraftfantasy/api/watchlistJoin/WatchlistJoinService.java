package au.superdraftfantasy.api.watchlistJoin;

import au.superdraftfantasy.api.player.PlayerEntity;
import au.superdraftfantasy.api.player.PlayerRepository;
import au.superdraftfantasy.api.team.TeamEntity;
import au.superdraftfantasy.api.team.TeamRepository;
import org.springframework.stereotype.Service;

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

}
