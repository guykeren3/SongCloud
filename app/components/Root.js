/**
 * Created by Guy on 28/03/2017.
 */

// importing react to use JSX
import React from 'react';

// importing every component to the root

import Signup from './Signup';
import Signin from './Signin';
import Topbar from './Topbar';
import Explore from './Explore';
import Playlists from './Playlists';
import Player from './Player';

import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';


// creating an object to later move to the component as argument or in case of a smart component it will be saved in props in React.Component
// and will be accessed through this.props.


// convention among real life programmers, a component that will hold all other components and then run the one component that will only.

// everything that will be written under greeting will be an object with properties and values.

export default function Root() {
  return (
    <BrowserRouter>
      <div className="root-wrapper">
        <Topbar/>

        <main>
          <Switch>
            <Route exact path="/" render={() => (
              <Redirect to="/explore"/>
            )}/>
            <Route exact path="/explore" render={ () => (              <Redirect to="/explore/dubstep"/>
            )}/>
            <Route path="/explore/:genre" component={ Explore }/>
            <Route path="/playlists" component={ Playlists }/>
          </Switch>
          {/*<Signup/>*/}
          {/*<Signin/>*/}
        </main>
        <Player/>
      </div>
    </BrowserRouter>
  )
};
