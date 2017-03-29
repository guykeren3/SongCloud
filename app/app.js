import ReactDOM from 'react-dom';
import React from 'react';
import './assets/styles/main.scss';

// Components

import Root from './components/Root';
// importing the component we've created so we can use it in app.js

ReactDOM.render(<Root/>, document.querySelector('#root'));
