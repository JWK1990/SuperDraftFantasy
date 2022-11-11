import React from 'react'
import {connect} from "react-redux";
import {createDraftAction} from "../../store/actions";
import Form from "../form/Form";
import TextField from "@material-ui/core/TextField";
import {Slider} from "@material-ui/core";
import FormUtils from "../../utils/FormUtils";
import {currentTabSelector} from "../../store/selectors/NavigationSelectors";
import {Redirect} from "react-router-dom";

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
                    label: "Draft Name",
                    required: true,
                    value: "",
                },
                width: 12,
            },
            {
                componentType: TextField,
                properties: {
                    id: "teamName-create",
                    label: "Your Team Name",
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
                    value: "5D - 7M - 1R - 5F - 4B",
                    select: true,
                    options: [
                        {key: "5-7-1-5-4", value: "5D - 7M - 1R - 5F - 4B"},
                        {key: "4-6-1-4-4", value: "4D - 6M - 1R - 4F - 4B"},
                        {key: "3-5-1-3-2", value: "3D - 5M - 1R - 3F - 2B"},
                        {key: "2-3-1-2-2", value: "2D - 3M - 1R - 2F - 2B"},
                        {key: "1-1-1-1-4", value: "1D - 1M - 1R - 1F - 4B"},
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
            teamName: FormUtils.getFieldValue(this.formDetails.fields, "teamName-create"),
            numOfTeams: FormUtils.getFieldValue(this.formDetails.fields, "numOfTeams"),
            rosterType: FormUtils.getFieldValue(this.formDetails.fields, "rosterType"),
            budget: FormUtils.getFieldValue(this.formDetails.fields, "budget"),
            onTheBlockTimer: FormUtils.getFieldValue(this.formDetails.fields, "onTheBlockTimer"),
            bidTimer: FormUtils.getFieldValue(this.formDetails.fields, "bidTimer"),
        };
        this.props.createDraft(draft);
    }

    render() {
        if(this.props.currentRoute === "/myDrafts") {
            return <Redirect to={"/myDrafts"} />
        }
        return <Form formDetails={this.formDetails} onSubmit={this.createDraft}/>
    }

}

const mapStateToProps = state => {
    return {
        currentRoute: currentTabSelector(state),
    };
};

const mapDispatchToProps = dispatch => ({
    createDraft: (draft) => dispatch(createDraftAction(draft))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateDraft);
