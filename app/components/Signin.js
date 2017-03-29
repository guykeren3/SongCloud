/**
 * Created by Guy on 28/03/2017.
 */

import React from 'react';

export default function Signin() {
  return (
    <div>
      <div className="sign-wrapper">
        <a href="#" className="logo-sign-anchor">
          <i className="fa fa-mixcloud scale-sign-logo" aria-hidden="true"/>
          <h2>SongCloud</h2></a>
      </div>
      <div className="sign-form-wrapper">
        <form action="/login" method="post" className="sign-form">
          <h3 className="signin-title">Sign In</h3>
          <input type="email" required placeholder="Email"/>
            <input type="password" required placeholder="Password"/>
          <button type="button" className="sign-btn">continue</button>
        </form>

        <p>Don't have an account yet?
          <a href="#" className="sign-anchor-if-got-account">Create Account</a></p>
      </div>
    </div>
  )
}
