/**
 * Created by Guy on 26/03/2017.
 */

// importing react so we can work with react, the React variable can be written as anything, it just holds the library
import React from 'react';

/* exporting the Greeting so main.js will be able to import the component.
 by creating a class we are making our dumb Greeting component a smart one that has a state.
 that is the only reason to make it a class.
 we are adding an extends so we can use the React.Component methods such as state and props.
 Also, the React.Component holds the props we are transferring from the app.js and we can use it by writing this.props */

export default class Greeting extends React.Component {
  // in the constructor we are writing the super(); as a rule of thumb, and also the state which will include the items we wish to change later.
  constructor() {
    super();
    this.state = {
      counter: 0,
      visible: true // setting up a flag for later use and switch to false and the other way around.
    };
  }

  // methods

  count() {

    // we CANNOT change the state, we need to copy it and change the copy. it works here because a number is not copied by reference.

    let myCounter = this.state.counter;

    // setState will change the state on render

    this.setState({
      counter: myCounter + 1
    });
  }

  toggleVisible() {

    /* Should remember this method! writing down a flag with either false or true, then a variable, when we put "!" before it
     whatever enters the variable will be the opposite of the flag we have written */

    let isThisVisible = !this.state.visible;

    this.setState({
      visible: isThisVisible
    })
  }

  // A render must be added at the end of the methods we have written to actually make them come to "life"

  render() {

    // the syntax of the row beneath - if the expression is true, do the following: ( in our case, put the span in the counterElmTitle, if not do something else ( in our case, put "null" in the counterElmTitle ) which means the render will disregard the null and wont render it.
    // ?   =   (if)   :    = (else). we are putting a dynamic javascript element in the JSX that will either be rendered or not.

    // this means   if |expression = true| put the span in counterElmTitle      else (false) put null in counterElmTitle
    let counterElmTitle = this.state.visible ? <span> Count: {this.state.counter} </span> : null;

    // returning the JSX
    return (
      <div>

        {/*this = Greeting here, because we extended it with React.Component the props is now usable by using this.props because it is in the component */
        }

        <span> Hi, my name is {this.props.name}
          and my age is {this.props.age}</span>

        {/* The reason for the arrow function is that the "This" in an arrow function is determined when we call it, ergo the this when calling the function is the Greeting, if we would not have done it, the This would have been null because React will decide what the This is for us */
        }

        <button onClick={ () => {
          this.count();
        }}>Click Me
        </button>

        {counterElmTitle}

        <button onClick={ () => {
          this.toggleVisible();
        }}>Now you see me
        </button>

      </div>
    )
  }
}
