/**
 * Created by Guy on 28/03/2017.
 */

import React from 'react';

export default function Signin() {
  return (
    <div>
      <div className="signup-wrapper">
        <a href="#" className="logo-signup-anchor">
          <i className="fa fa-mixcloud scale-signup-logo" aria-hidden="true"/>
          <h2>SongCloud</h2></a>
      </div>
      <div className="signup-form-wrapper">
        <form action="/login" method="post" className="signup-form">
          <h3 className="create-account-title">Sign In</h3>
          <input type="email" required placeholder="Email"/>
            <input type="password" required placeholder="Password"/>
          <button type="button" className="signup-btn">continue</button>
        </form>

        <p>Don't have an account yet?
          <a href="#" className="signin-anchor-if-got-account">Create Account</a></p>
      </div>
    </div>
  )
}
