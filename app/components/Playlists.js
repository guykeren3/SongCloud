/**
 * Created by Guy on 28/03/2017.
 */

import React from 'react';
import {Link, NavLink} from "react-router-dom";

export default class Explore extends React.Component {
  constructor() {
    super();
    // this.songTitleLimiter = this.songTitleLimiter.bind(this);
    // this.convertSecondsToMinutes = this.convertSecondsToMinutes.bind(this);

    this.state = {

    };
  }

  render() {
    console.info(this.props);
    const playlistArray = this.props.playlist;

    const playlistName = playlistArray[0].name;

    console.info(playlistName);

    console.info(this.props.playlist);
    return (
      <div className="playlist-page-container">
        <aside className="playlist-side-bar">
          <div className="add-playlist-container">
            <button type="button">Add new playlist</button>
          </div>
          <div className="my-songs-container">

            <ul className="my-songs-list-playlist">
              <li><NavLink to='' activeClassName='selected-list'>My songs </NavLink></li>
              <li><Link to=''>Cool trance music</Link></li>
              <li><Link to=''>House party 2017</Link></li>
              <li><Link to=''>Old</Link></li>
              <li><Link to=''>Raggae</Link></li>
            </ul>
          </div>
        </aside>

        <main className="playlist-wrapper">

          <div className="playlist-container">
            <div className="playlist-titles">
              {playlistName} <span>8</span>
              <button type="button">delete</button>
            </div>
            <ul className="songs-list-explore-playlist">
              <li className="song-in-list-playlist"> song</li>
              <li className="song-in-list-playlist"> song</li>
              <li className="song-in-list-playlist"> song</li>
              <li className="song-in-list-playlist"> song</li>
              <li className="song-in-list-playlist"> song</li>
              <li className="song-in-list-playlist"> song</li>
              <li className="song-in-list-playlist"> song</li>
              <li className="song-in-list-playlist"> song</li>
            </ul>
          </div>
        </main>

      </div>
    )
  }
}
