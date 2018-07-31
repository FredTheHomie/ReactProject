import React, { Component } from 'react';

import Snackbar from '@material-ui/core/Snackbar';

class Message extends Component {

  childHandleClose = () => {
    this.props._handleClose();
  };

  render(){
    return(
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.props.open}
          autoHideDuration={6000}
          onClose={this.childHandleClose}
        />
      </div>
    );
  }
};

export default Message;