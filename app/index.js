import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './composeAssets';

import RApp from './containers/RApp';

ReactDOM.render(
  <Router>
    <Route path="/" component={RApp}/>
  </Router>,
  document.getElementById('dashboard-container')
);
