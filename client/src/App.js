import React, { Component } from 'react';
import './App.css';
// import post from './ApiCalls';
import Routes from './routes'

class App extends Component {
  // constructor() {
  //   super();

  // }
  
  render() {    

    return (
      <div className="App">
        <div className="App-header">        
          <h2>Food Journey</h2>
          <p>A simple food journaling app to get your health on track</p>
        </div>
        
        <Routes />
      </div>
    );
  }
}

export default App;
