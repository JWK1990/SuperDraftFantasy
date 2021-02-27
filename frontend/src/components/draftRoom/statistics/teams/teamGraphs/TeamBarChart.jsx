import React from "react";
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import playerData from "../../../../../player-data.json";


class TeamBarChart extends React.Component {

    render() {
        return (
            <ResponsiveContainer width="100%" height={320} >
                <BarChart data={playerData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="SC" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        )
    }

}

export default TeamBarChart;
