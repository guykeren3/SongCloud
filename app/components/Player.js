/**
 * Created by Guy on 28/03/2017.
 */

import React from 'react';

export default function Player() {
  return (
    <div className="player-container">
      <div className="thumbnail-info">
        <img src="#" alt="thumbnail"/>
        <span className="song-name">Song Name</span>
      </div>
      <div className="player-display">
        <audio src="#" controls className="player-bar">
          <track kind="captions" src="foo.en.vtt" label="English"/>
          <track kind="captions" src="foo.sv.vtt" label="Svenska"/>
        </audio>
      </div>
    </div>
  )
}
