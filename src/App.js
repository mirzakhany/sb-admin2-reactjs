import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import { createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory();

export default class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
          <Routes />
      </Router>
    );
  }
}
