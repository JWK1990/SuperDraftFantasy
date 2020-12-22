import React from "react";
import Field from '../../../../images/Field.svg';
import withStyles from "@material-ui/core/styles/withStyles";
import FieldView from "./FieldView";

const styles = {
    paperContainer: {
        backgroundImage: `url(${Field})`,
        backgroundSize: "cover",
        width: 675 * 2,
        height: 719 * 2,
        position: "relative",
    },
    positionsDiv: {
        width: 1000,
        height: 1000,
        position: "absolute",
        top: 214,
        left: 172,
    }
}

class TeamAnalysis extends React.Component {

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.paperContainer}>
                <div className={classes.positionsDiv}>
                    <FieldView />
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(TeamAnalysis);
