import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";
import Switch from '@material-ui/core/Switch';

class List extends Component {
  constructor(props){
    super(props);

    this.state = {
      checked: this.props.checked
    }
  }

  handleCardColor = () => {
    return this.state.checked !== false ? {backgroundColor: '#EEEEEE'} : {backgroundColor: 'white'};
  };

  render(){
    return(
      <div>
        <Card style={{...styles.card, ...this.handleCardColor()}}>
          <CardContent style={styles.parentHeader}>
            <div style={styles.leftSide}>
              <Typography
                variant="title"
                style={styles.heading}
              >
                {this.props.title}
              </Typography>
              <div style={styles.brief}>
                {this.props.brief}
              </div>
            </div>
            <div style={styles.rightSide}>
              <Typography
                variant="subheading"
                style={styles.date}
              >
                {this.props.date}
              </Typography>
              <Switch
                checked={this.state.checked}
                onChange={(e) => {this.setState({checked: e.target.checked})}}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

const styles = {
  card: {
    width: '600px',
    height: '100px',
    marginLeft: '5%',
    marginTop: '10px'
  },
  heading: {
    color: 'orange',
    marginBottom: '7px'
  },
  brief: {
    color: '#616161'
  },
  parentHeader: {
    display: 'flex',
  },
  leftSide: {
    flex: '0 0 65%'
  },
  rightSide: {
    flex: '1',
    marginLeft: '90px'
  },
  date: {
    color: '#BDBDBD'
  }
};

export default List;