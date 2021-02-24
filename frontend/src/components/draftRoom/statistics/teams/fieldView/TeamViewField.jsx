import React from "react";
import Field from '../../../../../images/FieldWithoutBackground.svg';
import withStyles from "@material-ui/core/styles/withStyles";
import TeamViewGrid from "./TeamViewGrid";

const fieldSizeMultiplier = 0.7;
const fieldWidth = 600 * fieldSizeMultiplier;
const fieldHeight = 720 * fieldSizeMultiplier;

const styles = {
    field: {
        backgroundImage: `url(${Field})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: fieldWidth,
        height: fieldHeight, // Originally 719.
        position: "relative",
    },
    playerGrid: {
        width: "80%",
        height: "100%",
        position: "absolute",
        top: "13%",
        left: "8.5%",
    }
}

class TeamViewField extends React.Component {

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.field}>
                <div className={classes.playerGrid}>
                    <TeamViewGrid />
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(TeamViewField);
