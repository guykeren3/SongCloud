/**
 * Created by Guy on 28/03/2017.
 */

import React from 'react';

export default function Player() {
  return (
    <div>
      <img src="#" alt="thumbnail"/>
      <span>Song Name</span>
      <audio src="#" controls>
        <track kind="captions" src="foo.en.vtt" label="English"/>
          <track kind="captions" src="foo.sv.vtt" label="Svenska"/>
      </audio>
    </div>
  )
}
