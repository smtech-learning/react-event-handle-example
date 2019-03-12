import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayTable from './Components/DisplayTable';
import Header2 from './Components/Header2';

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

  componentDidMount() {
    window.addEventListener('scroll', this.handlescroll);
    setInterval((()=> {console.log('from interval method')}),1000)
  }

  handlescroll = () => {
    let  header = document.getElementById("myHeader");
    let sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
      header.classList.remove("App-header2");
      header.classList.add("App-header3");
      header.classList.add("Sticky");
    } else {
      header.classList.remove("Sticky");
    }
  }
 

  hrefcallevent = (e) => {
    e.preventDefault();
    console.log("Preventing default" + this.state.firstName);
  }
  render() {
    return (
    <div>
        <div className="App-header ">  React Event Handling and API Call for table population</div>
          <Header2 />
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
