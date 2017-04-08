
import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";


import Signup from './Signup';
import Signin from './Signin';
import Root from './root';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signin" component={ Signin }/>
        <Route exact path="/signup" component={ Signup }/>
        <Route path="/" component={ Root }/>
      </Switch>
    </BrowserRouter>
  );
};
