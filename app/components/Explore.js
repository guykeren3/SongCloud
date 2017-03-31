/**
 * Created by Guy on 28/03/2017.
 */

import React from 'react';


export default class Explore extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      loadingState: 'loading',
    };
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://create-bootcamp-songcloud-server.now.sh/tracks?genre=trance');
    xhr.addEventListener('load', () => {
      this.setState({songs: JSON.parse(xhr.responseText), loadingState: 'loaded'});
    });

    xhr.addEventListener('error', () => {
      this.setState({loadingState: 'error'});
    });
    xhr.send();
  }

  createSongs() {
    const songsList = this.state.songs.map((song) => {
      return <li key={song.title}> <img src={song.artwork_url} alt="MDN"></img> {song.title} </li>
    });

    return (
      <ul className="songs-list-explore">
        {songsList}
      </ul>
    );
  }


  render() {
    switch (this.state.loadingState) {
      case 'loading':
        return <div>Loading...</div>;
      case 'error':
        return <div>Error!</div>;
      case 'loaded':
    return (
      <div className="explore-container">
        <nav>
          <ul className="category-nav">
            <li><a href="#">Generes:</a></li>
            <li><a href="#">all-music</a></li>
            <li><a href="#">hip-hop rap</a></li>
            <li><a href="#">house</a></li>
            <li><a href="#">rock</a></li>
            <li><a href="#">pop</a></li>
            <li><a href="#">reggaeton</a></li>
            <li><a href="#">dubstep</a></li>
          </ul>
        </nav>

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
}};
