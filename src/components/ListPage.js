import React, { Component } from 'react'
import List from './List';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";

import Data from '../data/Data';

class ListPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    this.setState({
      data: [...Data.data]
    });
  }

  render(){
  const listItems = this.state.data.map((card) => {
    return <List
      title={card.title}
      brief={card.brief}
      date={card.date}
      checked={card.checked}
    />
  });

    return(
      <div style={styles.parent}>
        <div>
          <Card style={styles.cardHeading}>
            <CardContent>
              <Typography
                variant="headline"
                style={styles.heading}
              >
                Your Items
              </Typography>
            </CardContent>
          </Card>
        </div>
        {listItems}
      </div>
    );
  }
}

const styles = {
  parent: {
    marginTop: '80px',
  },
  cardHeading: {
    width: '600px',
    height: '60px',
    marginLeft: '5%',
    backgroundColor: '#1565C0',
  },
  heading: {
    color: 'white'
  }
};

export default ListPage;