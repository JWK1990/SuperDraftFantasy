import React from "react";
import TeamView from "../../../shared/TeamView";

const styles = {
    myTeamRoot: {
        height: "100%",
    },
    startingDiv: {
        height: "75%",
    },
    benchDiv: {
        height: "25%",
        display: "flex",
        alignItems: "end",
        paddingTop: "20%"
    },
    defDroppableStyle: {
        isDraggingOverColor: "red",
        droppableWidth: "80%", // 80% as pockets are narrower
        flexDirection: "row",
        height: "28.5%", // 2 rows.
        alignItems: "center",
        sidePadding: "10%",
    },
    midDroppableStyles: {
        isDraggingOverColor: "lightblue",
        droppableWidth: "100%", // 100% as wings are wider
        flexDirection: "row",
        height: "28.5%", // 2 rows.
        alignItems: "center",
        sidePadding: "0%",
    },
    rucDroppableStyles: {
        isDraggingOverColor: "yellow",
        droppableWidth: "100%", // 100% as wings are wider
        flexDirection: "row",
        height: "14.5%", // 1 rows.
        alignItems: "center",
        sidePadding: "0%",
    },
    fwdDroppableStyles: {
        isDraggingOverColor: "lightgreen",
        droppableWidth: "80%",// 80% as pockets are narrower
        flexDirection: "row",
        height: "28.5%", // 2 rows.
        alignItems: "center",
        sidePadding: "10%",
    },
    benchDroppableStyles: {
        isDraggingOverColor: "lightgrey",
        droppableWidth: "100%", // 100% as Bench can be wider
        flexDirection: "row",
        height: "40%", // 1 rows.
        alignItems: "end",
        sidePadding: "0%",
    },
}

class TeamFieldView extends React.Component {

    render() {
        return <TeamView
            type={"field"}
            styles={styles}
        />
    }
}

export default TeamFieldView;
