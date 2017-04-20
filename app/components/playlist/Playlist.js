// importing scss
import './playlist.scss'

import React from 'react';
import uuid from 'uuid';

import Song from '../song/Song'


export default class Playlist extends React.Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      isDropdownOpen: false,
      isTitleRenamed: false,
      value: ''
    };
  }

  titleToggleFromTitleClick() {
    this.setState({isTitleRenamed: true})
  }

  dropDownToggle() {
    let dropdownState = !this.state.isDropdownOpen;

    this.setState({isDropdownOpen: dropdownState})
  }

  handleSubmit(event) {
    event.preventDefault();
    // alert('A name was submitted: ' + this.state.value);

    if (this.state.value !== '') {

      // updating the info in root

      const playlistName = this.state.value;
      const playlistId = this.props.playlist.id;

      this.props.updatePlaylistName(playlistName, playlistId)

    }

    this.setState({isTitleRenamed: false})
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {

    const playlist = this.props.playlist;
    // console.info(playlist);

    const titleName = this.state.isTitleRenamed ? <form onSubmit={ this.handleSubmit }>
      <input type="text" value={this.state.value} onChange={this.handleChange} autoFocus className="title-input"/>
    </form>
      : this.props.playlist.name;

    //const song = this.props.playlist.songs[0];

    //using this.props.deletePlaylist which is passed from root so when click on delete will update the root state playlist array.
    return (
      <div className="playlist-container">
        <div className="playlist-titles">
          <div onClick={ () => {
            this.titleToggleFromTitleClick();
          } }> {titleName}
          </div>
          {/*<span>8</span>*/}
          <button type="button" onClick={ () => {
            this.props.deletePlaylist()
          } }>delete
          </button>
        </div>
        <ul className="songs-list-explore">
          {this.props.playlist.songs.map(song => {
            const imgUrl = song.artwork_url ? song.artwork_url.replace('large', 't300x300') : song.artwork_url;
            return <Song song={song}
                         imgUrl={imgUrl}
                         {...this.props}
                         key={song.id}
            />
          })}

        </ul>
      </div>
    )
  }
}




