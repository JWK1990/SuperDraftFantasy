import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {signUpAction} from "../../store/actions";
import {userErrorSelector, userSelector} from "../../store/selectors/UserSelectors";
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';
import AuthService from "../../services/AuthService";
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
