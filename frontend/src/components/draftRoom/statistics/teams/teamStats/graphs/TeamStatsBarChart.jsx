import React from "react";
import {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import playerData from "../../../../../../player-data.json";


class TeamStatsBarChart extends React.Component {

    render() {
        return (
            <ResponsiveContainer width="100%" height={this.props.height} >
                <BarChart data={playerData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" label=""/>
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="SC" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        )
    }

}

export default TeamStatsBarChart;
