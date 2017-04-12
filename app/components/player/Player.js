// importing scss
import './player.scss'

import React from 'react';

import store from '../../store'


export default function Player() {

  const storeData = store.getState();
  const song = storeData.currentTrack;

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


