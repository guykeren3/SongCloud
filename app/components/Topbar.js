/**
 * Created by Guy on 28/03/2017.
 */

import React from 'react';

export default function Topbar() {
  return (
    <header className="top-bar">
      <div className="top-bar-left-wrapper">
      <a href="#" className="logo-homepage-anchor">
        <i className="fa fa-mixcloud scale-topbar" aria-hidden="true"/>
        <h1>SongCloud</h1></a>
      <nav className="nav--horizontal g--4 g--3 nav--horizontal">
        <ul>
          <li><a href="#">Explore</a></li>
          <li><a href="#">Playlists</a></li>
        </ul>
      </nav>
      </div>
      <input type="text" placeholder="SEARCH"/>
      <button type="button"> Logout</button>

    </header>
  )
}

{/*<header class="container--baseline">*/}
  {/*<h1 class="m--1 g--4">Navigation</h1>*/}
  {/*<nav class="g--3 nav--horizontal">*/}
    {/*<ul>*/}
      {/*<li><a href="http://www.google.com">Nav link</a></li>*/}
