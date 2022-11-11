import React from 'react'
import TextField from '@material-ui/core/TextField';
import {signUpAction} from "../../store/actions";
import {connect} from "react-redux";
import Form from "../form/Form";
import FormUtils from "../../utils/FormUtils";
import {userAuthenticatedSelector} from "../../store/selectors/UserSelectors";
import {Redirect} from "react-router-dom";

class Signup extends React.Component {

    formDetails = {
        title: "Registration",
        submitText: "Register",
        additionalText: "Already have an account? Click here to log in.",
        additionalTextLink: "/login",
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
                    type: "password",
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
      if(this.props.isAuthenticated) {
          return <Redirect to={"/myDrafts"} />
      }
    return <Form formDetails={this.formDetails} onSubmit={this.saveUser}/>
  }

}

const mapStateToProps = state => {
    return {
        isAuthenticated: userAuthenticatedSelector(state)
    };
};

const mapDispatchToProps = dispatch => ({
    signUp: (user) => dispatch(signUpAction(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
