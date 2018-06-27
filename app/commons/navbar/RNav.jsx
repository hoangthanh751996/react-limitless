import React, {Component} from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import RNavHeader from './RNavHeader';
import RNavCol from './RNavCol';

class RNav extends Component {
  componentDidMount () {

  }

  render () {
    return (
      <div className="navbar navbar-inverse">
        <RNavHeader/>
        <RNavCol/>
      </div>
    );
  }
}

export default RNav;
