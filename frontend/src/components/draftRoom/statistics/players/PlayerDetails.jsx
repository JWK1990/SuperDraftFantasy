import React from "react";
import Typography from "@material-ui/core/Typography";
import {ClickAwayListener, IconButton, Popper} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CancelIcon from '@material-ui/icons/Cancel';

const styles = {
    box: {
        position: 'fixed',
        width: 200,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: '1px solid',
        p: 1,
        bgcolor: 'background.paper',
    }
}

class PlayerDetails extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <Popper
                id={"player-" + this.props.playerId + "-details."}
                open={this.props.anchorElement !== null}
                anchorEl={this.props.anchorElement}
                onClose={this.props.triggerPlayerDetailsClose}
                placement={"left"}
                modifiers={{
                    offset: {
                        enabled: true,
                        offset: '0, -75%'
                    }
                }}
            >
                <ClickAwayListener onClickAway={this.props.triggerPlayerDetailsClose}>
                    <Grid container component={Paper} elevation={5}
                          style={{height: "var(--player-details-popper-height)", backgroundColor: "blue"}}>
                        <Grid item xs={12} justify={"flex-end"}>
                            <IconButton onClick={this.props.triggerPlayerDetailsClose}
                                        style={{position: "absolute", right: 0, top: 0}}
                            >
                                <CancelIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>The content of the Popover.</Typography>
                        </Grid>
                    </Grid>
                </ClickAwayListener>
            </Popper>
        )
    }

}

export default withStyles(styles)(PlayerDetails);
