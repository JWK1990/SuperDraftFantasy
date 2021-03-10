import React from "react";
import {
    Bar,
    CartesianGrid,
    ComposedChart,
    Line,
    ReferenceLine,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    customTooltip: {
        backgroundColor: "grey",
    }
}));

export default function PlayerAnalysisGraph(props) {
    const classes = useStyles();

    // TODO - Map data.
    // Calculate CumulativeAverage for Line Chart.
    const data = [
        {
            PlayerID: 757,
            Name: "Wingard, Chad",
            RD: 1,
            SC: 110,
            Disposals: 40,
            Description: 'Home vs Kangaroos',
            CumulativeAverage: 40,
        },
        {
            PlayerID: 757,
            Name: "Wingard, Chad",
            RD: 2,
            SC: 50,
            Disposals: 40,
            Description: 'Home vs Melbourne',
            CumulativeAverage: 45,
        },
        {
            PlayerID: 757,
            Name: "Wingard, Chad",
            RD: 3,
            SC: 70,
            Disposals: 30,
            Description: 'Home vs Kangaroos',
            CumulativeAverage: 55,
        },
        {
            PlayerID: 757,
            Name: "Wingard, Chad",
            RD: 4,
            SC: 50,
            Disposals: 20,
            Description: 'Home vs Kangaroos',
            CumulativeAverage: 45,
        },
        {
            PlayerID: 757,
            Name: "Wingard, Chad",
            RD: 5,
            SC: 80,
            Description: 'Home vs Kangaroos',
            CumulativeAverage: 70,
        },
        {
            PlayerID: 757,
            Name: "Wingard, Chad",
            RD: 6,
            SC: 50,
            Description: 'Home vs Kangaroos',
            CumulativeAverage: 80,
        },
        {
            PlayerID: 757,
            Name: "Wingard, Chad",
            RD: 7,
            SC: 50,
        },
        {
            PlayerID: 757,
            Name: "Wingard, Chad",
            RD: 8,
            SC: 220,
        },
        {
            PlayerID: 757,
            Name: "Wingard, Chad",
            RD: 9,
            SC: 110,
        },
        {
            PlayerID: 757,
            Name: "Wingard, Chad",
            RD: 10,
            SC: 50,
        },
        {
            PlayerID: 757,
            Name: "Wingard, Chad",
            RD: 11,
            SC: 70,
        },
        {
            PlayerID: 757,
            Name: "Wingard, Chad",
            RD: 12,
            SC: 50,
        },
        {
            PlayerID: 757,
            Name: "Wingard, Chad",
            RD: 13,
            SC: 80,
        },
        {
            PlayerID: 757,
            Name: "Wingard, Chad",
            RD: 14,
            SC: 50,
        },
        {
            PlayerID: 757,
            Name: "Wingard, Chad",
            RD: 15,
            SC: 50,
        },
        {
            PlayerID: 757,
            Name: "Wingard, Chad",
            RD: 16,
            SC: 220,
        },
        {
            PlayerID: 757,
            Name: "Wingard, Chad",
            RD: 17,
            SC: 110,
        },
        {
            PlayerID: 757,
            Name: "Wingard, Chad",
            RD: 18,
            SC: 50,
        },
        {
            PlayerID: 757,
            Name: "Wingard, Chad",
            RD: 19,
            SC: 70,
        },
        {
            PlayerID: 757,
            Name: "Wingard, Chad",
            RD: 20,
            SC: 95,
        },
        {
            PlayerID: 757,
            Name: "Wingard, Chad",
            RD: 21,
            SC: 55,
        },
        {
            PlayerID: 757,
            Name: "Wingard, Chad",
            RD: 22,
            SC: 50,
        },
        {
            PlayerID: 757,
            Name: "Wingard, Chad",
            RD: 23,
            SC: 110,
        },
        {
            PlayerID: 757,
            Name: "Wingard, Chad",
            RD: 24,
            SC: 150,
        },
        {
            PlayerID: 757,
            Name: "Wingard, Chad",
            RD: 25,
            SC: 19,
        },
        {
            PlayerID: 757,
            Name: "Wingard, Chad",
            RD: 26,
            SC: 80,
        },
    ];

    const referenceLineValue = 80;

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className={classes.customTooltip}>
                    <p className={classes.round}>{`Rd ${label} - ${data[label-1].Description}`}</p>
                    <p className={classes.scScore}>{`${payload[0].dataKey}: ${payload[0].value}`}</p>
                    <p className={classes.disposals}>{`Disposals: ${data[label-1].Disposals}`}</p>
                </div>
            );
        }
        return null;
    };
    return (
        <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 5,
                    right: 10,
                    bottom: 5,
                    left: -10,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="RD" scale="band" tick={false} />
                <YAxis />
                <Tooltip content={CustomTooltip}/>
                <Bar dataKey="SC" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="CumulativeAverage" stroke="yellow"/>
                <ReferenceLine y={referenceLineValue} stroke="green" label={{ value: 'PosAv', fill: 'green' }}/>
            </ComposedChart>
        </ResponsiveContainer>
    )

}
