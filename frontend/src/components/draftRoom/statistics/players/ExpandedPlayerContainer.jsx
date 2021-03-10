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

class ExpandedPlayerContainer extends React.Component {

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
        if (this.props.stompClient) {
            const addToBlockDetails = {
                draftId: this.props.draftBase.id,
                playerId: this.props.player.id,
                bidderTeamId: this.props.currentTeamId,
                myTeamPosition: null,
                price: initialBid,
                onTheBlockTimer: this.props.draftBase.onTheBlockTimer,
                bidTimer: this.props.draftBase.bidTimer,
            };
            this.props.stompClient.send("/app/addToBlock", {}, JSON.stringify(addToBlockDetails));
        }
    };

    render() {
        let Component = this.props.component;
        return (
            <Component
                player={this.props.player}
                sendAddToBlock={this.sendAddToBlock}
                getIsAddToBlockHidden={this.getIsAddToBlockHidden}
                getIsAddToBlockDisabled={this.getIsAddToBlockDisabled}
            />
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

export default connect(mapStateToProps)(ExpandedPlayerContainer);
