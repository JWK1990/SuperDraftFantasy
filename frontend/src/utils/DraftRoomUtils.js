class DraftRoomUtils {

    isSlotAvailableForPlayer(slotAvailability, primaryPosition, secondaryPosition){
        console.log("SlotAvailability: ", slotAvailability, primaryPosition, secondaryPosition);
        if(slotAvailability.bench) {
            return true;
        }
        const primaryAvailability = slotAvailability[primaryPosition.toLowerCase()];
        const secondaryAvailability = secondaryPosition ? slotAvailability[secondaryPosition.toLowerCase()] : false;
        return primaryAvailability || secondaryAvailability;
    }

}

export default new DraftRoomUtils();
