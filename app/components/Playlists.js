import React from 'react';
import {Link, NavLink} from "react-router-dom";

import Playlist from './Playlist'

export default class Playlists extends React.Component {

  constructor() {
    super();
    this.songTitleLimiter = this.songTitleLimiter.bind(this);
    this.convertSecondsToMinutes = this.convertSecondsToMinutes.bind(this);
  }

  createPlaylists() {
    return this.props.playlists.map((playlist) => {
      return <Playlist playlist={playlist}
                       songTitleLimiter={this.songTitleLimiter}
                       convertSecondsToMinutes={this.convertSecondsToMinutes}
                       {...this.props}
                       key={playlist.id}/>
    });
  }

  songTitleLimiter(title) {
    if (typeof title !== 'undefined') {
      if (title.length > 30) {
        return title.slice(0, 29) + '...'
      }
      else {
        return title;
      }
    }
  }

  convertSecondsToMinutes(songDuration) {
    const minutes = Math.floor(parseInt(songDuration) / 60000);
    const seconds = ((parseInt(songDuration % 60000) / 1000).toFixed(0));
    const duration = (seconds === 60 ? (minutes + 1) + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds);

    return duration
  }


  render() {
    return (
      <div className="playlist-page-container">
        <aside className="playlist-side-bar">
          <div className="add-playlist-container">
            <button type="button" onClick={ () => {
              this.props.createPlaylist()
            } }>Add new playlist
            </button>
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

          { this.createPlaylists() }

        </main>

      </div>
    )
  }
}
