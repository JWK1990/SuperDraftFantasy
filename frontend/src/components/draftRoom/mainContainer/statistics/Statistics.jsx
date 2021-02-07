import React from "react";
import GamesPlayedChart from "./GamesPlayedChart";
import AverageChart from "./AverageChart";

class DraftRoomStatistics extends React.Component {

    render() {
        return (
            <div>
                <GamesPlayedChart />
                <AverageChart/>
            </div>
        )
    }

}

export default DraftRoomStatistics;
