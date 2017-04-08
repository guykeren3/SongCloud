import React from 'react';
import uuid from 'uuid';

import Song from './Song'

export default class Playlist extends React.Component {

  constructor() {
    super();
    this.state = {
      isDropdownOpen: false
    };
  }


  dropDownToggle() {
    let dropdownState = !this.state.isDropdownOpen;

    this.setState({isDropdownOpen: dropdownState})
  }

  render() {
    const playlist = this.props.playlist;
    // console.info(playlist);

    const song = this.props.playlist.songs;
    const imgUrl = song.artwork_url ? song.artwork_url.replace('large', 't300x300') : song.artwork_url;

    return (
      <div className="playlist-container">
        <div className="playlist-titles">
          {this.props.playlist.name} <span>8</span>
          <button type="button" onClick= { () => { this.props.deletePlaylist() } } >delete</button>
        </div>
        <ul className="songs-list-explore">
          <Song song={song}
                imgUrl={imgUrl}
                {...this.props}
          />
        </ul>
      </div>
    )
  }
}




