import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Container from "@material-ui/core/Container";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
});

class DraftRoomBlock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            block: {
                player: '',
                bidder: '',
                price: '',
                onTheBlockTimeRemaining: '',
                bidTimeRemaining: '',
                isBidDisabled: true,
            }
        }
    }

    componentDidMount() {
        this.props.stompClient.subscribe('/draft/rounds', this.receiveStartNextRound);
        this.props.stompClient.subscribe('/draft/stopDrafts', this.receiveStopDraft);
        this.props.stompClient.subscribe('/draft/addToBlocks', this.receiveAddToBlock);
        this.props.stompClient.subscribe('/draft/bids', this.receiveBid);
        this.props.stompClient.subscribe('/draft/teams', this.receiveTeam);
    }

    sendStartDraft = () => {
        if(this.props.stompClient) {
            console.log(this.props);
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
            console.log('Bid Send: ', bidDetails);
        }
    };

    receiveStartNextRound = (payload) => {
        console.log('Start Next Round Received: ', payload);
        clearInterval(this.addToBlockTimerInterval);
        clearInterval(this.bidTimerInterval);
        const startNextRoundDetails = JSON.parse(payload.body);
        this.setState(prevState => ({
            ...prevState,
            block: {
                ...prevState.block,
                player: '',
                team: this.getTeamDetailsById(startNextRoundDetails.teamId),
                price: '',
                isBidDisabled: true,
            }
        }));
        this.setAddToBlockTimer(startNextRoundDetails.endTime);
    };

    receiveStopDraft = () => {
        console.log('StopDraft Received.');
        clearInterval(this.addToBlockTimerInterval);
        clearInterval(this.bidTimerInterval);
        this.setState(prevState => ({
            ...prevState,
            block: {
                ...prevState.block,
                addToBlockTimeRemaining: '',
                bidTimeRemaining: '',
            }
        }));
    }

    receiveAddToBlock = (payload) => {
        console.log('AddToBlock Received ', payload);
        clearInterval(this.addToBlockTimerInterval);
        clearInterval(this.bidTimerInterval);
        const addToBlockDetails = JSON.parse(payload.body);
        const player = this.getPlayerDetailsById(addToBlockDetails.playerId);
        this.setState(prevState => ({
            ...prevState,
            block: {
                ...prevState.block,
                player: player,
                bidder: this.getTeamDetailsById(addToBlockDetails.teamId),
                price: addToBlockDetails.price,
                isBidDisabled: this.getIsBidDisabled(addToBlockDetails.price, player),
            }
        }));
        this.setBidTimer(addToBlockDetails.endTime);
    };

    receiveBid = (payload) => {
        clearInterval(this.addToBlockTimerInterval);
        clearInterval(this.bidTimerInterval);
        const bidDetails = JSON.parse(payload.body);
        const player = this.state.block.player;
        const price = bidDetails.price;
        this.setState(prevState => ({
            ...prevState,
            block: {
                ...prevState.block,
                bidder: this.getTeamDetailsById(bidDetails.teamId),
                price: price,
                isBidDisabled: this.getIsBidDisabled(price, player),
            }
        }));
        this.setBidTimer(bidDetails.endTime);
    };

    setAddToBlockTimer = (endTime) => {
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
    };

    setBidTimer = (endTime) => {
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
    };

    getPlayerDetailsById = (playerId) => {
        return this.props.players.find(player => player.id === playerId);
    };

    getTeamDetailsById = (teamId) => {
        return this.props.draft.teams.find(team => team.id === teamId);
    };

    getIsBidDisabled = (price, player) => {
        if(price && player) {
            return !this.getIsBudgetAvailableForPlayer(price) || !this.getIsSlotAvailableForPlayer(player);
        }
        return true;
    }

    getIsBudgetAvailableForPlayer = (price) => {
        if(this.getIsTeamFull()) {
            return false;
        }
        const currentTeamMaxBid = this.getCurrentCoachMaxBid();
        const nextBidPrice = price + 1;
        return currentTeamMaxBid >= nextBidPrice;
    }

    getCurrentCoachMaxBid = () => {
        return this.props.currentTeam.maxBid;
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
        const classes = this.props;
        return (
            <Container component="main" maxWidth="lg">
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
                <p>Add To Block Timer: {this.state.block.addToBlockTimeRemaining} </p>
                <p>Bid Timer: {this.state.block.bidTimeRemaining} </p>
            </Container>
        );
    }
}

export default withStyles(styles, {withTheme: true})(DraftRoomBlock);
