// importing scss
import './topbar.scss'

import React from 'react';


import
{
  NavLink
} from 'react-router-dom';

export default class Topbar extends React.Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    event.preventDefault();
    let mySearch = this.search.value;
    this.props.history.push(`/explore/${mySearch}?search=true`);
  }

  render() {
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
        <form className="top-bar-right-wrapper" onSubmit={this.handleSearch}>
          <button><i className="fa fa-search" aria-hidden="true"/></button>
          <input type="text" placeholder="SEARCH" className="search-box"
                 ref={(searchValue) => this.search = searchValue}/>
          <button type="button"> Logout</button>
        </form>
      </header>
    )
  }
}


