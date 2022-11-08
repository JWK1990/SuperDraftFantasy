import React from "react";
import {
    currentTeamIdSelector,
    draftBaseSelector,
    isSlotAvailableSelector
} from "../../../../store/selectors/DraftSelectors";
import {stompClientSelector} from "../../../../store/selectors/WebSocketSelectors";
import {connect} from "react-redux";
import {isBiddingUnderwaySelector, isOnTheBlockSelector,} from "../../../../store/selectors/BlockSelectors";
import DraftRoomUtils from "../../../../utils/DraftRoomUtils";
import Grid from "@material-ui/core/Grid";
import {Checkbox, IconButton, Input, InputAdornment} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import withStyles from "@material-ui/core/styles/withStyles";
import ImportedPlayerListUtils from "../../../../utils/ImportedPlayerListUtils";
import Button from "@material-ui/core/Button";

const styles = () => ({
    header: {
        fontWeight: "bold",
    },
    centerAlign: {
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        borderBottom: "solid 1px lightgrey"
    },
    leftAlign: {
        display: "grid",
        alignItems: "center",
        justifyContent: "left",
        borderBottom: "solid 1px lightgrey"
    },
    isDrafted: {
        backgroundColor: "rgba(220, 220, 220, 0.75)",
        color: "rgba(0, 0, 0, 0.5)"
    },
    myBudgetInput: {
        '&:hover': {
            textDecoration: "underline",
            fontWeight: "bold",
            color: "grey",
        },
    },
    inputAdornmentCenter: {
        // Helps to center the adornment.
        marginLeft: "30%",
        // Reduces the gap between the adornment and the price.
        marginRight: 0,
    },
    playerContainer: {
        '&:hover': {
            background: "rgba(255, 255, 0, 0.5)",
        }
    }
});

class PlayerRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            myBudget: this.props.player.budget,
            typingTimer: null,
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.isOnTheBlock !== this.props.isOnTheBlock
            || nextProps.draftBase.status !== this.props.draftBase.status
            || nextProps.slotAvailability !== this.props.slotAvailability
            || nextState.myBudget !== this.state.myBudget
            || nextState.areDetailsOpen !== this.state.areDetailsOpen;
    }

    getIsAddToBlockHidden = () => {
        const isTeamOnTheBlock = this.props.isOnTheBlock && this.props.draftBase.status === "IN_PROGRESS" && !this.props.isBiddingUnderway;
        return !this.props.player.available || !isTeamOnTheBlock;
    }

    getIsAddToBlockDisabled = () => {
        const isSlotAvailableForPlayer = DraftRoomUtils.isSlotAvailableForPlayer(
            this.props.slotAvailability,
            this.props.player.primaryPosition,
            this.props.player.secondaryPosition
        )
        return this.getIsAddToBlockHidden(this.props.player) || !isSlotAvailableForPlayer;
    }

    sendAddToBlock = (selectedPlayerId, initialBid) => {
        console.log("Add To Block Sent.");
        if (this.props.stompClient) {
            const addToBlockDetails = {
                draftId: this.props.draftBase.id,
                playerId: this.props.player.id,
                bidderTeamId: this.props.currentTeamId,
                myTeamPosition: null,
                price: 1,
                onTheBlockTimer: this.props.draftBase.onTheBlockTimer,
                bidTimer: this.props.draftBase.bidTimer,
            };
            this.props.stompClient.send("/app/addToBlock", {}, JSON.stringify(addToBlockDetails));
        }
    };

    handleMyBudgetChange = (myBudget, playerId) => {
        this.setState({myBudget: myBudget})
        clearTimeout(this.state.typingTimer);
        const typingTimer = setTimeout(() => {
            ImportedPlayerListUtils.setMyBudgetForPlayer(myBudget, playerId);
        }, 1000)
        this.setState({typingTimer: typingTimer});
    }

    render() {
        const {classes} = this.props;

        return (
        <Grid container item
              key={this.props.player.id}
              style={this.props.sizingStyle}
              className={[this.props.player.price ? classes.isDrafted : '', classes.playerContainer].join(' ')}>
                <Grid item xs={1} style={{borderBottom: "solid 1px lightgrey"}}>
                    <Checkbox
                        color={"primary"}
                        onChange={(event) => this.props.triggerWatchlistChange(this.props.player.id)}
                        checked={this.props.isOnWatchlist}
                    />
                    <IconButton color={"primary"}
                                onClick={() => this.sendAddToBlock(this.props.player.id, 1)}
                                hidden={this.getIsAddToBlockHidden()}
                                disabled={this.getIsAddToBlockDisabled()}
                                style={{paddingLeft: "4px"}}
                    >
                        <AddIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={3} className={classes.leftAlign}>
                    <Button onClick={() => this.props.triggerOpenPlayerDetails(this.props.player)}>
                        {this.props.player.fullName}
                    </Button>
                </Grid>
                <Grid item xs={1} className={classes.leftAlign}>{this.props.player.aflTeam}</Grid>
                <Grid item xs={1} className={classes.leftAlign}>{this.props.player.fullPosition}</Grid>
                <Grid item xs={1} className={classes.centerAlign}>{this.props.player.average ? this.props.player.average : "-"}</Grid>
                <Grid item xs={1} className={classes.centerAlign}>{this.props.player.disposals ? this.props.player.disposals + " (" + this.props.player.disposalEfficiency + "%)" : "-"}</Grid>
                <Grid item xs={1} className={classes.centerAlign}>{this.props.player.age}</Grid>
                <Grid item xs={1} className={classes.centerAlign}>{this.props.player.price2021 ? "$" + this.props.player.price2021 : "-"}</Grid>
                <Grid item xs={1} className={classes.centerAlign}>
                <Grid item xs={1} className={classes.centerAlign}>{this.props.player.price ? "$" + this.props.player.price : "-"}</Grid>
                </Grid>
                <Grid item xs={1} className={classes.centerAlign}>
                    <Input
                        id="myBudget"
                        value={this.state.myBudget}
                        onChange={(event) => this.handleMyBudgetChange(event.target.value, this.props.player.id)}
                        startAdornment={<InputAdornment position="start" classes={{positionStart: classes.inputAdornmentCenter}}><span style={{color: "black"}}>$</span></InputAdornment>}
                        disableUnderline={true}
                        className={classes.myBudgetInput}
                        autoComplete={"off"}
                    />
                </Grid>
        </Grid>

        )
    }
}

const mapStateToProps = state => {
    return {
        stompClient: stompClientSelector(state),
        draftBase: draftBaseSelector(state),
        currentTeamId: currentTeamIdSelector(state),
        isOnTheBlock: isOnTheBlockSelector(state),
        slotAvailability: {
            def: isSlotAvailableSelector(state, "def"),
            mid: isSlotAvailableSelector(state, "mid"),
            ruc: isSlotAvailableSelector(state, "ruc"),
            fwd: isSlotAvailableSelector(state, "fwd"),
            bench: isSlotAvailableSelector(state, "bench"),
        },
        isBiddingUnderway: isBiddingUnderwaySelector(state),
    };
};

export default connect(mapStateToProps)(withStyles(styles)(PlayerRow));
