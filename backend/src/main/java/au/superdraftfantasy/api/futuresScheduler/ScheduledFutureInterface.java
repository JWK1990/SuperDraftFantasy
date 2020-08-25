package au.superdraftfantasy.api.futuresScheduler;

import au.superdraftfantasy.api.block.BlockDto;

@FunctionalInterface
public interface ScheduledFutureInterface {
    void createScheduledFuture(BlockDto readDto);
}
