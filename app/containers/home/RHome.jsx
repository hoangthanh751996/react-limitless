import React, {Component} from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import RNav from '../../commons/navbar/RNav';
import RSideBar from '../../commons/sidebar/RSideBar';

class RHome extends Component {
  componentDidMount () {

  }

  render () {
    return (
      <div className="">
        <RNav/>
        <div className="page-container">
          <div className="page-content">
            <RSideBar/>
            <div className="content-wrapper">

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RHome;
