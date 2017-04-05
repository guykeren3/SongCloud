/**
 * Created by Guy on 28/03/2017.
 */

import React from 'react';

export default class Player extends React.Component {
  constructor() {
    super();
    this.state = {
      song: 'songHasArrived'
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.track.title !== this.props.track.title) {
      this.didSongArrive()
    }
    if (prevState.song !== this.state.song) {
      this.didSongArrive();
    }
  }

  componentDidMount() {
    this.didSongArrive();
  }

  didSongArrive() {
    if (typeof this.props.track.title === 'undefined') {
      this.setState({song: 'noSong'})
    }
    else {
      this.setState({song: 'songHasArrived'})
    }
  }

  render() {
    const songUrl = `${this.props.track.stream_url}?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z`;
    const songImg = `${this.props.track.artwork_url}`;
    const songName = `${this.props.track.title}`;

    switch (this.state.song) {
      case 'noSong':
        return <span></span>
      case 'songHasArrived': {
        return (
          <div className="player-container">
            <div className="thumbnail-info">
              <div style={{backgroundImage: `url(${songImg})`}}/>
              <span className="song-name">{ songName }</span>
            </div>
            <div className="player-display">
              <audio className="player-bar"
                     controls
                     src={ songUrl }
                     autoPlay/>
            </div>
          </div>
        )
      }
    }
  }
}
