import React, { Component } from 'react';
import './App.css';

import AuthForm from './components/AuthForm';

class Root extends Component {
  render() {
    return (
      <div className="App">
        <AuthForm />
      </div>
    );
  }
}

export default Root;