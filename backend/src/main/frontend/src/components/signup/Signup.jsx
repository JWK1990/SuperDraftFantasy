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
import {userActions} from "../../store/actions/UserActions";
import {connect} from "react-redux";

class Signup extends React.Component {

    constructor(props) {
      super(props);

      this.state ={
          user: {
              firstName: '',
              lastName: '',
              username: '',
              email: '',
              password: '',
          },
          submitted: false,
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.firstName && user.lastName && user.username && user.password) {
            this.props.register(user);
        }
    }

    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;

        return (
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className="paper">
              <Avatar className="avatar">
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <form className="form" noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="firstName"
                      id="firstName"
                      label="First Name"
                      variant="outlined"
                      required
                      fullWidth
                      autoFocus
                      value={this.state.firstName}
                      onChange={this.handleChange}
                      helperText={this.state.errorText}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="lastName"
                      id="lastName"
                      label="Last Name"
                      variant="outlined"
                      required
                      fullWidth
                      value={this.state.lastName}
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="username"
                      id="username"
                      label="Username"
                      variant="outlined"
                      required
                      fullWidth
                      value={this.state.username}
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="email"
                      id="email"
                      label="Email Address"
                      variant="outlined"
                      autoComplete="email"
                      required
                      fullWidth
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="password"
                      id="password"
                      label="Password"
                      type="password"
                      variant="outlined"
                      autoComplete="current-password"
                      required
                      fullWidth
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="submit"
                  fullWidth
                  onClick={this.handleSubmit}
                >
                  Sign Up
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link href="#" variant="body2">
                      Already have an account? Sign in
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

function mapState(state) {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
}

const connectedRegisterPage = connect(mapState, actionCreators)(Signup);
export { connectedRegisterPage as Signup };
