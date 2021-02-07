import React from "react";
import {Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import playerData from "../../../../player-data.json";

class AverageChart extends React.Component {

    render() {
        return (
            <BarChart width={730} height={250} data={playerData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="SC" fill="#8884d8" />
            </BarChart>
        )
    }

}

export default AverageChart;
