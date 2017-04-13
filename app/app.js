import 'normalize.css/normalize.css';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'font-awesome/css/font-awesome.css';
import './assets/styles/main.scss';
import ReactDOM from 'react-dom';
import React from 'react';

import { Provider } from 'react-redux';

// Components

import Routes from './components/routes/Routes';
// importing the component we've created so we can use it in app.js

import store from './store';

function renderApp() {
  ReactDOM.render(
    <Provider store={ store }>
      <Routes />
    </Provider>,
    document.querySelector('#root')
  );
}

renderApp();

store.subscribe( () => {
  renderApp();
});
