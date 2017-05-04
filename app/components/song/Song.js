import './song.scss'

import React from "react";
import {connect} from 'react-redux';

class Song extends React.Component {
  constructor() {
    super();
    this.dropDownPlaylist = this.dropDownPlaylist.bind(this);

    this.state = {
      isDropdownOpen: false
    }
  }

  dropDownToggle() {
    let dropdownState = !this.state.isDropdownOpen;

    this.setState({isDropdownOpen: dropdownState});
  }


  // should put the two lines on the input in dropDownPlaylist
  /* onChange={this.playlistChecked}*/
  /* checked={ () => this.isPlaylistChecked(playlist) }/> */

  dropDownPlaylist(song) {
    const playlists = this.props.playlists;
    console.info(this.props.playlists);

    if (typeof playlists !== "undefined") {
      return playlists.map((playlist) => {
        // console.info('songs', playlist.songs);
        const isSongInPlaylist = !playlist.songs ? false : // if false, false which means it wont do anything after
          playlist.songs.find((songInPlaylist) => {
            if (songInPlaylist.id === song.id) {
              return songInPlaylist;
            }
          });

        return (
          <div key={playlist.id}>
            <input name={playlist.name} id={playlist.name} type="checkbox"
                   onChange={(ev) => ev.target.checked ? this.props.addSongToPlaylist(song, playlist) : this.props.removeSongFromPlaylist(song, playlist)}
                   checked={isSongInPlaylist}/>
            <label htmlFor={playlist.name}>{playlist.name}</label>
          </div>
        )
      });
    }
  }

  render() {
    const song = this.props.song;
    const imgUrl = song.artwork_url ? song.artwork_url.replace('large', 't300x300') : song.artwork_url;

    return <li className="song-item">
      <div style={{backgroundImage: `url(${imgUrl})`}}
           className="song-in-list"
           onClick={ () => this.props.updateCurrentTrack(song) }/>
      <span>{this.props.songTitleLimiter(song.title)}</span>
      <div className="clock-icon"><i className="fa fa-clock-o" aria-hidden="true"/>
        {this.props.convertSecondsToMinutes(song.duration)}
      </div>
      <div className="heart-container">
        <i className="fa fa-heart-o heart-font" aria-hidden="true" onClick={ () => this.dropDownToggle() }/>

        { this.state.isDropdownOpen && (
          <div className="dropdown-menu-explore">
            <h4> Add to Playlist </h4>
            <button type="button" onClick={ () => this.props.createPlaylist(song, '/playlists') }> Create playlist +
            </button>

            <form>
              { this.dropDownPlaylist(song) }
            </form>
          </div> ) }
      </div>
    </li>
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateCurrentTrack(song) {
      dispatch({
        type: 'UPDATE_CURRENT_TRACK',
        song: song
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(Song);
