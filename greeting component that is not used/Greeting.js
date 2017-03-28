/**
 * Created by Guy on 26/03/2017.
 */

// importing react so we can work with react, the React variable can be written as anything, it just holds the library
import React from 'react';

/**
 * Greeting is not used in the new app
 */

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
      visible: true, // setting up a flag for later use and switch to false and the other way around.
      people: [
        {
          name: 'John Doe',
          kills: 0
        },
        {
          name: 'Peter Pan',
          kills: 0
        }
      ]
    };
  }

  // methods

  increment() {

    // we CANNOT change the state, we need to copy it and change the copy. it works here because a number is not copied by reference.

    let myCounter = this.state.counter;

    // map creates a new array which is a great solution to copy the array! another could be [...this.state.people]

    let peopleCopyWithKillsChange = this.state.people.map((peopleObject) => {

      /* objects and arrays values are copied by reference, ergo we are are making a new object, empty one and
      moving the values into it. by doing this we are making the values stand by their own and NOT CHANGING THE STATE ITSELF,
      but making a copy of them. */

      let newObjectPeople = Object.assign({}, peopleObject, {kills: myCounter + 1});

      console.info(newObjectPeople);

      return newObjectPeople;

      // return <li key={ value.name }> { value.name + ' ' + value.kills} </li>
    });

    // setState will change the state on render

    this.setState({
      counter: myCounter + 1,
      people: peopleCopyWithKillsChange
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

  createPeople() {

    /* running over the people and bringing back each object,
     then returning an li for each object with a key that is the name and inside the li the name itself */
    const listItems = this.state.people.map((value) => {
      // console.info(value);

      // return into the listItems variable
      return <li key={ value.name }> { value.name + ' ' + value.kills} </li>
    });

    // the entire function will return a ul which we will put the li we created inside
    return (
      <ul>
        {listItems}
      </ul>
    );
  }

  // A render must be added at the end of the methods we have written to actually make them come to "life"

  render() {

    // ?   =   (if)   :    = (else). we are putting a dynamic javascript element in the JSX that will either be rendered or not.
    // this means   if |expression = true| put the span in counterElmTitle      else (false) put null in counterElmTitle
    let counterElmTitle = this.state.visible ? <span> Count: {this.state.counter} </span> : null;

    /* another way of doing this:
     this means                      if true   ,  put this span ,  else if false it wont even go to the right
     let counterElmTitle = this.state.visible && <span> Count: {this.state.counter} </span>; */

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
          this.increment();
        }}>Click Me
        </button>

        {counterElmTitle}

        <button onClick={ () => {
          this.toggleVisible();
        }}>Now you see me
        </button>

        {/*this will put a ul with dynamic li inside of it if we change people*/}
        { this.createPeople() }

      </div>
    )
  }
}
