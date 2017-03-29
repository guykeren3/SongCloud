/**
 * Created by Guy on 28/03/2017.
 */

import React from 'react';

export default function Explore() {
  return (
    <div>
      <nav>
        <ul className="category-nav">
          <li><a href="#">Category</a></li>
          <li><a href="#">Category</a></li>
          <li><a href="#">Category</a></li>
          <li><a href="#">Category</a></li>
          <li><a href="#">Category</a></li>
          <li><a href="#">Category</a></li>
          <li><a href="#">Category</a></li>
        </ul>
      </nav>

      <div className="songs-wrapper">
        <ul className="songs-list-explore">
          <li>Song</li>
          <li>Song</li>
          <li>Song</li>
          <li>Song</li>
          <li>Song</li>
          <li>Song</li>
          <li>Song</li>
          <li>Song</li>
          <li>Song</li>
          <li>Song</li>
          <li>Song</li>
          <li>Song</li>
          <li>Song</li>
          <li>Song</li>
        </ul>
      </div>

      <div>
        <span>Page 1</span>
        <button type="button">Previous</button>
        <button type="button">Next</button>
      </div>


    </div>
  )
}
