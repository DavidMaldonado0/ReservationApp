import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { reserv } from './reserv.json';

import Reservform from './components/Reservform.js'

class App extends Component {
  constructor(){
    super();
    this.state = {
      reserv
    }
    this.handleAddReser = this.handleAddReser.bind(this);
  }
  removeReser(index) {
    this.setState({
      reserv: this.state.reserv.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddReser(reser) {
    this.setState({
      reserv: [...this.state.reserv, reser]
    })
  }
  render() {

    const reserv = this.state.reserv.map((reser, i) => {
      return(
        <div className="col-md-4">
        <div className="card mt-4">
          <div className="card-header">
          <h3>{reser.title}</h3>
          <span className= "badge badge-pill badge-danger ml-2">
          {reser.numberppl}</span>
          </div>
          <div className="card-body">
          <p>{reser.name}</p>
          <p>{reser.phone}</p>
          <p>{reser.task}</p>
          </div>
          <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeReser.bind(this, i)}>
                Completada
              </button>
            </div>
        </div>
        </div>
      )
    })
    return (
      <div className="App">   
      <nav className="navbar navbar-dark bg-dark">
      <a href="" className="text-white">RESERVACIONES
       <span className="badge baadge-pill badge-light ml-2">
        {this.state.reserv.length}
       </span></a>
      </nav>
      
      <div className="container">
          <div className="row mt-4">

            <div className="col-md-4 text-center">
                <img src={logo} className="App-logo" alt="logo" />
              <Reservform onAddReser={this.handleAddReser}></Reservform>
            </div>

            <div className="col-md-8">
              <div className="row">
                {reserv}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
