/**
 * Created by Guy on 28/03/2017.
 */

import React from 'react';
import GenreChooser from './GenreChooser'

export default class Explore extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      loadingState: 'loading',
    };
  }

  getXhr() {
    const xhr = new XMLHttpRequest();
    console.info(this.props.match.params);
    const genre = this.props.match.params.genre;

    xhr.open('GET', `https://api.soundcloud.com/tracks?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z&limit=20&offset=0&tags=${genre}`);
    xhr.addEventListener('load', () => {
      this.setState({songs: JSON.parse(xhr.responseText), loadingState: 'loaded'});
    });

    xhr.addEventListener('error', () => {
      this.setState({loadingState: 'error'});
    });
    xhr.send();
  }

  componentDidMount() {
    this.getXhr()
  }

  componentDidUpdate(prevProps) { // fixing the switch between the genres on click

    if (prevProps.match.params.genre === this.props.match.params.genre)
      return;
    console.log('did update');
    this.getXhr();
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
      return <li key={song.title}>
        <div style={{backgroundImage: `url(${song.artwork_url.replace('large', 't300x300')})`}}
             className="song-in-list"></div>
        <span>{this.songTitleLimiter(song.title)}</span>
        <div className="clock-icon"><i className="fa fa-clock-o"
                                       aria-hidden="true"></i> {this.convertSecondsToMinutes(song.duration)}</div>
        <i className="fa fa-heart-o heart-font" aria-hidden="true"></i>
      </li>
    });

    return (
      <ul className="songs-list-explore">
        {songsList}
      </ul>
    );
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
        return <div className="loader"><i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i> </div>;

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
              <button type="button" className="page-btn">Previous</button>
              <span>Page 1</span>
              <button type="button" className="page-btn">Next</button>
            </div>


          </div>
        )
    }
  }
};
