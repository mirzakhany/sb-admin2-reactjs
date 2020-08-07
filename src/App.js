import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

export default class App extends Component {
  render() {
    return (
      <Router>
          <Routes />
      </Router>
    );
  }
}
