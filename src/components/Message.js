import React, { Component } from 'react';

import Snackbar from '@material-ui/core/Snackbar';

class Message extends Component {

  childHandleClose = () => {
    this.props.handleClose();
  };

  messageDisplay = () => {
    if(this.props.emailValid !== true && this.props.passwordValid !== true)
      return 'Please enter a valid email and password';
    else if(this.props.emailValid !== true)
      return 'Please enter a valid email';
    else if(this.props.passwordValid !== true)
      return 'Password must contain one capital, lower-case, special key, number, and be eight characters long';
  };

  render(){
    return(
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={this.props.open && (this.props.emailValid !== true || this.props.passwordValid !== true)}
          autoHideDuration={3000}
          onClose={this.childHandleClose}
          message={this.messageDisplay()}
        />
      </div>
    );
  }
}

export default Message;