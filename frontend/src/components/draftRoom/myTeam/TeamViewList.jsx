import React from 'react';
import TeamView from "../../shared/teamView/TeamView";
import {currentTeamIdSelector} from "../../../store/selectors/DraftSelectors";
import {connect} from "react-redux";

const grid = 4;

const styles = {
    baseStyles: {
        myTeamRoot: {
            height: "98%",
            width: "98%",
        },
    },
    droppableStyles: {
        def: {
            isDraggingOverColor: "red",
        },
        mid: {
            isDraggingOverColor: "lightblue",
        },
        ruc: {
            isDraggingOverColor: "yellow",
        },
        fwd: {
            isDraggingOverColor: "lightgreen",
        },
        bench: {
            isDraggingOverColor: "lightgrey",
        },
    },
    draggableStyles: {
        root: {
            userSelect: 'none',
            position: 'static',
            padding: grid,
            margin: `0 0 ${grid}px 0`,
            border: "3px solid",
            height: "100%",
            draggingBackgroundColor: "white",
            vacantBackgroundColor: "lightslategrey",
        },
        def: {
            borderColor: "red",
            backgroundColor: "lightsalmon"
        },
        mid: {
            borderColor: "blue",
            backgroundColor: "lightblue"
        },
        ruc: {
            borderColor: "yellow",
            backgroundColor: "lightyellow"
        },
        fwd: {
            borderColor: "green",
            backgroundColor: "lightgreen"
        },
        bench: {
            borderColor: "black",
            backgroundColor: "lightgrey"
        },
        playerDetailsContainer: {
            height: "100%",
        },
    }
}


const functions = {
    getDynamicDroppableStyle: (isDraggingOver, styleProps, droppableHeight, isDropDisabled) => ({
        background: isDraggingOver ? styleProps.isDraggingOverColor : 'white',
        padding: grid,
        transform: 'none',
        height: `calc(${droppableHeight}% - ${(grid * 2)}px`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        opacity: isDropDisabled ? "0.15" : "1",
    }),
}


class TeamViewList extends React.Component {

    render() {
        return <TeamView
            type={"list"}
            styles={styles}
            functions={functions}
            teamId={this.props.teamId}
        />
    }

}

const mapStateToProps = state => {
    return {
        teamId: currentTeamIdSelector(state),
    };
};

export default connect(mapStateToProps)(TeamViewList);
