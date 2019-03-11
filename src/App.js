import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    todos : ['chek weather', 'get cofee']
  }

   callEvent = () => {
    console.log('Called the event');
  }
  render() {
    return (
      <div className="App">
          <button onClick={this.callEvent}>  Save </button>
      </div>
    );
  }
}

export default App;
