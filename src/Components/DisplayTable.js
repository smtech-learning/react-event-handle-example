import React, { Component } from 'react'

export default class DisplayTable extends Component {

    state = {
        employeeDetails : []
    }
     
    constructor(props) {
        super(props)
    }
    url1 = 'https://jsonplaceholder.typicode.com/todos';
    url2 = 'http://jsonplaceholder.typicode.com/users/1';

    componentWillMount() {
            fetch(this.url1)
            .then(res => res.json())
            .then((data) => console.log(data)|| this.setState({employeeDetails:data}) )
}
  render() {
    return (
        <div class="container">
        <h2>Employee Details</h2>
        <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p>            
        <table class="table">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
            </tr>
          </thead>
                {this.state.employeeDetails.map((data, index) => {
                    return (
                        <tbody>
                            <tr>
                                <td> {data.title}</td>
                                <td> {data.userId}</td>
                                <td> {data.completed}</td>
                            </tr>
                        </tbody>
                    )
                })} 
        </table>
      </div>
    )
  }
}




