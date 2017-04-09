// importing scss
import './explore.scss'

import React from 'react';
import {Link} from "react-router-dom";

import GenreChooser from '../genres/GenreChooser'
import Song from '../song/Song'

export default class Explore extends React.Component {
  constructor() {
    super();
    this.songTitleLimiter = this.songTitleLimiter.bind(this);
    this.convertSecondsToMinutes = this.convertSecondsToMinutes.bind(this);

    this.state = {
      songs: [],
      loadingState: 'loading',
      offset: 0,
      limit: 15
    };
  }

  songsState(xhr) {
    this.setState({songs: JSON.parse(xhr.responseText), loadingState: 'loaded'});
  }

  getSongs() {
    const xhr = new XMLHttpRequest();
    const genre = this.props.match.params.genre;
    const offset = this.state.offset;
    const limit = this.state.limit;

    xhr.open('GET', `https://api.soundcloud.com/tracks?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z&limit=${limit}&offset=${offset}&tags=${genre}`);
    xhr.addEventListener('load', this.songsState.bind(this, xhr));

    xhr.addEventListener('error', () => {
      this.setState({loadingState: 'error'});
    });
    xhr.send();
  }

  componentDidMount() {
    this.getSongs()
  }

  componentDidUpdate(prevProps, prevState) { // fixing the switch between the genres on click

    if (prevProps.match.params.genre !== this.props.match.params.genre) {
      this.setState({offset: 0}, () => {
        this.getSongs();
      });
      console.log('did update');
    }

    if (prevState.offset !== this.state.offset) {
      this.getSongs();
    }
  }

  // turning the miliseconds of the songs to minutes
  convertSecondsToMinutes(songDuration) {
    const minutes = Math.floor(parseInt(songDuration) / 60000);
    const seconds = ((parseInt(songDuration % 60000) / 1000).toFixed(0));
    const duration = (seconds === 60 ? (minutes + 1) + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds);

    return duration
  }

  createSongs() {
    const songsList = this.state.songs.map((song) => {
      return <Song song={song}
                   songTitleLimiter={this.songTitleLimiter}
                   convertSecondsToMinutes={this.convertSecondsToMinutes}
                   {...this.props}
                   key={song.id}/>
    });


    return (
      <ul className="songs-list-explore">
        {songsList}
      </ul>
    );
  }

  prevPage() {
    this.setState({
      offset: this.state.offset - this.state.limit
    });
  }

  nextPage() {
    this.setState({
      offset: this.state.offset + this.state.limit
    });
  }

// full heart
//<i className="fa fa-heart" aria-hidden="true"></i>

  // toggle heart color on click

//   toggleHeart(classname) {
//     if (classname === 'heart-font fa fa-heart-o heart-font') {
//       this.heart.className = "heart-font fa fa-heart check-h";
//     }
//     if (classname === "heart-font fa fa-heart check-h") {
//       this.heart.className = 'heart-font fa fa-heart-o';
//     }
//   }
//
// <i className="heart-font fa fa-heart-o" ref={(heartDomElm) => {
//   this.heart = heartDomElm
// }} onClick={() => {
//   this.addToPlaylistMnu()
// }}>


  songTitleLimiter(title) {
    if (title.length > 30) {
      return title.slice(0, 29) + '...'
    }
    else {
      return title;
    }
  }


  render() {
    switch (this.state.loadingState) {
      case 'loading':
        // icon is spinnig loading from icons website
        return <div className="loader">
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw"/>
        </div>;

      case 'error':
        return <div>Error!</div>;
      case 'loaded':
        return (
          <div className="explore-container">

            <GenreChooser />

            <div className="title-container">
              <h3>Genre: Hip-hop rap</h3>
            </div>
            <div className="songs-wrapper">

              { this.createSongs() }

            </div>

            <div className="page-num-wrapper">
              <button onClick={ this.prevPage.bind(this) } className="page-btn btn-ripple" disabled={this.state.offset === 0}>
                Previous
              </button>
              <span>Page { this.state.offset / this.state.limit + 1 }</span>
              <button onClick={ this.nextPage.bind(this) } className="page-btn btn-ripple">Next</button>
            </div>

          </div>
        )
    }
  }
};
