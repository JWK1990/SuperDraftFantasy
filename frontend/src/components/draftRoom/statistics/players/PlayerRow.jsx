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
import {IconButton} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = () => ({
    header: {
        fontWeight: "bold",
    },
    centerAlign: {
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
    },
    leftAlign: {
        display: "grid",
        alignItems: "center",
        justifyContent: "left",
    },
});

class PlayerRow extends React.Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.isOnTheBlock !== this.props.isOnTheBlock ||
            nextProps.draftBase.status !== this.props.draftBase.status ||
            nextProps.slotAvailability !== this.props.slotAvailability;
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
        console.log("Bid");
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

    render() {
        const {classes} = this.props;

        return (
            <Grid container item key={this.props.player.id} style={this.props.sizingStyle}>
                    <Grid item xs={1} >
                        <IconButton color={"primary"}
                                    onClick={() => this.sendAddToBlock(this.props.player.id, 1)}
                                    hidden={this.getIsAddToBlockHidden()}
                                    disabled={this.getIsAddToBlockDisabled()}
                        >
                            <AddIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs={3} className={classes.leftAlign}>{this.props.player.fullName}</Grid>
                    <Grid item xs={2} className={classes.leftAlign}>{this.props.player.fullPosition}</Grid>
                    <Grid item xs={1} className={classes.leftAlign}>{this.props.player.aflTeam}</Grid>
                    <Grid item xs={1} className={classes.centerAlign}>{this.props.player.average}</Grid>
                    <Grid item xs={2} className={classes.centerAlign}>{this.props.player.disposals} &nbsp;({this.props.player.disposalEfficiency}%)</Grid>
                    <Grid item xs={1} className={classes.centerAlign}>{this.props.player.age}</Grid>
                    <Grid item xs={1} className={classes.centerAlign}>{this.props.player.price2021}</Grid>
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
