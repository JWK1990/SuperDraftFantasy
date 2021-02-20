import React from "react";
import AverageChart from "./AverageChart";

class DraftRoomStatistics extends React.Component {

    seasonSelector = "2015";
    playerSelector = "Sam Docherty";
    statSelector = "I50";


    render() {
        return (
            <div>
                <AverageChart
                    season={this.seasonSelector}
                    player={this.playerSelector}
                    stat={this.statSelector}
                />
            </div>
        )
    }

}

export default DraftRoomStatistics;
