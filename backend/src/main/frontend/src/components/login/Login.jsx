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
import AuthService from '../../services/AuthService';

class Login extends React.Component {

  constructor(props) {
      super(props);
      this.state ={
          username: '',
          password: '',
          errorText: '',
      }
      this.loginUser = this.loginUser.bind(this);
  }

  loginUser = (e) => {
    e.preventDefault();
    let credentials = {
      username: this.state.username,
      password: this.state.password,
    };

    AuthService.login(credentials)
    .then(res => {
      if(res.status === 200) {
        console.log("User Logged In.");
        AuthService.setToken(res.headers.authorization);
        AuthService.setCurrentUser(credentials.username);
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
            Login
          </Typography>
          <form className="form" noValidate>
            <Grid container spacing={2}>
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
              onClick={this.loginUser}
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

export default Login;
