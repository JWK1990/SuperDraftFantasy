package au.superdraftfantasy.api.futuresScheduler;

import au.superdraftfantasy.api.block.BlockDto;
import org.springframework.messaging.simp.SimpMessagingTemplate;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.concurrent.*;

public class FuturesScheduler {

    private final SimpMessagingTemplate simpMessagingTemplate;

    public FuturesScheduler(SimpMessagingTemplate simpMessagingTemplate) {
        this.simpMessagingTemplate = simpMessagingTemplate;
    }

    private static final ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(1);
    static ConcurrentMap<String, ScheduledFuture<?>> futures = new ConcurrentHashMap<>();

    public void startScheduledFuture(
            ScheduledFutureEnum type,
            BlockDto readDto,
            LocalDateTime endTime,
            ScheduledFutureInterface scheduledFutureInterface
    ) {
        String key = getKey(type, readDto.getDraftId());
        long delayInMilliseconds = Duration.between(LocalDateTime.now(), endTime).toMillis();
        System.out.println("Delay " + delayInMilliseconds);
        ScheduledFuture<?> future = scheduler.schedule(
                () -> scheduledFutureInterface.createScheduledFuture(readDto),
                delayInMilliseconds,
                TimeUnit.MILLISECONDS
        );
        futures.put(key, future);
        System.out.println(type + " Future Started.");
    }

    public void stopScheduledFutures(final Long draftId) {
        String addToBlockKey = getKey(ScheduledFutureEnum.AUTO_ADD_TO_BLOCK, draftId);
        String draftPlayerKey = getKey(ScheduledFutureEnum.AUTO_ADD_TO_BLOCK, draftId);
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

    private String getKey(ScheduledFutureEnum type, Long draftId) {
        return type.name() + " - DraftId: " + draftId;
    }

    private void autoAddToBlock(BlockDto blockDto) {
        System.out.println("Auto Add To Block: " + blockDto);
        simpMessagingTemplate.convertAndSend("/draft/addToBlocks", blockDto);
    }

    private void autoDraftPlayer() {

    }

}
