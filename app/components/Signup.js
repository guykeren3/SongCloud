/**
 * Created by Guy on 28/03/2017.
 */

import React from 'react';

export default function Signup() {
  return (
    <div>
      <div className="sign-wrapper">
        <a href="#" className="logo-sign-anchor">
          <i className="fa fa-mixcloud scale-sign-logo" aria-hidden="true"/>
          <h2>SongCloud</h2></a>
      </div>
      <div className="sign-form-wrapper">
        <form action="/login" method="post" className="sign-form">
          <h3 className="create-account-title">Create account</h3>
          <input type="email" required placeholder="Email"/>
          <input type="password" required placeholder="Password"/>
          <button type="button" className="sign-btn">continue</button>
        </form>

        <p>Already have an account?
          <a href="#" className="sign-anchor-if-got-account">Sign in</a></p>
      </div>
    </div>
  )
}
