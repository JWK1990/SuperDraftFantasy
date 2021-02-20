import React from "react";
import {
    Bar,
    BarChart,
    CartesianGrid, Label,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import playerData from "../../../../playerPerGame.json";

class AverageChart extends React.Component {

    getTicks = () => {
        const ticks = [];
        for(let i=1; i < 24; i++) {
            ticks.push("Round " + i);
        }
        return ticks;
    }

    formatTicks = (tick) => {
        return "Rd " + tick.substring(6);
    }

    render() {
        // TODO - Pass in player and year as props.
        const uid = this.props.player + "_" + this.props.season + "_";
        console.log(uid);
        const averageData = playerData.filter(row => row.UID.includes(uid));
        const sum = averageData.reduce((a, b) => a + b[this.props.stat], 0);
        const average = sum / averageData.length;
        console.log(average);
        return (
            <ResponsiveContainer width={"100%"} height={400} >
                <BarChart data={averageData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="Round"
                        ticks={this.getTicks()}
                        tickFormatter={this.formatTicks}
                    />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey={this.props.stat} fill="#8884d8" />
                    <ReferenceLine y={average} stroke="green" strokeDasharray="3 3" strokeWidth="4">
                        <Label value="Ave" position="top" fontSize="22" />
                    </ReferenceLine>
                </BarChart>
            </ResponsiveContainer>
        )
    }

}

export default AverageChart;
