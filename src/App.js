import React, { Component } from 'react';
import classes from './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'jfndsb', name: "Dima", age: 25 },
      { id: 'wiojin', name: "Yura", age: 20 },
      { id: '1l6smk', name: "Kolya", age: 30 }
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id
    });

    // const person = Object.assign({}, this.state.persons[personIndex]); // 1 вариант
    const person = { // 2 вариант
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    this.setState({
      showPersons: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); // 1 вариант
    const persons = [...this.state.persons]; // 2 вариант

    persons.splice(personIndex, 1);

    this.setState({
      persons: persons
    });
  }
  
  render() {
    const styleBtn = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={ () => this.deletePersonHandler(index) }
              name={person.name} 
              age={person.age} 
              key={person.id}
              changed={ (event) => this.nameChangedHandler(event, person.id) }
            />
          })}
        </div>
      );

      styleBtn.backgroundColor = 'red';
    }

    // let classes = ['red', 'bold'].join(' '); // class="red bold"
    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
      <div className={classes.App}>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
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
