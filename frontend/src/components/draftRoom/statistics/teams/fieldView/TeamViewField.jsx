import React from "react";
import Field from '../../../../../images/FieldWithoutBackground.svg';
import withStyles from "@material-ui/core/styles/withStyles";
import TeamViewGrid from "./TeamViewGrid";

const styles = {
    rootContainer: {
        position: "relative",
    },
    fieldImage: {
      width: "100%",
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
            <>
            <div className={classes.rootContainer}>
                <img src={Field} className={classes.fieldImage} alt={"Field."}/>
                <div className={classes.playerGrid}>
                    <TeamViewGrid />
                </div>
            </div>
            </>
        )
    }
}

export default withStyles(styles)(TeamViewField);
