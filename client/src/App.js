import React, { Component } from 'react';
import './App.css';
import Routes from './navigation'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
