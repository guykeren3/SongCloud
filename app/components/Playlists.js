/**
 * Created by Guy on 28/03/2017.
 */

import React from 'react';
import {Link, NavLink} from "react-router-dom";

export default function Playlists() {
  return (
    <div className="playlist-page-container">
      <aside className="playlist-side-bar">
        <div className="add-playlist-container">
          <button type="button">Add new playlist</button>
        </div>
        <div className="my-songs-container">

          <ul className="my-songs-list-playlist">
            <li><NavLink to='' activeClassName='selected-list'>My songs </NavLink></li>
            <li><Link to=''>Cool trance music</Link></li>
            <li><Link to=''>House party 2017</Link></li>
            <li><Link to=''>Old</Link></li>
            <li><Link to=''>Raggae</Link></li>
          </ul>
        </div>
      </aside>

      <main className="playlist-wrapper">

        <div className="playlist-container">
          <div className="playlist-titles">
            My songs
            <button type="button">delete</button>
          </div>
          <ul className="songs-list-explore-playlist">
            <li className="song-in-list-playlist"> song </li>
            <li className="song-in-list-playlist"> song </li>
            <li className="song-in-list-playlist"> song </li>
            <li className="song-in-list-playlist"> song </li>
            <li className="song-in-list-playlist"> song </li>
            <li className="song-in-list-playlist"> song </li>
            <li className="song-in-list-playlist"> song </li>
            <li className="song-in-list-playlist"> song </li>
          </ul>

        </div>

        <div className="playlist-container">
          <div className="playlist-titles">
            Cool trance music
            <button type="button">delete</button>
          </div>
          <ul className="songs-list-explore-playlist">
            <li className="song-in-list-playlist"> song </li>
            <li className="song-in-list-playlist"> song </li>
            <li className="song-in-list-playlist"> song </li>
            <li className="song-in-list-playlist"> song </li>
            <li className="song-in-list-playlist"> song </li>
            <li className="song-in-list-playlist"> song </li>
            <li className="song-in-list-playlist"> song </li>
            <li className="song-in-list-playlist"> song </li>
          </ul>
        </div>

        <div className="playlist-container">
          <div className="playlist-titles">
            House party 2017
            <button type="button">delete</button>
          </div>
          <ul className="songs-list-explore-playlist">
            <li className="song-in-list-playlist"> song </li>
            <li className="song-in-list-playlist"> song </li>
            <li className="song-in-list-playlist"> song </li>
            <li className="song-in-list-playlist"> song </li>
            <li className="song-in-list-playlist"> song </li>
            <li className="song-in-list-playlist"> song </li>
            <li className="song-in-list-playlist"> song </li>
            <li className="song-in-list-playlist"> song </li>
          </ul>
        </div>

        <div className="playlist-container">
          <div className="playlist-titles">
            Old
            <button type="button">delete</button>
          </div>
          <ul className="songs-list-explore-playlist">
            <li className="song-in-list-playlist"> song </li>
            <li className="song-in-list-playlist"> song </li>
            <li className="song-in-list-playlist"> song </li>
            <li className="song-in-list-playlist"> song </li>
            <li className="song-in-list-playlist"> song </li>
            <li className="song-in-list-playlist"> song </li>
            <li className="song-in-list-playlist"> song </li>
            <li className="song-in-list-playlist"> song </li>
          </ul>
        </div>

        <div className="playlist-container">
          <div className="playlist-titles">
            Raggae
            <button type="button">delete</button>
          </div>
          <ul className="songs-list-explore-playlist">
            <li className="song-in-list-playlist"> song </li>
            <li className="song-in-list-playlist"> song </li>
            <li className="song-in-list-playlist"> song </li>
            <li className="song-in-list-playlist"> song </li>
            <li className="song-in-list-playlist"> song </li>
            <li className="song-in-list-playlist"> song </li>
            <li className="song-in-list-playlist"> song </li>
            <li className="song-in-list-playlist"> song </li>
          </ul>
        </div>
      </main>

    </div>
  )
}
