import React from 'react';
import {DragDropContext} from 'react-beautiful-dnd';
import {
    currentTeamSelector,
    draftRosterSelector,
    numOfPlayersRequiredSelector
} from "../../../store/selectors/DraftSelectors";
import {connect} from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import DroppablePositionContainer from "./DroppablePositionContainer";
import {updateMyTeamPositionAction, updateMyTeamPositionSuccessAction} from "../../../store/actions";
import {stompClientSelector} from "../../../store/selectors/WebSocketSelectors";
import {isLeadBidderSelector} from "../../../store/selectors/BlockSelectors";

const styles = {
    myTeamRoot: {
        height: "98%",
        width: "98%",
    },
}

const defDroppableStyle = {
    isDraggingOverColor: "red",
}

const midDroppableStyles = {
    isDraggingOverColor: "lightblue",
}

const rucDroppableStyles = {
    isDraggingOverColor: "yellow",
}

const fwdDroppableStyles = {
    isDraggingOverColor: "lightgreen",
}

const benchDroppableStyles = {
    isDraggingOverColor: "lightgrey",
}

const getInitialMyTeamList = (roster, teamPlayerJoinList) => {
    const initialMyTeamList = {
            DEF: createSlots(roster.def, 0, "DEF"),
            MID: createSlots(roster.mid, roster.def, "MID"),
            RUC: createSlots(roster.ruc, roster.def + roster.mid, "RUC"),
            FWD: createSlots(roster.fwd, roster.def + roster.mid + roster.ruc, "FWD"),
            BENCH: createSlots(roster.bench, roster.def + roster.mid + roster.ruc + roster.fwd, "BENCH")
    };
    fillSlots(initialMyTeamList, teamPlayerJoinList)
    return initialMyTeamList;
};

const createSlots = (count, offset, position) => {
    return Array.from({ length: count }, (v, k) => k).map(k => {
        const id = k + offset;
        return createEmptySlot(id, position);
    });
};

const createEmptySlot = (id, position) => {
    return {
        id: `${id}`,
        position: `${position}`,
        dynamicSlotData: {vacant: true, player: null, price: null}
    }
}

const fillSlots = (myTeamList, teamPlayerJoinList) => {
    teamPlayerJoinList.forEach(teamPlayerJoin => {
        addPlayerToFirstVacantSlot(myTeamList, teamPlayerJoin);
    })
    return myTeamList;
}

const addPlayerToFirstVacantSlot = (myTeamList, teamPlayerJoin) => {
    if(teamPlayerJoin.myTeamPositionType != null) {
        const relevantPositionList = myTeamList[teamPlayerJoin.myTeamPositionType];
        const firstVacantSlot = relevantPositionList.find(slot => slot.dynamicSlotData.vacant);
        firstVacantSlot.dynamicSlotData.vacant = false;
        firstVacantSlot.dynamicSlotData.player = teamPlayerJoin.player;
        firstVacantSlot.dynamicSlotData.price = teamPlayerJoin.price;
    }
}

class MyTeam extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            myTeamList: {
                DEF: [],
                MID: [],
                RUC: [],
                FWD: [],
                BENCH: []
            },
            draggedPrimaryPosition: '',
            draggedSecondaryPosition: '',
            isDropDisabled: true,
            isDragging: false,
            errorText: '',
        };
    }

    componentWillMount() {
        this.setState({myTeamList: getInitialMyTeamList(this.props.roster, this.props.currentTeam.teamPlayerJoins)});
    }

    componentDidMount() {
        this.props.stompClient.subscribe('/draft/updateMyTeamPositions', this.receiveUpdatedMyTeamPosition)
    }

    componentWillUpdate(nextProps) {
        const newPlayerReceived = nextProps.currentTeam.teamPlayerJoins.length !== this.props.currentTeam.teamPlayerJoins.length;
        if(newPlayerReceived) {
            const playerToBeAdded = nextProps.currentTeam.teamPlayerJoins[nextProps.currentTeam.teamPlayerJoins.length -1];
            addPlayerToFirstVacantSlot(this.state.myTeamList, playerToBeAdded);
        }
    }

    receiveUpdatedMyTeamPosition = (payload) => {
        const updatedMyTeamPosition = JSON.parse(payload.body);
        this.props.updateMyTeamPositionSuccess(updatedMyTeamPosition);
    }

    movePlayers = (sourcePlayerList, destinationPlayerList, sourceDroppableInfo, destinationDroppableInfo) => {
        const sourcePlayerListClone = Array.from(sourcePlayerList);
        const sourceSlotData = sourcePlayerList[sourceDroppableInfo.index].dynamicSlotData;
        const sourcePosition = this.droppableList[sourceDroppableInfo.droppableId];

        const destinationPlayerListClone = Array.from(destinationPlayerList);
        const destinationSlotData = destinationPlayerList[destinationDroppableInfo.index].dynamicSlotData;
        const destinationPosition = this.droppableList[destinationDroppableInfo.droppableId];

        // Switch content of 2 switched slots.
        sourcePlayerListClone[sourceDroppableInfo.index].dynamicSlotData = destinationSlotData;
        destinationPlayerListClone[destinationDroppableInfo.index].dynamicSlotData = sourceSlotData;

        this.setState(prevState => ({
            ...prevState,
            myTeamList: {
                ...prevState.myTeamList,
                [sourcePosition]: sourcePlayerListClone,
                [destinationPosition]: destinationPlayerListClone
            },
            isDragging: false,
            draggedPrimaryPosition: '',
            draggedSecondaryPosition: '',
        }));

        // If move involves a position change.
        if(sourcePosition !== destinationPosition) {
            // Send a request to update the sourcePlayer's position in the DB.
            this.props.updateMyTeamPosition(this.props.currentTeam.id, sourceSlotData.player.id, destinationPosition);
            // If 2 players switched positions, also send a request to update the destinationPlayer's position in the DB.
            if(destinationSlotData.player != null) {
                this.props.updateMyTeamPosition(this.props.currentTeam.id, destinationSlotData.player.id, sourcePosition);
            }
        }

    };

    /**
     * A semi-generic way to handle multiple lists. Matches
     * the IDs of the droppable container to the names of the
     * source arrays stored in the state.
     */
    droppableList = {
        droppableDefs: 'DEF',
        droppableMids: 'MID',
        droppableRucs: 'RUC',
        droppableFwds: 'FWD',
        droppableBench: 'BENCH',
    };

    getPlayersByPosition = id => this.state.myTeamList[id];

    isDropDisabled = (dropPosition) => {
        // Disable drop if drop position isn't valid for current player.
        //const isDropPositionVacant = this.state.myTeamList[dropPosition].findIndex(slot => slot.content.vacant) > -1;
        const isDropPositionValid = dropPosition === "BENCH"
                                    || dropPosition.includes(this.state.draggedPrimaryPosition)
                                    || dropPosition.includes(this.state.draggedSecondaryPosition);
        //return !isDropPositionVacant || !isDropPositionValid || this.props.isLeadBidder;
        return !isDropPositionValid || this.props.isLeadBidder;
    };

    onDragStart = start => {
        const sourcePosition = this.droppableList[start.source.droppableId];
        const draggedSlot = this.getPlayersByPosition(sourcePosition)[start.source.index];
        this.setState({
            ...this.state,
            isDragging: true,
            draggedPrimaryPosition: draggedSlot.dynamicSlotData.player.primaryPosition,
            draggedSecondaryPosition: draggedSlot.dynamicSlotData.player.secondaryPosition,
        })
    }

    onDragEnd = result => {
        const { source, destination } = result;
        // Dropped outside the list.
        if (!destination) {
            this.setState({
                ...this.state,
                isDragging: false,
                draggedPrimaryPosition: '',
                draggedSecondaryPosition: ''
            })
        }
        // Moved to another list.
        else {
            const sourcePosition = this.droppableList[source.droppableId];
            const sourcePlayerList = this.getPlayersByPosition(sourcePosition);
            const destinationPosition = this.droppableList[destination.droppableId];
            const destinationPlayerList = this.getPlayersByPosition(destinationPosition);
            const destinationPlayer = destinationPlayerList[destination.index].dynamicSlotData.player;
            // If destination is vacant or is filled with a player that can be switched with the source player.
            if(!destinationPlayer
                || sourcePosition === "BENCH"
                || destinationPlayer.primaryPosition === sourcePosition
                || destinationPlayer.secondaryPosition === sourcePosition) {
                this.movePlayers(sourcePlayerList, destinationPlayerList, source, destination);
            }
        }
    };

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.myTeamRoot}>
                <DragDropContext onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}>
                    <DroppablePositionContainer
                        droppableId="droppableDefs"
                        isDragging={this.state.isDragging}
                        isDropDisabled={this.isDropDisabled("DEF")}
                        itemList={this.state.myTeamList.DEF}
                        styleProps={defDroppableStyle}
                        numOfPlayerRequired={this.props.numOfPlayersRequired}
                    />
                    <DroppablePositionContainer
                        droppableId="droppableMids"
                        isDragging={this.state.isDragging}
                        isDropDisabled={this.isDropDisabled("MID")}
                        itemList={this.state.myTeamList.MID}
                        styleProps={midDroppableStyles}
                        numOfPlayerRequired={this.props.numOfPlayersRequired}
                    />
                    <DroppablePositionContainer
                        droppableId="droppableRucs"
                        isDragging={this.state.isDragging}
                        isDropDisabled={this.isDropDisabled("RUC")}
                        itemList={this.state.myTeamList.RUC}
                        styleProps={rucDroppableStyles}
                        numOfPlayerRequired={this.props.numOfPlayersRequired}
                    />
                    <DroppablePositionContainer
                        droppableId="droppableFwds"
                        isDragging={this.state.isDragging}
                        isDropDisabled={this.isDropDisabled("FWD")}
                        itemList={this.state.myTeamList.FWD}
                        styleProps={fwdDroppableStyles}
                        numOfPlayerRequired={this.props.numOfPlayersRequired}
                    />
                    <DroppablePositionContainer
                        droppableId="droppableBench"
                        isDragging={this.state.isDragging}
                        isDropDisabled={this.isDropDisabled("BENCH")}
                        itemList={this.state.myTeamList.BENCH}
                        styleProps={benchDroppableStyles}
                        numOfPlayerRequired={this.props.numOfPlayersRequired}
                    />
                </DragDropContext>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateMyTeamPosition: (teamId, playerId, position) => dispatch(updateMyTeamPositionAction(teamId, playerId, position)),
    updateMyTeamPositionSuccess: (team) => dispatch(updateMyTeamPositionSuccessAction(team)),
})

const mapStateToProps = state => {
    return {
        roster: draftRosterSelector(state),
        currentTeam: currentTeamSelector(state),
        numOfPlayersRequired: numOfPlayersRequiredSelector(state),
        stompClient: stompClientSelector(state),
        isLeadBidder: isLeadBidderSelector(state),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MyTeam));
