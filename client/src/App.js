import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MealForm from './containers/MealForm';
import SymptomForm from './containers/SymptomForm';
import DateDisplay from './containers/DateDisplay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Food Journey</h2>
          <p>A simple food journaling app to get your health on track</p>
        </div>
        <MealForm />
        <SymptomForm />
        <DateDisplay />        
      </div>
    );
  }
}

export default App;
