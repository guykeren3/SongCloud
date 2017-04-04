import 'normalize.css/normalize.css';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'font-awesome/css/font-awesome.css';
import './assets/styles/main.scss';
import ReactDOM from 'react-dom';
import React from 'react';

// Components

import Routes from './components/Routes';
// importing the component we've created so we can use it in app.js

ReactDOM.render(<Routes/>, document.querySelector('#root'));
