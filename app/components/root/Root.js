// importing react to use JSX
import React from 'react';
import uuid from 'uuid';
// importing every component to the root

import Topbar from '../topbar/Topbar';
import Explore from '../explore/Explore';
import Playlists from '../playlists/Playlists';
import Player from '../player/Player';

import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';


// creating an object to later move to the component as argument or in case of a smart component it will be saved in props in React.Component
// and will be accessed through this.props.


// convention among real life programmers, a component that will hold all other components and then run the one component that will only.

// everything that will be written under greeting will be an object with properties and values.

export default class Root extends React.Component {
  constructor() {
    super();
    this.createPlaylist = this.createPlaylist.bind(this); //hack so we wont use this every time with this function
    this.deletePlaylist = this.deletePlaylist.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.addSongToPlaylist = this.addSongToPlaylist.bind(this);
    this.state = {
      currentTrack: {},
      playLists: []
    };
  }

  deletePlaylist(playlistId) {
    const newPlaylist = [...this.state.playLists];
    newPlaylist.pop();
    this.setState({
      playLists: newPlaylist
    });
  }

  updatePlaylistName(titleName, id) {
    //create copy of playlists
    const newPlaylists = [...this.state.playLists];
    //find the playlist with the same id in the copy
    newPlaylists.find((playlist) => {
      if (playlist.id === id) {
        //name of the playlist in the copy = titleName
        playlist.name = titleName;
      }
      //setState playLists: playlists
      this.setState({
        playLists: newPlaylists
      })
    })
  }

  createPlaylist(song, redirectTo) {
    if (typeof song === "undefined" && typeof redirectTo === "undefined") {
      const newPlaylist = [...this.state.playLists];
      newPlaylist.push({
        id: uuid(),
        name: 'Untitled',
        songs: []
      });
      this.setState({
        playLists: newPlaylist
      });
    }

    else {
      const newPlaylist = [...this.state.playLists];
      newPlaylist.push({
        id: uuid(),
        name: 'Untitled',
        songs: [song]
      });
      if (!redirectTo) {
        this.setState({
          playLists: newPlaylist
        });
      }
      if (redirectTo) {
        this.setState({
          playLists: newPlaylist
        }, () => {

          this.props.history.push(redirectTo); // handles url

        })
      }
    }
  }

  addSongToPlaylist(song, playlist) {
    const playlists = this.state.playLists;
    playlists.map(playlistInPlaylistsData => {               // bad practise
      if(playlistInPlaylistsData.id === playlist.id) {
        playlist.songs.push(song);
      }
    });
    this.setState({playLists: playlists})
  }

  render() {

    return (
      <div className="root-wrapper">
        <Topbar/>

        <main>
          <Switch>
            <Route exact path="/" component={() => {
              return <Redirect to="/explore"/>;
            }}/>

            <Route path="/explore/:genre" render={ (props) => {
              return <Explore createPlaylist={ this.createPlaylist }
                              playlists={ this.state.playLists }
                              addSongToPlaylist={ this.addSongToPlaylist }
                              {...props}/> // to transfer the history from "Route"
            } }/>

            <Route
              exact
              path="/explore"
              component={() => {
                return <Redirect to="/explore/dubstep"/>;
              }
              }/>

            <Route path="/playlists" render={ (props) => {
              return <Playlists playlists={ this.state.playLists }
                                createPlaylist={ this.createPlaylist }
                                deletePlaylist={ this.deletePlaylist }
                                updatePlaylistName={ this.updatePlaylistName }
                                addSongToPlaylist={ this.addSongToPlaylist }
                                {...props}/> // to transfer the history from "Route"
            } }/>


          </Switch>

        </main>

        <Player />

      </div>
    )
  }
}


