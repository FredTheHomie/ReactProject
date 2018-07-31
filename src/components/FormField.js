import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class FormField extends Component {
  render(){
    return(
      <form autoComplete='off'>
        <TextField
          style={styles.textField}
          placeholder='Email'
          fullWidth
        />
        <TextField
          style={styles.textField}
          placeholder='Password'
          type='password'
          fullWidth
        />
        <Button
          variant="contained"
          fullWidth
          style={styles.buttonLogin}
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