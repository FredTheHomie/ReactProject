import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class FormField extends Component {
  constructor(props){
    super(props);
    this.state = {
      validation: false,
      emailText: '',
      emailValid: false,
      passwordText: '',
      passwordValid: false
    }
  }

  _childHandleLogin = () => {
    this.props.handleLogin();
  };

  _childHandleEmailChange = text => {
    this.props.handleEmailChange(text);
  };

  _childHandlePasswordChange = text => {
    this.props.handlePasswordChange(text);
  };

  render(){
    return(
      <form autoComplete='off'>
        <TextField
          style={styles.textField}
          placeholder='Email'
          error={this.props.validation !== false && this.props.emailValid !== true}
          onChange={(text) => {this._childHandleEmailChange(text.target.value)}}
          fullWidth
        />
        <TextField
          style={styles.textField}
          placeholder='Password'
          type='password'
          error={this.props.validation !== false && this.props.passwordValid !== true}
          onChange={(text) => {this._childHandlePasswordChange(text.target.value)}}
          fullWidth
        />
        <Button
          variant="contained"
          fullWidth
          style={styles.buttonLogin}
          onClick={this._childHandleLogin}
        >
          Login
        </Button>
        <Button
          variant="contained"
          fullWidth
          style={styles.buttonSignup}
        >
          Sign up
        </Button>
        <div style={styles.forgotPassword}>
          <a href="#"> Forgot password? </a>
        </div>
      </form>
    )
  }
}

const styles = {
  textField: {
    marginBottom: '20px'
  },
  buttonLogin: {
    marginTop: '10px',
    backgroundColor: 'orange',
    color: 'white'
  },
  buttonSignup: {
    marginTop: '10px',
    backgroundColor: 'white',
    color: 'orange'
  },
  forgotPassword: {
    marginTop: '40px',
    color: 'orange'
  }
};

export default FormField;