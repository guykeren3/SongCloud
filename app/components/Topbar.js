/**
 * Created by Guy on 28/03/2017.
 */

import React from 'react';

export default function Topbar() {
  return (
    <header>
      <a href="#"><img src="assets/logo.png" alt="logo"/>
        <h1>SongCloud</h1></a>
      <input type="text"/>
      <button type="button"> Logout</button>
    </header>
  )
}
