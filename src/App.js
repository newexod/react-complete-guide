import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';
import person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Dima", age: 25 },
      { name: "Yura", age: 20 },
      { name: "Kolya", age: 30 }
    ],
    showPersons: false
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    this.setState({
      showPersons: !doesShow
    })
  }
  
  render() {
    const styleBtn = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person 
              name={person.name} 
              age={person.age} 
            />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <button 
          style={styleBtn}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
