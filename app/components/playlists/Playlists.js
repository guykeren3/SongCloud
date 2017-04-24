// importing scss
import './playlists.scss'

import React from 'react';
import {Link, NavLink} from "react-router-dom";

import Playlist from '../playlist/Playlist'
import {connect} from 'react-redux';




class Playlists extends React.Component {

  constructor() {
    super();
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

function mapStateToProps(stateData) { //this will bring me the entire data of store ( the reducers ) and will return keys on the props, and the props will be available only on the current component
  return {
    playlists: stateData.playlists
  }
}

// because the props is being transferred to the component we need to add it to the main function("props") unless it's a class.

export default connect(mapStateToProps)(Playlists);
