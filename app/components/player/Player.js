// importing scss
import './player.scss'

import React from 'react';
import {connect} from 'react-redux';

function Player(props) {
  
  const song = props.currentTrack;

  if (!song) {
    return <div className="player-shifted"/>
  }

  const songUrl = `${song.stream_url}?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z`;
  const songImg = `${song.artwork_url}`;
  const songName = `${song.title}`;

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

function mapStateToProps(stateData) { //this will bring me the entire data of store ( the reducers ) and will return keys on the props, and the props will be available only on the current component
  return {
    currentTrack: stateData.currentTrack
  }
}

// because the props is being transferred to the component we need to add it to the main function("props") unless it's a class.

export default connect(mapStateToProps)(Player);

