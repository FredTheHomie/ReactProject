import React, { Component } from 'react';
import FormField from './FormField';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class AuthForm extends Component {
  render(){
    return(
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
              <FormField/>
            </CardContent>
          </Card>
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