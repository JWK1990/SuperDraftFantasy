import React from "react";
import Button from "@material-ui/core/Button";
import {DraftStatusEnum} from "../../../models/DraftStatusEnum";
import {connect} from "react-redux";
import {userIdSelector} from "../../../store/selectors/UserSelectors";
import {
    commissionerUserIdSelector,
    draftIdSelector,
    draftStatusSelector
} from "../../../store/selectors/DraftSelectors";
import {startDraftAction, stopDraftAction} from "../../../store/actions";


function CommissionerControls(props) {
    const isCommissioner = props.userId === props.commissionerUserId;

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
        getButton()
    )

}

const mapStateToProps = state => {
    return {
        draftId: draftIdSelector(state),
        draftStatus: draftStatusSelector(state),
        commissionerUserId: commissionerUserIdSelector(state),
        userId: userIdSelector(state),
    };
};

const mapDispatchToProps = dispatch => ({
    startDraft: (draftId) => dispatch(startDraftAction(draftId)),
    stopDraft: (draftId) => dispatch(stopDraftAction(draftId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommissionerControls);

