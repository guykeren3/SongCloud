import { createStore, combineReducers } from 'redux';

// import counterReducer from './reducers/counter';
// import playlistsReducer from './reducers/playlists';
import currentTrackReducer from './reducers/current-track';

function reducer(currentState = {}, action) { // if currentState will be undefined it will be object
  console.log('reducer', currentState, action);

  return Object.assign({}, {
    // counter: counterReducer(currentState.counter, action),
    // playlists: playlistsReducer(currentState.playlists, action),
    currentTrack: currentTrackReducer(currentState.currentTrack, action)
  });
}

const store = createStore(reducer);

export default store;
