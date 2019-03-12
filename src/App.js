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
    <div>
        <div className="App-header ">  React Event Handling and API Call for table population</div>
          <div className="App">
            <button className="btn btn-sm btn-danger" onClick={this.callEvent} style={{margin: "20px auto"}}>  Save </button>
            <input type="text" name="txtFirstName"  onChange={this.firstNameChnages}/> 
            {this.state.firstName}
            <a href="#" onClick={this.hrefcallevent}> Company Link </a>
            <DisplayTable />
            </div>
      </div>
    );
  }
}

export default App;
