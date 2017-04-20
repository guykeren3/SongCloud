// import 'normalize.css/normalize.css';
// import 'roboto-fontface/css/roboto/roboto-fontface.css';
// import 'font-awesome/css/font-awesome.css';
// import './assets/styles/main.scss';

import ReactDOM from 'react-dom';
import React from 'react';

import {Provider} from 'react-redux';

// Components

// import Routes from './components/routes/Routes';
// // importing the component we've created so we can use it in app.js
//
// import store from './store';
//
// ReactDOM.render(
//   <Provider store={ store }>
//     <Routes />
//   </Provider>,
//   document.querySelector('#root')
// );


class Root extends React.Component {
  constructor() {
    super();

    this.state = {
      theName: 'Gil Tayar'
    }
  }

  handleClick() {
    this.setState({
      theName: 'Guy Keren'
    })
  }

  render() {
    return (
      <Initials fullName={this.state.theName}
                handleClick={() => this.handleClick()}/>
    )
  }
}

class Initials extends React.Component {
  render() {
    const nameParts = this.props.fullName.split(' ');

    return <div onClick={this.props.handleClick}><Name name={nameParts[0]}/> <Name name={nameParts[1]}/></div>
  }
}

class Name extends React.Component {
  render() {
    return <span>{this.props.name}</span>
  }
}


ReactDOM.render(<Root/>, document.querySelector('#root'));
// renderApp();

// store.subscribe( () => {
//   renderApp();
// });


// sending props down the components
// creating state in constructor and changing it using this.setState()
// handling events using functions.

