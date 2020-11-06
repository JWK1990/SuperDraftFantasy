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
import {connect} from "react-redux";
import {loginAction} from "../../store/actions";
import {Redirect} from "react-router-dom";
import {userSelector} from "../../store/selectors/UserSelectors";
import AuthService from "../../services/AuthService";
import {MenuItem} from "@material-ui/core";

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "Login",
            submitText: "Login",
            additionalText: "Already have an account? Sign in.",
            additionalTextLink: "/draftRoom",
            fields: [
                {
                    id: "string",
                    label: "String",
                    required: true,
                    select: false,
                    options: null,
                    value: "",
                    error: false,
                    helperText: ""
                },
                {
                    id: "select",
                    label: "Select",
                    required: true,
                    select: true,
                    options: [
                        {key: "none", value: ""},
                        {key: "one", value: "1"},
                        {key: "two", value: "2"},
                    ],
                    value: "",
                    error: false,
                    helperText: ""
                },
            ],
            isValidForSubmit: false,
        }
        this.login = this.login.bind(this);
    }

    login = (e) => {
        e.preventDefault();
        if(this.state.isValidForSubmit) {
            let credentials = {
                username: this.state.username,
                password: this.state.password,
            };
            this.props.login(credentials);
        }
    }

    getIsValidForSubmit = () => {
        let isValid = true;
        this.state.fields.forEach(field => {
            if(field.required && (field.value === "" || !field.value)) {
                return isValid = false;
            }
        })
        return isValid;
    }

    onChange = (e) => {
        let updatedFields = this.state.fields;
        let updatedFieldIndex = updatedFields.findIndex(field => field.id === e.target.name);
        const isError = updatedFields[updatedFieldIndex].required && (e.target.value === "" || !e.target.value);
        updatedFields[updatedFieldIndex] = {
            ...updatedFields[updatedFieldIndex],
            value: e.target.value,
            error: isError,
            helperText: isError ? updatedFields[updatedFieldIndex].label + " is required." : ""
        }
        this.setState({fields: updatedFields});
        this.setState({isValidForSubmit: this.getIsValidForSubmit()})
    }

    render() {
        if(AuthService.getToken()) {
            //return <Redirect to="/draftRoom"></Redirect>
        }

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className="paper">
                    <Avatar className="avatar">
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {this.state.title}
                    </Typography>
                    <form className="form">
                        <Grid container spacing={2}>
                            {this.state.fields.map((item) => (
                                <Grid item xs={12} key={item.id}>
                                    <TextField
                                        name={item.id}
                                        id={item.id}
                                        label={item.label}
                                        required={item.required}
                                        value={item.value}
                                        select={item.select}
                                        variant="outlined"
                                        fullWidth
                                        onChange={this.onChange}
                                        error={item.error}
                                        helperText={item.helperText}
                                    >
                                        {item.options ?
                                            item.options.map(option => {
                                                return <MenuItem key={option.key} value={option.value}>
                                                    {option.value}
                                                </MenuItem>
                                            })
                                        : null}
                                    </TextField>
                                </Grid>
                            ))}
                        </Grid>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className="submit"
                            fullWidth
                            onClick={this.login}
                            disabled={!this.state.isValidForSubmit}
                        >
                            {this.state.submitText}
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href={this.state.additionalTextLink} variant="body2">
                                    {this.state.additionalText}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={5}></Box>
            </Container>
        );
    }
};

const mapStateToProps = state => {
    return {
        user: userSelector(state),
    };
};

const mapDispatchToProps = dispatch => ({
    login: (credentials) => dispatch(loginAction(credentials))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
