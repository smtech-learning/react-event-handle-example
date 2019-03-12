import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayTable from './Components/DisplayTable';

class App extends Component {

  state = {
    todos: ['chek weather', 'get cofee'],
    firstName:''
  }

   callEvent = () => {
    console.log('Called the event');
   }
  
  firstNameChnages = (e) => {
    this.setState({firstName:e.target.value})
  }

  hrefcallevent = (e) => {
    e.preventDefault();
    console.log("Preventing default" + this.state.firstName);
  }
  render() {
    return (
      <div className="App">
        <button className="btn btn-sm btn-danger" onClick={this.callEvent}>  Save </button>
        <input type="text" name="txtFirstName"  onChange={this.firstNameChnages}/> 
        {this.state.firstName}
        <a href="#" onClick={this.hrefcallevent}> Company Link </a>
        <DisplayTable />
      </div>
    );
  }
}

export default App;
