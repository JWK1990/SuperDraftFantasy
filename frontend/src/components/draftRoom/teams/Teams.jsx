import React from "react";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import {reorderTeamListAction} from "../../../store/actions";
import {connect} from "react-redux";
import {DraftStatusEnum} from "../../../models/DraftStatusEnum";
import {
    draftSelector,
    draftStatusSelector,
    draftTeamsSelector,
    numOfPlayersRequiredSelector
} from "../../../store/selectors/DraftSelectors";
import {stompClientSelector} from "../../../store/selectors/WebSocketSelectors";
import DraggableTeamContainer from "./DraggableTeamContainer";
import {onTheBlockTeamIdSelector} from "../../../store/selectors/BlockSelectors";

const grid = 8;

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: grid,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
});

const getSortableTeamList = (teamList, numOfSlots) => {
    teamList.sort((teamA, teamB) => teamA.orderIndex - teamB.orderIndex);
    return Array.from({ length: numOfSlots }, (v, k) => k).map(k => ({
        id: `item-${teamList[k] ?
            teamList[k].orderIndex
            : k}`,
        content: teamList[k] ?
            {id: teamList[k].id, team: teamList[k], isVacant: false, isLoading: false}
            : {id: k+1, team: "VACANT", isVacant: true, isLoading: false}
    }));
}

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

class DraftRoomTeams extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sortableTeamList: getSortableTeamList(props.teams, props.draft.numOfTeams)
        };
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    componentDidMount() {
        this.props.stompClient.subscribe('/draft/reorderTeamLists', this.receiveReorderTeamList);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.teams !== this.props.teams) {
            this.setState({sortableTeamList: getSortableTeamList(this.props.teams, this.props.draft.numOfTeams)});
        }
    }

    sendReorderTeamList = (reorderedTeamIdList) => {
        const reorderTeamListDto = {draftId: this.props.draft.id, teamIdList: reorderedTeamIdList};
        this.props.stompClient.send("/app/reorderTeamList", {}, JSON.stringify(reorderTeamListDto));
    }

    receiveReorderTeamList = (payload) => {
        const updatedSortedTeamIdList = JSON.parse(payload.body);
        this.props.updateTeamOrder(updatedSortedTeamIdList);
    }

    onDragEnd(result) {
        // dropped outside the list
        if (!result.destination || result.source.index === result.destination.index) {
            return;
        }

        const reorderedSortableTeamList = reorder(
            this.state.sortableTeamList,
            result.source.index,
            result.destination.index
        );

        this.setState({sortableTeamList: reorderedSortableTeamList});

        const reorderedTeamIdList = reorderedSortableTeamList.map(sortableTeam => sortableTeam.content.id);
        this.sendReorderTeamList(reorderedTeamIdList);
    }

    draggableHeight = 98/this.props.draft.numOfTeams;

    render() {
        return (
            <div className="teamList">
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={getListStyle(snapshot.isDraggingOver)}
                            >
                                {this.state.sortableTeamList.map((item, index) => (
                                    <DraggableTeamContainer
                                        item={item}
                                        index={index}
                                        key={item.id}
                                        isReorderDisabled={this.props.draftStatus !== DraftStatusEnum.READY}
                                        draggableHeight={this.draggableHeight}
                                        numOfPlayersRequired={this.props.numOfPlayersRequired}
                                        isOnTheBlock={this.props.onTheBlockTeamId === item.content.team.id}
d                                    />
                                ))}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        stompClient: stompClientSelector(state),
        draft: draftSelector(state),
        draftStatus: draftStatusSelector(state),
        teams: draftTeamsSelector(state),
        numOfPlayersRequired: numOfPlayersRequiredSelector(state),
        onTheBlockTeamId: onTheBlockTeamIdSelector(state),
    };
};

const mapDispatchToProps = dispatch => ({
    updateTeamOrder: (teamList) => dispatch(reorderTeamListAction(teamList)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DraftRoomTeams);
