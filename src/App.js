import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Person name="Dima" age="25" />
        <Person name="Yura" age="20" />
        <Person name="Kolya" age="30" />
      </div>
    );
  }
}

export default App;
