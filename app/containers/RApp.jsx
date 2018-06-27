import React, {Component} from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import RRoute from '../commons/RRoute';
import RHome from './home/RHome';
import RLogin from './login/RLogin';

class RApp extends Component {
  componentDidMount () {

  }

  render () {
    return (
      <div className="">
        <Switch>
          <RRoute exact path="/" component={RHome}/>
          <RRoute exact path="/login" component={RLogin}/>
          <Redirect to="/"/>
        </Switch>
      </div>
    )
  }
}

export default RApp;
