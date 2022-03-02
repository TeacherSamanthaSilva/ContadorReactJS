import logo from './logo.svg';
import './App.css';
import React from 'react';

export default class Contador extends React.Component {

  constructor() {

    super();
    this.state = {

      contador:0

    }
  }

  decrementar(){

    this.setState({

      if(this.setState.contador >0){

        contador: this.state.contador -1; 

      }

      
    })
  }
 
  render(){
    return (
      <h1>{this.state.contador}</h1>
      <div>
        <button onClick={}>+</button>
        <button>-</button>
      </div>
    );
  }
}