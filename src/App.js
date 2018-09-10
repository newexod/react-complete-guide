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

  switchNameHandler = () => {
    // DON'T DO THIS: this.state.persons[0].name = 'Dmitry';
    
    this.setState({
      persons: [
        { name: "Dmitry", age: 25 },
        { name: "Yura", age: 20 },
        { name: "Kolya", age: 40 }
      ]
    })
  }
  
  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
