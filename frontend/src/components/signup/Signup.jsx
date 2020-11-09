import React from 'react'
import TextField from '@material-ui/core/TextField';
import {signUpAction} from "../../store/actions";
import {connect} from "react-redux";
import Form from "../form/Form";
import FormUtils from "../../utils/FormUtils";

class Signup extends React.Component {

    formDetails = {
        title: "Signup",
        submitText: "Signup",
        additionalText: "Already have an account? Sign in",
        additionalTextLink: "/draftRoom",
        isValidForSubmit: false,
        fields: [
            {
                componentType: TextField,
                properties: {
                    id: "firstName",
                    label: "First Name",
                    required: true,
                    value: "",
                },
                width: 6,
            },
            {
                componentType: TextField,
                properties: {
                    id: "lastName",
                    label: "Last Name",
                    required: true,
                    value: "",
                },
                width: 6,
            },
            {
                componentType: TextField,
                properties: {
                    id: "username",
                    label: "Username",
                    required: true,
                    value: "",
                },
                width: 12,
            },
            {
                componentType: TextField,
                properties: {
                    id: "email",
                    label: "Email",
                    required: true,
                    value: "",
                },
                width: 12,
            },
            {
                componentType: TextField,
                properties: {
                    id: "password",
                    label: "Password",
                    required: true,
                    value: "",
                },
                width: 12,
            },
        ],
    };

  saveUser = () => {
      const user = {
          firstName: FormUtils.getFieldValue(this.formDetails.fields, "firstName"),
          lastName: FormUtils.getFieldValue(this.formDetails.fields, "lastName"),
          username: FormUtils.getFieldValue(this.formDetails.fields, "username"),
          email: FormUtils.getFieldValue(this.formDetails.fields, "email"),
          password: FormUtils.getFieldValue(this.formDetails.fields, "password"),
      };
      this.props.signUp(user);
  }

  render() {
    return <Form
        formDetails={this.formDetails}
        onSubmit={this.saveUser}
    />
  }

}

const mapDispatchToProps = dispatch => ({
    signUp: (user) => dispatch(signUpAction(user))
});

export default connect(null, mapDispatchToProps)(Signup);
