import './song.scss'

import React from "react";

export default class Song extends React.Component {
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

  dropDownPlaylist() {
    const playlists = this.props.playlists;
    if (typeof playlists !== "undefined") {
      return playlists.map((playlist) => {
        return (
          <div key={playlist.id}>
            <input name={playlist.name} id={playlist.name} type="checkbox"/>
            <label htmlFor={playlist.name}>{playlist.name}</label>
          </div>
        )
      });
    }
  }


  render() {
    const song = this.props.song;
    // console.info(this.props.song);
    const imgUrl = song.artwork_url ? song.artwork_url.replace('large', 't300x300') : song.artwork_url;


    if (this.props.song !== '') { // if no song which means we are creating a new playlist an empty div will be rendered else, li will return
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
              <button type="button" onClick={ () => this.props.createPlaylist(song, '/playlists')}> Create playlist +
              </button>

              <form>
                { this.dropDownPlaylist() }
                {/*<div>*/}
                {/*<input name="my-songs" id="my-songs" type="checkbox"/>*/}
                {/*<label htmlFor="my-songs">My songs</label>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*<input name="cool-trance-music" id="cool-trance-music" type="checkbox"/>*/}
                {/*<label htmlFor="cool-trance-music">Cool trance music</label>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*<input name="house-party-2017" id="house-party-2017" type="checkbox"/>*/}
                {/*<label htmlFor="house-party-2017">House party 2017</label>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*<input name="old" id="old" type="checkbox"/>*/}
                {/*<label htmlFor="old">Old</label>*/}
                {/*</div>*/}
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
