import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Dima", age: 25 },
      { name: "Yura", age: 20 },
      { name: "Kolya", age: 30 }
    ]
  }

  switchNameHandler = (newName) => {
    // DON'T DO THIS: this.state.persons[0].name = 'Dmitry';

    this.setState({
      persons: [
        { name: newName, age: 25 },
        { name: "Yura", age: 20 },
        { name: "Kolya", age: 40 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Dima', age: 25 },
        { name: event.target.value, age: 20 },
        { name: "Kolya", age: 30 }
      ]
    })
  }
  
  render() {
    return (
      <div className="App">
        <button onClick={ () => this.switchNameHandler('Dmitry!') }>Switch name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Dima!!')}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
