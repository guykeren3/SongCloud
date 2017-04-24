import './song.scss'

import React from "react";
import {connect} from 'react-redux';

class Song extends React.Component {
  constructor() {
    super();
    this.dropDownPlaylist = this.dropDownPlaylist.bind(this);
    this.convertSecondsToMinutes = this.convertSecondsToMinutes.bind(this);
    this.songTitleLimiter = this.songTitleLimiter.bind(this);

    this.state = {
      isDropdownOpen: false
    }
  }

  dropDownToggle() {
    let dropdownState = !this.state.isDropdownOpen;

    this.setState({isDropdownOpen: dropdownState});
  }

  // turning the miliseconds of the songs to minutes
  convertSecondsToMinutes(songDuration) {
    const minutes = Math.floor(parseInt(songDuration) / 60000);
    const seconds = ((parseInt(songDuration % 60000) / 1000).toFixed(0));
    const duration = (seconds === 60 ? (minutes + 1) + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds);

    return duration
  }

  songTitleLimiter(title) {
    if (title.length > 30) {
      return title.slice(0, 29) + '...'
    }
    else {
      return title;
    }
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
              return songInPlaylist
            }
          });

        console.info(isSongInPlaylist, 'found one!!!');
        // console.info(playlists);
        return (
          <div key={playlist.id}>
            <input name={playlist.name} id={playlist.name} type="checkbox"
                   onChange={() => this.props.addSongToPlaylist(song, playlist)}
                   checked={isSongInPlaylist}/>
            <label htmlFor={playlist.name}>{playlist.name}</label>
          </div>
        )
      });
    }
    // console.info(playlists);
  }

  render() {
    const song = this.props.song;
    const imgUrl = song.artwork_url ? song.artwork_url.replace('large', 't300x300') : song.artwork_url;


    if (this.props.song !== []) { // if no song which means we are creating a new playlist an empty div will be rendered else, li will return
      return <li className="song-item">
        <div style={{backgroundImage: `url(${imgUrl})`}}
             className="song-in-list"
             onClick={ () => this.props.updateCurrentTrack(song) }/>
        <span>{this.songTitleLimiter(song.title)}</span>
        <div className="clock-icon"><i className="fa fa-clock-o" aria-hidden="true"/>
          {this.convertSecondsToMinutes(song.duration)}
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
    else {
      return <div className="noSongInListMessage"> Add some songs to this playlist.</div> // if no song, will say - add some in playlist.
    }
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

function mapStateToProps(stateData) { //this will bring me the entire data of store ( the reducers ) and will return keys on the props, and the props will be available only on the current component
  return {
    playlists: stateData.playlists
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Song);
