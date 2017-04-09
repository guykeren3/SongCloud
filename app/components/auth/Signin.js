// importing scss
import './auth.scss'

import React from 'react';
import {NavLink} from "react-router-dom";

export default function Signin() {
  return (
    <div className="auth sign-wrapper">
      <div>
        <NavLink to="/" className="logo-sign-anchor">
          <i className="fa fa-mixcloud scale-sign-logo" aria-hidden="true"/>
          <h2>SongCloud</h2>
        </NavLink>
      </div>
      <div className="sign-form-wrapper">
        <form action="/login" method="post" className="sign-form">
          <h3 className="signin-title">Sign In</h3>
          <input type="email" required placeholder="Email" className="line-customize"/>
          <input type="password" required placeholder="Password" className="line-customize"/>
          <div className="handle-btn-location-sign">
            <button type="button" className="sign-btn btn-ripple">continue</button>
          </div>
        </form>

        <p>Don't have an account yet?
          <a href="signup" className="sign-anchor-if-got-account">Create Account</a></p>
      </div>
    </div>
  )
}
