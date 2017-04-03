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
        <audio className="player-bar" controls>
          <source src="https://api.soundcloud.com/tracks/79973942/stream?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z"
                  type="audio/ogg"/>
        </audio>
      </div>
    </div>
  )
}

