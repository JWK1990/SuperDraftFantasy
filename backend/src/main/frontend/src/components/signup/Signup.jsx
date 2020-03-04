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
import AuthService from '../login/AuthService';

class Signup extends React.Component {

  constructor(props) {
      super(props);
      this.state ={
          firstName: '',
          lastName: '',
          username: '',
          email: '',
          password: '',
          errorText: '',
      }
      this.saveUser = this.saveUser.bind(this);
  }

  saveUser = (e) => {
      e.preventDefault();
      let user = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      };

      AuthService.signup(user)
      .then(res => {
        if(res.status === 200) {
          console.log("User Signed Up.");
          AuthService.setToken(res.headers.authorization);
          AuthService.setCurrentUser(user.username);
        } else {
          console.log(res);
          this.setState({errorText: res.data.message});
        }
      })
      .catch(error => {
        console.log(error);
      });

  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
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
                  onChange={this.onChange}
                  error={this.state.errorText.length === 0 ? false : true }
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
                  onChange={this.onChange}
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
                  onChange={this.onChange}
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
                  onChange={this.onChange}
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
                  onChange={this.onChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="submit"
              fullWidth
              onClick={this.saveUser}
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

export default Signup;