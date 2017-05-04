import React from 'react';
import uuid from 'uuid';


import Topbar from '../topbar/Topbar';
import Explore from '../explore/Explore';
import Playlists from '../playlists/Playlists';
import Player from '../player/Player';

import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

export default class Root extends React.Component {
  constructor() {
    super();
    this.createPlaylist = this.createPlaylist.bind(this); //hack so we wont use this every time with this function
    this.deletePlaylist = this.deletePlaylist.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.addSongToPlaylist = this.addSongToPlaylist.bind(this);
    this.removeSongFromPlaylist = this.removeSongFromPlaylist.bind(this);
    this.state = {
      currentTrack: {},
      playLists: []
    };
  }

  deletePlaylist(playlistId) {
    console.info(this.state, 'this state in delete playlist function');
    const newPlaylist = [...this.state.playLists];
    return newPlaylist.map((playlist, index) => {
      if (playlist.id === playlistId) {
        console.info('deleted playlist #', index);
        newPlaylist.splice(index, 1);
      }
      this.setState({
        playLists: newPlaylist
      })
    })
  }

  updatePlaylistName(titleName, id) {
    const newPlaylists = [...this.state.playLists];
    newPlaylists.find((playlist) => {
      if (playlist.id === id) {
        playlist.name = titleName;
      }
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
    playlists.map(playlistInPlaylistsData => {
      if (playlistInPlaylistsData.id === playlist.id) {
        playlist.songs.push(song);
      }
    });
    this.setState({playLists: playlists})
  }

  removeSongFromPlaylist(song, playlist) {
    const playlists = this.state.playLists;
    playlists.map(playlistInPlaylistsData => {
      if (playlistInPlaylistsData.id === playlist.id) {
        playlist.songs.pop();
      }
    });
    this.setState({playLists: playlists})
  }

  render() {

    return (
      <div className="root-wrapper">
        <Topbar history={this.props.history}/>

        <main>
          <Switch>
            <Route exact path="/" component={() => {
              return <Redirect to="/explore"/>;
            }}/>

            <Route path="/explore/:genre" render={ (props) => {
              return <Explore createPlaylist={ this.createPlaylist }
                              playlists={ this.state.playLists }
                              addSongToPlaylist={ this.addSongToPlaylist }
                              removeSongFromPlaylist={ this.removeSongFromPlaylist }
                              {...props}/> // to transfer the history from "Route"
            } }/>

            <Route
              exact path="/explore" component={() => {
              return <Redirect to="/explore/dubstep"/>;
            }
            }/>

            <Route path="/playlists" render={ (props) => {
              return <Playlists playlists={ this.state.playLists }
                                createPlaylist={ this.createPlaylist }
                                deletePlaylist={ this.deletePlaylist }
                                updatePlaylistName={ this.updatePlaylistName }
                                addSongToPlaylist={ this.addSongToPlaylist }
                                removeSongFromPlaylist={ this.removeSongFromPlaylist }
                                {...props}/> // to transfer the history from "Route"
            } }/>


          </Switch>
        </main>
        <Player />
      </div>
    )
  }
}


