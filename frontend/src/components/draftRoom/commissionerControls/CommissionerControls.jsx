import React from "react";
import Button from "@material-ui/core/Button";
import {DraftStatusEnum} from "../../../models/DraftStatusEnum";
import {connect} from "react-redux";
import {userIdSelector} from "../../../store/selectors/UserSelectors";
import {
    draftCommissionerUserIdSelector,
    draftIdSelector,
    draftStatusSelector
} from "../../../store/selectors/DraftSelectors";
import {startDraftAction, stopDraftAction} from "../../../store/actions";


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

