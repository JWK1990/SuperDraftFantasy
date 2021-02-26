import React from "react";
import TeamView from "../../../../shared/teamView/TeamView";
import {connect} from "react-redux";
import {currentDraftStatisticsTeamIdSelector} from "../../../../../store/selectors/NavigationSelectors";

const grid = 4;

const styles = {
    baseStyles: {
        myTeamRoot: {
            height: "100%",
        },
        startingDiv: {
            height: "75%",
        },
        benchDiv: {
            height: "25%",
            paddingTop: "16%",
        },
    },
    droppableStyles: {
        def: {
            isDraggingOverColor: "red",
            droppableWidth: "80%", // 80% as pockets are narrower
            flexDirection: "row",
            height: "28.5%", // 2 rows.
            alignItems: "center",
            sidePadding: "10%",
        },
        mid: {
            isDraggingOverColor: "lightblue",
            droppableWidth: "100%", // 100% as wings are wider
            flexDirection: "row",
            height: "28.5%", // 2 rows.
            alignItems: "center",
            sidePadding: "0%",
        },
        ruc: {
            isDraggingOverColor: "yellow",
            droppableWidth: "100%", // 100% as wings are wider
            flexDirection: "row",
            height: "14.5%", // 1 rows.
            alignItems: "center",
            sidePadding: "0%",
        },
        fwd: {
            isDraggingOverColor: "lightgreen",
            droppableWidth: "80%",// 80% as pockets are narrower
            flexDirection: "row",
            height: "28.5%", // 2 rows.
            alignItems: "center",
            sidePadding: "10%",
        },
        bench: {
            isDraggingOverColor: "lightgrey",
            droppableWidth: "100%", // 100% as Bench can be wider
            flexDirection: "row",
            height: "40%", // 1 rows.
            alignItems: "end",
            sidePadding: "0%",
        },
    },
    draggableStyles: {
        root: {
            userSelect: 'none',
            position: 'static',
            padding: grid,
            margin: `0 0 ${grid}px 0`,
            border: "1px solid",
            marginLeft: "1%",
            //minHeight: 20,
            draggingBackgroundColor: "white",
            vacantBackgroundColor: "lightslategrey",
        },
        def: {
            borderColor: "red",
            backgroundColor: "lightsalmon",
            width: "calc(27.5% - 5px)",
            height: "calc(40% - 5px)", // 40% because it's 2 rows.
        },
        mid: {
            borderColor: "blue",
            backgroundColor: "lightblue",
            width: "calc(22% - 5px)",
            height: "calc(40% - 5px)", // 40% because it's 2 rows.
        },
        ruc: {
            borderColor: "yellow",
            backgroundColor: "lightyellow",
            width: "calc(22% - 5px)",
            height: "calc(80% - 5px)", // 80% because it's 1 row.
        },
        fwd: {
            borderColor: "green",
            backgroundColor: "lightgreen",
            width: "calc(27.5% - 5px)",
            height: "calc(40% - 5px)", // 40% because it's 2 rows.
        },
        bench: {
            borderColor: "black",
            backgroundColor: "lightgrey",
            width: "calc(22% - 5px)",
            height: "calc(80% - 5px)", // 80% because it's 1 row.
        },
        playerDetailsContainer: {
            height: "100%",
        },
    }
}

const functions = {
    getDynamicDroppableStyle: (isDraggingOver, styleProps, droppableHeight, isDropDisabled) => ({
        background: isDraggingOver ? styleProps.isDraggingOverColor : 'rgba(0, 0, 0, 0)',
        transform: 'none',
        display: "flex",
        flexDirection: styleProps.flexDirection,
        justifyContent: "center",
        opacity: isDropDisabled ? "0.15" : "1",
        height: styleProps.height,
        width: styleProps.droppableWidth,
        flexWrap: "wrap",
        margin: "0 auto",
        alignItems: styleProps.alignItems,
        paddingLeft: styleProps.sidePadding,
        paddingRight: styleProps.sidePadding,
    }),
}


class TeamViewGrid extends React.Component {

    render() {
            return (
                <TeamView
                    type={"field"}
                    styles={styles}
                    functions={functions}
                    teamId={this.props.selectedTeamId}
                />
            )
    }

}

const mapStateToProps = (state) => {
    return {
        selectedTeamId: currentDraftStatisticsTeamIdSelector(state),
    };
};

export default connect(mapStateToProps)(TeamViewGrid);
