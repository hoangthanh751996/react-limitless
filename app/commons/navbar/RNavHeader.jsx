import React, {Component} from 'react';
import logo_light from '../../assets/theme/images/logo_light.png';

class RNavHeader extends Component {
  componentDidMount () {

  }

  render () {
    return (
      <div className="navbar-header">
        <a className="navbar-brand" href="#"><img src={logo_light} alt=""/></a>

        <ul className="nav navbar-nav visible-xs-block">
          <li><a data-toggle="collapse" data-target="#navbar-mobile"><i className="icon-tree5"></i></a></li>
          <li><a className="sidebar-mobile-main-toggle"><i className="icon-paragraph-justify3"></i></a></li>
        </ul>
      </div>
    )
  }
}

export default RNavHeader;
