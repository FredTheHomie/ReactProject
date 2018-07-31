import React, { Component } from 'react';
import FormField from './FormField';
import Message from './Message';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Validation from "../service/Validation";

class AuthForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
      validation: false,
      emailText: '',
      emailValid: false,
      passwordText: '',
      passwordValid: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this._handleLogin = this._handleLogin.bind(this);
    this._handleEmailChange = this._handleEmailChange.bind(this);
    this._handlePasswordChange = this._handlePasswordChange.bind(this);
  }

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  _handleLogin = () => {
    this.setState({
      validation: true
    });
  };

  _handleEmailChange = text => {
    if(Validation.email(text) === true){
      this.setState({
        emailText: text,
        emailValid: true
      });
    } else
      this.setState({
        emailValid: false
      });
  };

  _handlePasswordChange = text => {
    if(Validation.password(text) === true){
      this.setState({
        passwordText: text,
        passwordValid: true
      });
    } else
      this.setState({
        passwordValid: false
      });
  };

  render(){
    return(
      <div>
        <Message
          handleClose={this.handleClose}
          open={this.state.open !== false}
        />
        <div className="authForm">
          <div style={styles.wrapper}>
            <Card
              style={styles.background}
              true={true}>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="headline"
                  style={styles.backgroundHeading}
                >
                  Welcome!
                </Typography>
              </CardContent>
            </Card>
            <Card
              style={styles.loginCard}>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="title"
                  style={styles.formStyle}
                >
                  Welcome!
                </Typography>
                <div style={styles.avatar}></div>
                <FormField
                  validation={this.state.validation}
                  handleLogin={this._handleLogin}
                  handleEmailChange={this._handleEmailChange}
                  emailValid={this.state.emailValid}

                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  wrapper: {
    //position: 'relative'
  },
  background: {
    marginLeft: '23%',
    marginRight: '23%',
    marginTop: '10%',
    height: '380px',
    backgroundColor: 'orange',
  },
  backgroundHeading: {
    marginRight: '400px',
    marginTop: '25px',
    color: 'white'
  },
  loginCard: {
    height: '480px',
    width: '22%',
    position: 'absolute',
    top: '12%',
    left: '50%',
  },
  formStyle: {
    color: 'orange',
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: '0 auto',
    borderRadius: '50%',
    marginTop: '20px',
    backgroundColor: 'orange',
    width: '70px',
    height: '70px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.12), 0 2px 3px rgba(0,0,0,0.24)',
    marginBottom: '20px'
  }
};

export default AuthForm;