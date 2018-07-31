import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Root from './Root';
import ListPage from './components/ListPage';

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route path={'/'} component={Root} exact/>
            <Route path={'/listPage'} component={ListPage}/>
          </Switch>
      </Router>
    );
  }
}

export default App;
