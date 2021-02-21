import React from "react";
import {DragDropContext} from "react-beautiful-dnd";
import DroppablePositionContainer from "../draftRoom/myTeam/DroppablePositionContainer";
import {updateMyTeamPositionAction, updateMyTeamPositionSuccessAction} from "../../store/actions";
import {
    currentTeamSelector,
    draftRosterSelector,
    numOfPlayersRequiredSelector
} from "../../store/selectors/DraftSelectors";
import {stompClientSelector} from "../../store/selectors/WebSocketSelectors";
import {isLeadBidderSelector} from "../../store/selectors/BlockSelectors";
import {connect} from "react-redux";
import {ConditionalWrapper} from "./ConditionalWrapper";

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
        this.setState({myTeamList: this.getInitialMyTeamList(this.props.roster, this.props.currentTeam.teamPlayerJoins)});
    }

    componentDidMount() {
        this.props.stompClient.subscribe('/draft/updateMyTeamPositions', this.receiveUpdatedMyTeamPosition)
    }

    componentWillUpdate(nextProps) {
        const newPlayerReceived = nextProps.currentTeam.teamPlayerJoins.length !== this.props.currentTeam.teamPlayerJoins.length;
        if(newPlayerReceived) {
            const playerToBeAdded = nextProps.currentTeam.teamPlayerJoins[nextProps.currentTeam.teamPlayerJoins.length -1];
            this.addPlayerToFirstVacantSlot(this.state.myTeamList, playerToBeAdded);
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
            const relevantPositionList = myTeamList[teamPlayerJoin.myTeamPositionType];
            const firstVacantSlot = relevantPositionList.find(slot => slot.dynamicSlotData.vacant);
            firstVacantSlot.dynamicSlotData.vacant = false;
            firstVacantSlot.dynamicSlotData.player = teamPlayerJoin.player;
            firstVacantSlot.dynamicSlotData.price = teamPlayerJoin.price;
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
        const styles = this.props.styles;

        return (
            <div style={styles.myTeamRoot}>
                <DragDropContext onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}>
                    <ConditionalWrapper
                        condition={this.props.type === "field"}
                        wrapper={children => <div className="startingDiv">{children}</div>}
                    >
                        <DroppablePositionContainer
                            droppableId="droppableDefs"
                            isDragging={this.state.isDragging}
                            isDropDisabled={this.isDropDisabled("DEF")}
                            itemList={this.state.myTeamList.DEF}
                            styleProps={styles.defDroppableStyle}
                            numOfPlayerRequired={this.props.numOfPlayersRequired}
                        />
                        <DroppablePositionContainer
                            droppableId="droppableMids"
                            isDragging={this.state.isDragging}
                            isDropDisabled={this.isDropDisabled("MID")}
                            itemList={this.state.myTeamList.MID}
                            styleProps={styles.midDroppableStyles}
                            numOfPlayerRequired={this.props.numOfPlayersRequired}
                        />
                        <DroppablePositionContainer
                            droppableId="droppableRucs"
                            isDragging={this.state.isDragging}
                            isDropDisabled={this.isDropDisabled("RUC")}
                            itemList={this.state.myTeamList.RUC}
                            styleProps={styles.rucDroppableStyles}
                            numOfPlayerRequired={this.props.numOfPlayersRequired}
                        />
                        <DroppablePositionContainer
                            droppableId="droppableFwds"
                            isDragging={this.state.isDragging}
                            isDropDisabled={this.isDropDisabled("FWD")}
                            itemList={this.state.myTeamList.FWD}
                            styleProps={styles.fwdDroppableStyles}
                            numOfPlayerRequired={this.props.numOfPlayersRequired}
                        />
                    </ConditionalWrapper>
                    <ConditionalWrapper
                        condition={this.props.type === "field"}
                        wrapper={children => <div className="benchDiv">{children}</div>}
                    >
                            <DroppablePositionContainer
                                droppableId="droppableBench"
                                isDragging={this.state.isDragging}
                                isDropDisabled={this.isDropDisabled("BENCH")}
                                itemList={this.state.myTeamList.BENCH}
                                styleProps={styles.benchDroppableStyles}
                                numOfPlayerRequired={this.props.numOfPlayersRequired}
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

const mapStateToProps = state => {
    return {
        roster: draftRosterSelector(state),
        currentTeam: currentTeamSelector(state),
        numOfPlayersRequired: numOfPlayersRequiredSelector(state),
        stompClient: stompClientSelector(state),
        isLeadBidder: isLeadBidderSelector(state),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamView);
