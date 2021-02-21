import React from "react";
import Field from '../../../../images/Field.svg';
import withStyles from "@material-ui/core/styles/withStyles";
import TeamFieldView from "./FieldView";

const fieldSizeMultiplier = 1.8;
const fieldWidth = 675 * fieldSizeMultiplier;
const fieldHeight = 719 * fieldSizeMultiplier;

const styles = {
    paperContainer: {
        backgroundImage: `url(${Field})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: fieldWidth,
        height: fieldHeight, // Originally 719.
        position: "relative",
    },
    positionsDiv: {
        width: "69%",
        height: "84%",
        position: "absolute",
        top: "13.8%",
        left: "15%",
    }
}

class TeamAnalysis extends React.Component {

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.paperContainer}>
                <div className={classes.positionsDiv}>
                    <TeamFieldView />
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(TeamAnalysis);
