import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import CountdownClock from "./clock/CountdownClock";
import Grid from "@material-ui/core/Grid";
import {connect} from "react-redux";
import {currentTeamSelector, draftSelector} from "../../../store/selectors/DraftSelectors";
import BlockPlayer from "./player/BlockPlayer";
import {stompClientSelector} from "../../../store/selectors/WebSocketSelectors";
import {playersSelector} from "../../../store/selectors/PlayersSelectors";

const styles = theme => ({
    firstRowGridContainer: {
        justify: "space-between",
        alignItems: "stretch",
        height: "20vh",
        overflow: "hidden",
    },
    countdownClockDiv: {
        height: "100%",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
});

class DraftRoomBlock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            block: {
                player: '',
                bidder: '',
                price: '',
                clockState: null,
                clockKey: 0,
                //onTheBlockTimeRemaining: '',
                //bidTimeRemaining: '',
                isBidDisabled: true,
            }
        }
    }

    componentDidMount() {
        this.props.stompClient.subscribe('/draft/rounds', this.receiveStartNextRound);
        this.props.stompClient.subscribe('/draft/stopDrafts', this.receiveStopDraft);
        this.props.stompClient.subscribe('/draft/addToBlocks', this.receiveAddToBlock);
        this.props.stompClient.subscribe('/draft/bids', this.receiveBid);
    }

    sendStartDraft = () => {
        if(this.props.stompClient) {
            console.log("Send Start Draft");
            const startDraftDetails = {
                draftId: this.props.draft.id,
                playerId: null,
                teamId: null,
                price: 1,
                onTheBlockTimer: this.props.draft.onTheBlockTimer,
                bidTimer: this.props.draft.bidTimer
            };
            this.props.stompClient.send("/app/startDraft", {}, JSON.stringify(startDraftDetails));
        }
    }

    sendStopDraft = () => {
        if(this.props.stompClient) {
            console.log('Send Stop Draft.');
            this.props.stompClient.send("/app/stopDraft", {}, this.props.draft.id);
        }
    }

    sendBid = () => {
        if (this.props.stompClient) {
            const bidDetails = {
                draftId: this.props.draft.id,
                playerId: this.state.block.player.id,
                teamId: this.props.currentTeam.id,
                price: this.state.block.price + 1,
                onTheBlockTimer: this.props.draft.onTheBlockTimer,
                bidTimer: this.props.draft.bidTimer,
            };
            this.props.stompClient.send("/app/bid", {}, JSON.stringify(bidDetails));
            console.log('Bid Sent: ', bidDetails);
        }
    };

    receiveStartNextRound = (payload) => {
        console.log('Start Next Round Received: ', payload);
        //clearInterval(this.addToBlockTimerInterval);
        //clearInterval(this.bidTimerInterval);
        const startNextRoundDetails = JSON.parse(payload.body);
        this.setState(prevState => ({
            ...prevState,
            block: {
                ...prevState.block,
                player: '',
                team: this.getTeamDetailsById(startNextRoundDetails.teamId),
                price: '',
                isBidDisabled: true,
                clockState: 'OnTheBlock',
                clockKey: this.state.block.clockKey + 1,
            }
        }));
        //this.setAddToBlockTimer(startNextRoundDetails.endTime);
    };

    receiveStopDraft = () => {
        console.log('StopDraft Received.');
        //clearInterval(this.addToBlockTimerInterval);
        //clearInterval(this.bidTimerInterval);
        this.setState(prevState => ({
            ...prevState,
            block: {
                ...prevState.block,
                addToBlockTimeRemaining: '',
                bidTimeRemaining: '',
                clockState: null,
            }
        }));
    }

    receiveAddToBlock = (payload) => {
        console.log('AddToBlock Received ', payload);
        //clearInterval(this.addToBlockTimerInterval);
        //clearInterval(this.bidTimerInterval);
        const addToBlockDetails = JSON.parse(payload.body);
        const player = this.getPlayerDetailsById(addToBlockDetails.playerId);
        const isBidDisabledTuple = this.getIsBidDisabled(addToBlockDetails.teamId, addToBlockDetails.price, player);
        this.setState(prevState => ({
            ...prevState,
            block: {
                ...prevState.block,
                player: player,
                bidder: addToBlockDetails.teamId,
                price: addToBlockDetails.price,
                isBidDisabled: isBidDisabledTuple[0],
                clockState: isBidDisabledTuple[1],
                clockKey: this.state.block.clockKey + 1,
            }
        }));
        //this.setBidTimer(addToBlockDetails.endTime);
    };

    receiveBid = (payload) => {
        //clearInterval(this.addToBlockTimerInterval);
        //clearInterval(this.bidTimerInterval);
        const bidDetails = JSON.parse(payload.body);
        const player = this.state.block.player;
        const price = bidDetails.price;
        this.setState(prevState => ({
            ...prevState,
            block: {
                ...prevState.block,
                bidder: bidDetails.teamId,
                price: price,
                isBidDisabled: this.getIsBidDisabled(price, player),
                clockState: 'Bid',
                clockKey: this.state.block.clockKey + 1,
            }
        }));
        //this.setBidTimer(bidDetails.endTime);
    };

/*    setAddToBlockTimer = (endTime) => {
        this.addToBlockTimerInterval = setInterval(() => {
            this.setState(prevState => ({
                ...prevState,
                block: {
                    ...prevState.block,
                    addToBlockTimeRemaining: Math.round((new Date(endTime).getTime() - Date.now())/1000),
                    bidTimeRemaining: '',
                }
            }));
            if(this.state.block.addToBlockTimeRemaining <= 0) {
                clearInterval(this.addToBlockTimerInterval);
            }
        }, 1000);
    };*/

/*    setBidTimer = (endTime) => {
        this.bidTimerInterval = setInterval(() => {
            this.setState(prevState => ({
                ...prevState,
                block: {
                    ...prevState.block,
                    addToBlockTimeRemaining: '',
                    bidTimeRemaining: Math.round((new Date(endTime).getTime() - Date.now())/1000)
                }
            }));
            if(this.state.block.bidTimeRemaining <= 0) {
                clearInterval(this.bidTimerInterval);
            }
        }, 1000);
    };*/

    getPlayerDetailsById = (playerId) => {
        return this.props.players.find(player => player.id === playerId);
    };

    getTeamDetailsById = (teamId) => {
        return this.props.draft.teams.find(team => team.id === teamId);
    };

    getIsBidDisabled = (bidderId, price, player) => {
        console.log(bidderId, this.props.currentTeam.id);
        if(bidderId === this.props.currentTeam.id) {
            return [true, "You lead:"];
        }
        if(price && !this.getIsBudgetAvailableForPlayer(price)) {
            return [true, "Insufficient budget."]
        }
        if(player && !this.getIsSlotAvailableForPlayer(player)) {
            return [true, "No " + player.position + " Slot."]
        }
        return [false, "Bid"];
    }

    getIsBudgetAvailableForPlayer = (price) => {
        if(this.getIsTeamFull()) {
            return false;
        }
        const currentTeamMaxBid = this.props.currentTeam.maxBid;
        const nextBidPrice = price + 1;
        return currentTeamMaxBid >= nextBidPrice;
    }

    getIsSlotAvailableForPlayer = (player) => {
        if(this.getIsTeamFull()) {
            return false;
        }
        // const benchSlotAvailable = this.state.vacantPositions["BENCH"];
        // const primarySlotAvailable = this.state.vacantPositions[player.primaryPosition];
        // const secondarySlotAvailable = player.secondaryPosition ? this.state.vacantPositions[player.secondaryPosition] : false;
        // return benchSlotAvailable || primarySlotAvailable || secondarySlotAvailable;
        return true;
    };

    getIsTeamFull = () => {
        const currentTeamPlayerCount = this.getCurrentTeamPlayerCount();
        const numOfSlotsPerTeam = this.getNumOfSlotsPerTeam();
        return currentTeamPlayerCount >= numOfSlotsPerTeam;
    };

    getCurrentTeamPlayerCount = () => {
        return this.props.currentTeam.teamPlayerJoins.length;
    }

    getNumOfSlotsPerTeam = () => {
        const roster = this.props.draft.roster;
        return roster.def + roster.mid + roster.ruc + roster.fwd + roster.bench;
    }

    render() {
        const {classes} = this.props;
        return (
            <Grid
                container
                className={classes.firstRowGridContainer}
            >
                <Grid item xs={2}>
                    <div className={classes.countdownClockDiv}>
                        {!!this.state.block.clockState ?
                            <CountdownClock
                                duration={this.state.block.clockState === "OnTheBlock" ?
                                    this.props.draft.onTheBlockTimer
                                    : this.props.draft.bidTimer
                                }
                                text={this.state.block.clockState}
                                key={this.state.block.clockKey}
                                sendBid={this.sendBid}
                                isDisabled={this.state.block.isBidDisabled}
                                currentPrice={this.state.block.price}
                            />
                            : null
                        }
                    </div>
                </Grid>

                <Grid item xs={10}>
                    <BlockPlayer
                        player={this.state.block.player}
                    />
                </Grid>

            </Grid>


         /*   <Container component="main" maxWidth="lg">
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            <p>{this.state.block ? this.state.block.player.firstName : "TBA"} </p>
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            <p>{this.state.block ? this.state.block.teamId : "TBA"} </p>
                            <p>{this.state.block ? this.state.block.price : "TBA"} </p>
                        </Typography>
                    </CardContent>

                    <div className={classes.controls}>

                        <IconButton
                            aria-label="previous"
                            onClick={() => this.sendStopDraft()}
                        >
                            <SkipPreviousIcon />
                        </IconButton>

                        <IconButton
                            aria-label="play/pause"
                            onClick={() => this.sendBid()}
                            disabled={this.state.block.isBidDisabled}
                        >
                            <PlayArrowIcon className={classes.playIcon} />
                        </IconButton>

                        <IconButton
                            aria-label="next"
                            onClick={() => this.sendStartDraft()}
                        >
                            <SkipNextIcon />
                        </IconButton>

                    </div>

                </div>
                <CardMedia
                    className={classes.cover}
                    image="frontend/src/images/logo.svg"
                    title="Player Picture"
                />
                {!!this.state.block.clockState ?
                    <CountdownClock
                        duration={this.state.block.clockState === "OnTheBlock" ?
                            this.props.draft.onTheBlockTimer
                            : this.props.draft.bidTimer
                        }
                        text={this.state.block.clockState}
                        key={this.state.block.clockKey}
                    />
                    : null
                }
            </Container>*/
        );
    }
}

const mapStateToProps = state => {
    return {
        stompClient: stompClientSelector(state),
        draft: draftSelector(state),
        players: playersSelector(state),
        currentTeam: currentTeamSelector(state),
    };
};

export default connect(mapStateToProps)(withStyles(styles, {withTheme: true})(DraftRoomBlock));
