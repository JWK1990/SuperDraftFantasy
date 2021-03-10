export const initialBlockData = {
    draftId: '',
    playerId: '',
    onTheBlockTeamId: '',
    bidderTeamId: '',
    myTeamPosition: '',
    price: '',
    onTheBlockTimer: '',
    bidTimer: '',
    endTime: '',
    player: '',
}

export const initialBlockState = {
    loading: false,
    error: null,
    data: initialBlockData,
    isBidDisabled: true,
    clockText: null,
    clockKey: 0,
};
