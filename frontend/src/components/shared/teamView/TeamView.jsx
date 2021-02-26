import React from "react";
import {DragDropContext} from "react-beautiful-dnd";
import DroppablePositionContainer from "./DroppablePositionContainer";
import {updateMyTeamPositionAction, updateMyTeamPositionSuccessAction} from "../../../store/actions";
import {
    draftRosterSelector,
    draftTeamSelector,
    numOfPlayersRequiredSelector
} from "../../../store/selectors/DraftSelectors";
import {stompClientSelector} from "../../../store/selectors/WebSocketSelectors";
import {isLeadBidderSelector} from "../../../store/selectors/BlockSelectors";
import {connect} from "react-redux";
import {ConditionalWrapper} from "../ConditionalWrapper";

class TeamView extends React.Component {

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
        this.setState({myTeamList: this.getInitialMyTeamList(this.props.roster, this.props.team.teamPlayerJoins)});
    }

    componentDidMount() {
        this.props.stompClient.subscribe('/draft/updateMyTeamPositions', this.receiveUpdatedMyTeamPosition)
    }

    componentWillUpdate(nextProps) {
        // Different Team selected so we update team list.
        if(nextProps.team.id !== this.props.team.id) {
            this.setState({myTeamList: this.getInitialMyTeamList(this.props.roster, nextProps.team.teamPlayerJoins)});
        }
        // New player added to current Team so we update team list.
        else {
            const newPlayerReceived = nextProps.team.teamPlayerJoins.length !== this.props.team.teamPlayerJoins.length;
            if(newPlayerReceived) {
                const playerToBeAdded = nextProps.team.teamPlayerJoins[nextProps.team.teamPlayerJoins.length -1];
                this.addPlayerToFirstVacantSlot(this.state.myTeamList, playerToBeAdded);
            }
        }

    }

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

    getInitialMyTeamList = (roster, teamPlayerJoinList) => {
        const initialMyTeamList = {
            DEF: this.createSlots(roster.def, 0, "DEF"),
            MID: this.createSlots(roster.mid, roster.def, "MID"),
            RUC: this.createSlots(roster.ruc, roster.def + roster.mid, "RUC"),
            FWD: this.createSlots(roster.fwd, roster.def + roster.mid + roster.ruc, "FWD"),
            BENCH: this.createSlots(roster.bench, roster.def + roster.mid + roster.ruc + roster.fwd, "BENCH")
        };
        this.fillSlots(initialMyTeamList, teamPlayerJoinList)
        return initialMyTeamList;
    };

    createSlots = (count, offset, position) => {
        return Array.from({ length: count }, (v, k) => k).map(k => {
            const id = k + offset;
            return this.createEmptySlot(id, position);
        });
    };

    createEmptySlot = (id, position) => {
        return {
            id: `${id}`,
            position: `${position}`,
            dynamicSlotData: {vacant: true, player: null, price: null}
        }
    }

    fillSlots = (myTeamList, teamPlayerJoinList) => {
        teamPlayerJoinList.forEach(teamPlayerJoin => {
            this.addPlayerToFirstVacantSlot(myTeamList, teamPlayerJoin);
        })
        return myTeamList;
    }

    addPlayerToFirstVacantSlot = (myTeamList, teamPlayerJoin) => {
        if(teamPlayerJoin.myTeamPositionType != null) {
            const myTeamListCopy = {...myTeamList};
            const relevantPositionListCopy = myTeamListCopy[teamPlayerJoin.myTeamPositionType];
            const firstVacantSlot = relevantPositionListCopy.find(slot => slot.dynamicSlotData.vacant);
            firstVacantSlot.dynamicSlotData.vacant = false;
            firstVacantSlot.dynamicSlotData.player = teamPlayerJoin.player;
            firstVacantSlot.dynamicSlotData.price = teamPlayerJoin.price;
            this.setState(prevState => ({
                ...prevState,
                myTeamList: myTeamListCopy
            }))
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
            this.props.updateMyTeamPosition(this.props.team.id, sourceSlotData.player.id, destinationPosition);
            // If 2 players switched positions, also send a request to update the destinationPlayer's position in the DB.
            if(destinationSlotData.player != null) {
                this.props.updateMyTeamPosition(this.props.team.id, destinationSlotData.player.id, sourcePosition);
            }
        }

    };

    isDropDisabled = (dropPosition) => {
        const isDropPositionValid = dropPosition === "BENCH"
            || dropPosition.includes(this.state.draggedPrimaryPosition)
            || dropPosition.includes(this.state.draggedSecondaryPosition);
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
        const baseStyles = this.props.styles.baseStyles;
        const droppableStyles = this.props.styles.droppableStyles;
        const draggableStyles = this.props.styles.draggableStyles;
        const functions = this.props.functions;

        return (
            <div style={baseStyles.myTeamRoot}>
                <DragDropContext onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}>
                    <ConditionalWrapper
                        condition={this.props.type === "field"}
                        wrapper={children => <div style={baseStyles.startingDiv}>{children}</div>}
                    >
                        <DroppablePositionContainer
                            droppableId="droppableDefs"
                            isDragging={this.state.isDragging}
                            isDropDisabled={this.isDropDisabled("DEF")}
                            itemList={this.state.myTeamList.DEF}
                            styleProps={droppableStyles.def}
                            getDynamicDroppableStyle={functions.getDynamicDroppableStyle}
                            numOfPlayerRequired={this.props.numOfPlayersRequired}
                            draggableStyles={draggableStyles}
                            isDraggingDisabled={this.props.isDraggingDisabled}
                        />
                        <DroppablePositionContainer
                            droppableId="droppableMids"
                            isDragging={this.state.isDragging}
                            isDropDisabled={this.isDropDisabled("MID")}
                            itemList={this.state.myTeamList.MID}
                            styleProps={droppableStyles.mid}
                            getDynamicDroppableStyle={functions.getDynamicDroppableStyle}
                            numOfPlayerRequired={this.props.numOfPlayersRequired}
                            draggableStyles={draggableStyles}
                            isDraggingDisabled={this.props.isDraggingDisabled}
                        />
                        <DroppablePositionContainer
                            droppableId="droppableRucs"
                            isDragging={this.state.isDragging}
                            isDropDisabled={this.isDropDisabled("RUC")}
                            itemList={this.state.myTeamList.RUC}
                            styleProps={droppableStyles.ruc}
                            getDynamicDroppableStyle={functions.getDynamicDroppableStyle}
                            numOfPlayerRequired={this.props.numOfPlayersRequired}
                            draggableStyles={draggableStyles}
                            isDraggingDisabled={this.props.isDraggingDisabled}
                        />
                        <DroppablePositionContainer
                            droppableId="droppableFwds"
                            isDragging={this.state.isDragging}
                            isDropDisabled={this.isDropDisabled("FWD")}
                            itemList={this.state.myTeamList.FWD}
                            styleProps={droppableStyles.fwd}
                            getDynamicDroppableStyle={functions.getDynamicDroppableStyle}
                            numOfPlayerRequired={this.props.numOfPlayersRequired}
                            draggableStyles={draggableStyles}
                            isDraggingDisabled={this.props.isDraggingDisabled}
                        />
                    </ConditionalWrapper>
                    <ConditionalWrapper
                        condition={this.props.type === "field"}
                        wrapper={children => <div style={baseStyles.benchDiv}>{children}</div>}
                    >
                            <DroppablePositionContainer
                                droppableId="droppableBench"
                                isDragging={this.state.isDragging}
                                isDropDisabled={this.isDropDisabled("BENCH")}
                                itemList={this.state.myTeamList.BENCH}
                                styleProps={droppableStyles.bench}
                                getDynamicDroppableStyle={functions.getDynamicDroppableStyle}
                                numOfPlayerRequired={this.props.numOfPlayersRequired}
                                draggableStyles={draggableStyles}
                                isDraggingDisabled={this.props.isDraggingDisabled}
                            />
                    </ConditionalWrapper>
                </DragDropContext>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateMyTeamPosition: (teamId, playerId, position) => dispatch(updateMyTeamPositionAction(teamId, playerId, position)),
    updateMyTeamPositionSuccess: (team) => dispatch(updateMyTeamPositionSuccessAction(team)),
})

const mapStateToProps = (state, props) => {
    return {
        roster: draftRosterSelector(state),
        numOfPlayersRequired: numOfPlayersRequiredSelector(state),
        stompClient: stompClientSelector(state),
        isLeadBidder: isLeadBidderSelector(state),
        team: draftTeamSelector(state, props.teamId),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamView);
