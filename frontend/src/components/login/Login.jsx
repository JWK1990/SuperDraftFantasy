import React from 'react'
import {connect} from "react-redux";
import {loginAction} from "../../store/actions";
import Form from "../form/Form";
import TextField from "@material-ui/core/TextField";
import FormUtils from "../../utils/FormUtils";

class Login extends React.Component {

  formDetails = {
    title: "Login",
    submitText: "Login",
    additionalText: "Don't have an account? Click here to register.",
    additionalTextLink: "/signup",
    isValidForSubmit: false,
    fields: [
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
          id: "password",
          label: "Password",
          required: true,
          value: "",
          type:"password"
        },
        width: 12,
      },
    ],
  };

  login = () => {
    const credentials = {
      username: FormUtils.getFieldValue(this.formDetails.fields, "username"),
      password: FormUtils.getFieldValue(this.formDetails.fields, "password"),
    };
    this.props.login(credentials);
  }

  render() {
    return <Form formDetails={this.formDetails} onSubmit={this.login}/>
  }

}

const mapDispatchToProps = dispatch => ({
  login: (credentials) => dispatch(loginAction(credentials))
});

export default connect(null, mapDispatchToProps)(Login);
