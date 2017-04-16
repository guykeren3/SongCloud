// importing scss
import './playlists.scss'

import React from 'react';
import {Link, NavLink} from "react-router-dom";
import { connect } from 'react-redux';

import Playlist from '../playlist/Playlist'



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
            <button type="button" className="btn-ripple" onClick={ () => {
              this.props.createPlaylist()
            } }>Add new playlist
            </button>
          </div>
          <div className="my-songs-container">

            <ul className="my-songs-list-playlist">
              {/*sidebar dynamic playlists*/}
              {this.props.playlists.map((playlist) => {
              console.info(playlist.name);
              return <li key={playlist.id}><Link to={playlist.name}>{playlist.name}</Link></li> } ) }
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
