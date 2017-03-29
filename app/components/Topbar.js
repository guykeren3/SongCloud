/**
 * Created by Guy on 28/03/2017.
 */

import React from 'react';

export default function Topbar() {
  return (
    <header className="top-bar">
      <a href="#" className="logo-homepage-anchor">
        <i className="fa fa-mixcloud scale-topbar" aria-hidden="true"/>
        <h1>SongCloud</h1></a>
      <div>
      <input type="text"/>
      <button type="button"> Logout</button>
      </div>
    </header>
  )
}
