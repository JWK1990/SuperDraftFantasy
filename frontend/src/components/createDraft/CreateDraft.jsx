import React from 'react'
import {connect} from "react-redux";
import {createDraftAction} from "../../store/actions";
import Form from "../form/Form";
import TextField from "@material-ui/core/TextField";
import {Slider} from "@material-ui/core";
import FormUtils from "../../utils/FormUtils";

class CreateDraft extends React.Component {

    createTimerMarks = (start, increment, end) => {
        const marks = [];
        for(let i = start; i <= end; i += increment) {
            const mark = {value: i, label: i.toString()}
            marks.push(mark);
        }
        return marks;
    }

    createBudgetOptions = (start, increment, end) => {
        const options = [];
        for(let i = start; i <= end; i += increment) {
            const option = {key: i, value: i}
            options.push(option);
        }
        return options;
    }

    formDetails = {
        title: "Create Draft",
        submitText: "Create",
        additionalText: "Already have a Draft? Check My Drafts.",
        additionalTextLink: "/myDrafts",
        isValidForSubmit: false,
        fields: [
            {
                componentType: TextField,
                properties: {
                    id: "name",
                    label: "Name",
                    required: true,
                    value: "",
                },
                width: 12,
            },
            {
                componentType: TextField,
                properties: {
                    id: "numOfTeams",
                    label: "Number Of Teams",
                    required: true,
                    value: "",
                    type: "number"
                },
                width: 12,
            },
            {
                componentType: TextField,
                properties: {
                    id: "rosterType",
                    label: "Roster Type",
                    required: true,
                    value: "57154",
                    select: true,
                    options: [
                        {key: "5-7-1-5-4", value: "57154"},
                        {key: "1-1-1-1-1", value: "11111"},
                        {key: "2-2-2-2-2", value: "22222"},
                    ]
                },
                width: 12,
            },
            {
                componentType: TextField,
                properties: {
                    id: "budget",
                    label: "Budget",
                    required: true,
                    value: 100,
                    select: true,
                    options: this.createBudgetOptions(100, 100, 1000),
                    type: "number",
                },
                width: 12,
            },
            {
                componentType: Slider,
                properties: {
                    id: "onTheBlockTimer",
                    label: "On The Block Timer",
                    required: true,
                    value: 20,
                    step: 5,
                    min: 5,
                    max: 120,
                    marks: true
                },
                width: 12,
            },
            {
                componentType: Slider,
                properties: {
                    id: "bidTimer",
                    label: "Bid Timer",
                    required: true,
                    value: 20,
                    step: 5,
                    min: 5,
                    max: 120,
                    marks: true
                },
                width: 12,
            },
        ],
    };



    createDraft = () => {
        const draft = {
            name: FormUtils.getFieldValue(this.formDetails.fields, "name"),
            numOfTeams: FormUtils.getFieldValue(this.formDetails.fields, "numOfTeams"),
            rosterType: FormUtils.getFieldValue(this.formDetails.fields, "rosterType"),
            budget: FormUtils.getFieldValue(this.formDetails.fields, "budget"),
            onTheBlockTimer: FormUtils.getFieldValue(this.formDetails.fields, "onTheBlockTimer"),
            bidTimer: FormUtils.getFieldValue(this.formDetails.fields, "bidTimer"),
        };
        this.props.createDraft(draft);
    }

    render() {
        return <Form
            formDetails={this.formDetails}
            onSubmit={this.createDraft}
        />
    }

}

const mapDispatchToProps = dispatch => ({
    createDraft: (draft) => dispatch(createDraftAction(draft))
});

export default connect(null, mapDispatchToProps)(CreateDraft);
