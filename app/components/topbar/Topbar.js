// importing scss
import './topbar.scss'

import React from 'react';



import
{NavLink} from 'react-router-dom';

export default function Topbar() {
  return (
    <header className="top-bar">
      <div className="top-bar-left-wrapper">
        <NavLink to="/" className="logo-homepage-anchor">
          <i className="fa fa-mixcloud scale-topbar" aria-hidden="true"/>
          <h1>SongCloud</h1>
        </NavLink>
        <nav className="nav-bar">
          <ul>
            <li><NavLink to="/explore" className="nav-links">Explore</NavLink></li>
            <li><NavLink to="/playlists" className="nav-links">Playlists</NavLink></li>
          </ul>
        </nav>
      </div>
      <div className="top-bar-right-wrapper">
        <i className="fa fa-search" aria-hidden="true"/>
        <input type="text" placeholder="SEARCH" className="search-box"/>
        <button type="button"> Logout</button>
      </div>


    </header>
  )
}

{/*<header class="container--baseline">*/
}
{/*<h1 class="m--1 g--4">Navigation</h1>*/
}
{/*<nav class="g--3 nav--horizontal">*/
}
{/*<ul>*/
}
{/*<li><a href="http://www.google.com">Nav link</a></li>*/
}
