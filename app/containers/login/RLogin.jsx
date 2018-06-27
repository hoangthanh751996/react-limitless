import React, {Component} from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';

class RLogin extends Component {
  componentDidMount () {

  }

  render () {
    return (
      <div className="login-container bg-slate-800">
        <div className="page-container">
          <div className="page-content">
            <div className="content-wrapper">
              <div className="content">
                <form action="index.html">
                  <div className="panel panel-body login-form">
                    <div className="text-center">
                      <div className="icon-object border-warning-400 text-warning-400"><i className="icon-people"></i></div>
                      <h5 className="content-group-lg">Login to your account <small className="display-block">Enter your credentials</small></h5>
                    </div>
                    <div className="form-group has-feedback has-feedback-left">
                      <input type="text" className="form-control" placeholder="Username" />
                      <div className="form-control-feedback">
                        <i className="icon-user text-muted"></i>
                      </div>
                    </div>
                    <div className="form-group has-feedback has-feedback-left">
                      <input type="password" className="form-control" placeholder="Password" />
                      <div className="form-control-feedback">
                        <i className="icon-lock2 text-muted"></i>
                      </div>
                    </div>
                    <div className="form-group login-options">
                      <div className="row">
                        <div className="col-sm-6">
                          <label className="checkbox-inline">
                            <input type="checkbox" className="styled" checked="checked" />
                            Remember
                          </label>
                        </div>
                        <div className="col-sm-6 text-right">
                          <a href="login_password_recover.html">Forgot password?</a>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn bg-blue btn-block">Login <i className="icon-circle-right2 position-right"></i></button>
                    </div>
                    <div className="content-divider text-muted form-group"><span>or sign in with</span></div>
                    <ul className="list-inline form-group list-inline-condensed text-center">
                      <li><a href="#" className="btn border-indigo text-indigo btn-flat btn-icon btn-rounded"><i className="icon-facebook"></i></a></li>
                      <li><a href="#" className="btn border-pink-300 text-pink-300 btn-flat btn-icon btn-rounded"><i className="icon-dribbble3"></i></a></li>
                      <li><a href="#" className="btn border-slate-600 text-slate-600 btn-flat btn-icon btn-rounded"><i className="icon-github"></i></a></li>
                      <li><a href="#" className="btn border-info text-info btn-flat btn-icon btn-rounded"><i className="icon-twitter"></i></a></li>
                    </ul>
                    <div className="content-divider text-muted form-group"><span>Don't have an account?</span></div>
                    <a href="login_registration.html" className="btn bg-slate btn-block content-group">Register</a>
                    <span className="help-block text-center no-margin">By continuing, you're confirming that you've read our <a href="#">Terms &amp; Conditions</a> and <a href="#">Cookie Policy</a></span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RLogin;
