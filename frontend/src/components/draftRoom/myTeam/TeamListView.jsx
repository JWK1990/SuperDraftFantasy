import React from 'react';
import TeamView from "../../shared/TeamView";

const styles = {
    myTeamRoot: {
        height: "98%",
        width: "98%",
    },
    startingDiv: {
        height: "100%",
    },

    defDroppableStyle: {
        isDraggingOverColor: "red",
    },
    midDroppableStyles: {
        isDraggingOverColor: "lightblue",
    },
    rucDroppableStyles: {
        isDraggingOverColor: "yellow",
    },
    fwdDroppableStyles: {
        isDraggingOverColor: "lightgreen",
    },
    benchDroppableStyles: {
        isDraggingOverColor: "lightgrey",
    }
}

class TeamListView extends React.Component {

    render() {
        return <TeamView
            type={"list"}
            styles={styles}
        />
    }

}

export default TeamListView;




