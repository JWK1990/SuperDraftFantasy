package au.superdraftfantasy.api.futuresScheduler;

import au.superdraftfantasy.api.block.BlockDto;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.concurrent.*;

public class FuturesScheduler {

    private static final ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(1);
    static ConcurrentMap<String, ScheduledFuture<?>> futures = new ConcurrentHashMap<>();

    public void startScheduledFuture(
            ScheduledFutureEnum type,
            BlockDto readDto,
            LocalDateTime endTime,
            ScheduledFutureInterface scheduledFutureInterface
    ) {
        String key = getKey(readDto.getDraftId(), type);
        long delayInMilliseconds = Duration.between(LocalDateTime.now(), endTime).toMillis();
        ScheduledFuture<?> future = scheduler.schedule(
                () -> scheduledFutureInterface.createScheduledFuture(readDto),
                delayInMilliseconds,
                TimeUnit.MILLISECONDS
        );
        futures.put(key, future);
    }

    public void stopScheduledFutures(final Long draftId) {
        String addToBlockKey = getKey(draftId, ScheduledFutureEnum.AUTO_ADD_TO_BLOCK);
        String draftPlayerKey = getKey(draftId, ScheduledFutureEnum.AUTO_DRAFT_PLAYER);
        ScheduledFuture<?> addToBlockFuture =  futures.get(addToBlockKey);
        ScheduledFuture<?> draftPlayerFuture =  futures.get(draftPlayerKey);
        if(addToBlockFuture != null) {
            addToBlockFuture.cancel(true);
            System.out.println("AddToBlock Future Stopped.");
        }
        if(draftPlayerFuture != null) {
            draftPlayerFuture.cancel(true);
            System.out.println("DraftPlayer Future Stopped.");
        }
    }

    private String getKey(Long draftId, ScheduledFutureEnum type) {
                return "DraftId: " + draftId + " - " + type.name();
    }

}
