import React, { Component } from 'react';
import classes from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
          persons={this.state.persons}
          changed={this.nameChangedHandler} 
          clicked={this.deletePersonHandler} 
        />;
    }

    return (
      <div className={classes.App}>
        <Cockpit 
          appTitle={this.props.title}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
