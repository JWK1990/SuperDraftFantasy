import React from 'react'
import {connect} from "react-redux";
import {joinDraftAction} from "../../store/actions";
import Form from "../form/Form";
import TextField from "@material-ui/core/TextField";
import FormUtils from "../../utils/FormUtils";
import {currentTabSelector} from "../../store/selectors/NavigationSelectors";
import {Redirect} from "react-router-dom";

class JoinDraft extends React.Component {

    formDetails = {
        title: "Join Draft",
        submitText: "Join",
        additionalText: "Don't have a draft to join? Create one!",
        additionalTextLink: "/createDraft",
        isValidForSubmit: false,
        fields: [
            {
                componentType: TextField,
                properties: {
                    id: "draftId",
                    label: "Draft ID",
                    required: true,
                    value: "",
                    type: "number"
                },
                width: 12,
            },
            /*
            {
                componentType: TextField,
                properties: {
                    id: "draftPassword",
                    label: "Draft Password",
                    required: false,
                    value: "",
                    type: "password"
                },
                width: 12,
            },
            */
            {
                componentType: TextField,
                properties: {
                    id: "teamName-join",
                    label: "Team Name",
                    required: true,
                    value: "",
                },
                width: 12,
            },
        ],
    };

    joinDraft = () => {
        const draftId = FormUtils.getFieldValue(this.formDetails.fields, "draftId");
        const joinDraftWriteDto = {
            teamName: FormUtils.getFieldValue(this.formDetails.fields, "teamName-join"),
        }
        this.props.joinDraft(draftId, joinDraftWriteDto);
    }

    render() {
        if(this.props.currentRoute === "/myDrafts") {
            return <Redirect to={"/myDrafts"} />
        }
        return <Form formDetails={this.formDetails} onSubmit={this.joinDraft}/>
    }

}

const mapStateToProps = state => {
    return {
        currentRoute: currentTabSelector(state),
    };
};

const mapDispatchToProps = dispatch => ({
    joinDraft: (draftId, joinDraftWriteDto) => dispatch(joinDraftAction(draftId, joinDraftWriteDto))
});

export default connect(mapStateToProps, mapDispatchToProps)(JoinDraft);
