import React from "react";
import {Line, LineChart} from "recharts";
import playerData from "../../../../playerPerGame.json";

class GamesPlayedChart extends React.Component {

    render() {
        return (
            <LineChart width={400} height={400} data={playerData}>
                <Line type="monotone" dataKey="Games played" stroke="#8884d8" />
            </LineChart>
        )
    }

}

export default GamesPlayedChart;
