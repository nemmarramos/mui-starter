import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

import Index from './pages';
import LoginPage from './pages/LoginPage';
import "assets/scss/material-kit-react.css?v=1.1.0";

// Render App
ReactDOM.render(
  <Router>
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </React.Fragment>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
