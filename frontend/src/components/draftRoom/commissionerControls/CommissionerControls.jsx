import React from "react";
import Button from "@material-ui/core/Button";
import DraftService from "../../../services/DraftService";
import {DraftStatusEnum} from "../../../models/DraftStatusEnum";
import {connect} from "react-redux";
import {userIdSelector, userSelector} from "../../../store/selectors/UserSelectors";
import {playersSelector} from "../../../store/selectors/PlayersSelectors";
import {
    currentTeamSelector, draftCommissionerUserIdSelector, draftIdSelector,
    draftSelector,
    draftStatusSelector,
    onTheBlockTeamSelector
} from "../../../store/selectors/DraftSelectors";
import {stompClientSelector} from "../../../store/selectors/WebSocketSelectors";
import {
    connectWebSocketAction,
    getDraftAction,
    getPlayersByDraftAction, startDraftAction, stopDraftAction,
    updateTeamAction
} from "../../../store/actions";


function CommissionerControls(props) {
    console.log(props.draftStatus)

    const isCommissioner = props.userId === props.commissionerUserId;
    console.log(isCommissioner);

    const getButton = () => {
        if(isCommissioner) {
            switch (props.draftStatus) {
                case DraftStatusEnum.STOPPED:
                case DraftStatusEnum.READY:
                    return (
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => props.startDraft(props.draftId)}
                        >
                            Start Draft
                        </Button>
                    )
                case DraftStatusEnum.IN_PROGRESS:
                    return (
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => props.stopDraft(props.draftId)}
                        >
                            Stop Draft
                        </Button>
                    )
                default:
                    return null;
            }
        }
    }

    return (
        <div>
            {getButton()}
        </div>
    )

}

const mapStateToProps = state => {
    return {
        draftId: draftIdSelector(state),
        draftStatus: draftStatusSelector(state),
        commissionerUserId: draftCommissionerUserIdSelector(state),
        userId: userIdSelector(state),
    };
};

const mapDispatchToProps = dispatch => ({
    startDraft: (draftId) => dispatch(startDraftAction(draftId)),
    stopDraft: (draftId) => dispatch(stopDraftAction(draftId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommissionerControls);

