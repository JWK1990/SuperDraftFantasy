import React from 'react'
import {connect} from "react-redux";
import {joinDraftAction} from "../../store/actions";
import Form from "../form/Form";
import TextField from "@material-ui/core/TextField";
import FormUtils from "../../utils/FormUtils";

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
            {
                componentType: TextField,
                properties: {
                    id: "draftPassword",
                    label: "Draft Password",
                    required: false,
                    value: "",
                },
                width: 12,
            },
            {
                componentType: TextField,
                properties: {
                    id: "teamName",
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
            teamName: FormUtils.getFieldValue(this.formDetails.fields, "teamName"),
        }
        this.props.joinDraft(draftId, joinDraftWriteDto);
    }

    render() {
        return <Form
            formDetails={this.formDetails}
            onSubmit={this.joinDraft}
        />
    }

}

const mapDispatchToProps = dispatch => ({
    joinDraft: (draftId, joinDraftWriteDto) => dispatch(joinDraftAction(draftId, joinDraftWriteDto))
});

export default connect(null, mapDispatchToProps)(JoinDraft);
