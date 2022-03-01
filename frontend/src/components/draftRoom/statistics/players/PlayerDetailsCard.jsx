import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {IconButton} from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import Typography from "@material-ui/core/Typography";
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import SCAverageGraph from "../../block/details/player/playerAnalysis/graphs/SCAverageGraph";

const styles = {
    container: {
        height: "var(--player-details-popper-height)",
        maxWidth: "1000px",
    },
    playerImage: {
        width: 188,
    },
    root: {
        display: 'flex',
    },
    hidden: {
        opacity: 0.01,
    }
}

class PlayerDetailsCard extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.triggerPopperUpdate();
        }, 250)
    }

    render() {
        const {classes} = this.props;

        if(this.props.player === null) {
            return null;
        }

        return (
            <Grid container component={Paper} elevation={5} className={[classes.container, this.props.areDetailsHidden ? classes.hidden : ''].join(' ')}>
                {/* Row 1. */}
                <Grid item xs={12}>
                    <IconButton onClick={this.props.triggerIconClosePlayerDetails}
                                style={{position: "absolute", right: 0, top: 0}}
                    >
                        <CancelIcon />
                    </IconButton>
                </Grid>
                {/* Row 2. */}
                <Grid item xs={7}>
                </Grid>
                <Grid item xs={5}>
                    <SCAverageGraph
                        playerId={this.props.player.id}
                        primaryPosition={this.props.player.primaryPosition}
                    />
                </Grid>
                {/* Row 3. */}
                <Grid item xs={7}>
                    <Typography>Add Stats Here.</Typography>
                </Grid>
                <Grid item xs={5}>
                    <SCAverageGraph
                        playerId={this.props.player.id}
                        primaryPosition={this.props.player.primaryPosition}
                    />
                </Grid>
                {/* Row 4. */}
                <Grid item xs={7}>
                    <Typography>Add More Stats Here.</Typography>
                </Grid>
                <Grid item xs={5}>
                    <SCAverageGraph
                        playerId={this.props.player.id}
                        primaryPosition={this.props.player.primaryPosition}
                    />
                </Grid>
            </Grid>
        )

    }

}

export default withStyles(styles)(PlayerDetailsCard);
