import React from "react";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import {reorderTeamListAction} from "../../../store/actions";
import {connect} from "react-redux";
import {DraftStatusEnum} from "../../../models/DraftStatusEnum";

const getSortableTeamList = teamList => {
    teamList.sort((teamA, teamB) => teamA.orderIndex - teamB.orderIndex);
    return Array.from({ length: teamList.length }, (v, k) => k).map(k => ({
        id: `item-${teamList[k].orderIndex}`,
        content: {id: teamList[k].id, name: teamList[k].name}
    }));
}


// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the sortableTeamList look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "lightblue",

    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: grid,
    width: 250
});

class DraftRoomTeams extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sortableTeamList: getSortableTeamList(props.teams)
        };
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    componentDidMount() {
        this.props.stompClient.subscribe('/draft/reorderTeamLists', this.receiveReorderTeamList);
    }

    sendReorderTeamList = (reorderedTeamIdList) => {
        const reorderTeamListDto = {draftId: this.props.draftId, teamIdList: reorderedTeamIdList};
        this.props.stompClient.send("/app/reorderTeamList", {}, JSON.stringify(reorderTeamListDto));
    }

    receiveReorderTeamList = (payload) => {
        console.log('ReorderTeamList Received: ', payload);
        const updatedSortedTeamIdList = JSON.parse(payload.body);
        this.props.updateTeamOrder(updatedSortedTeamIdList);
        this.setState({sortableTeamList: getSortableTeamList(this.props.teams)});
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

        const reorderedTeamIdList = reorderedSortableTeamList.map(sortableTeam => sortableTeam.content.id);
        this.sendReorderTeamList(reorderedTeamIdList);
    }

    isReorderDisabled() {
        return this.props.draftStatus !== DraftStatusEnum.READY;
    }

    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}
                        >
                            {this.state.sortableTeamList.map((item, index) => (
                                <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}
                                    isDragDisabled={this.isReorderDisabled()}
                                >
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={getItemStyle(
                                                snapshot.isDragging,
                                                provided.draggableProps.style
                                            )}
                                        >
                                            {item.content.name}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateTeamOrder: (teamList) => dispatch(reorderTeamListAction(teamList))
});

export default connect(null, mapDispatchToProps)(DraftRoomTeams);
