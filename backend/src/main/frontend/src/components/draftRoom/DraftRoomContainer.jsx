import {userSelector} from "../../store/selectors/UserSelector";
import {setDraftAction} from "../../store/actions";
import DraftRoom from "./DraftRoom";

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setDraft: draftId => dispatch(setDraftAction(draftId))
    }
}

const DraftRoomContainer = connect(mapStateToProps, mapDispatchToProps)(DraftRoom)

