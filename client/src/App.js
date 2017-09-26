import React, { Component } from 'react';
import './App.css';
import MealForm from './containers/MealForm';
import SymptomForm from './containers/SymptomForm';
import DateDisplay from './containers/DateDisplay';

class App extends Component {
  constructor() {
    super();

    this.state = {
      meals: [],
      symptoms: [],
    }


  }
  componentDidMount() {
    fetch('/meals')
      .then(response => response.json())
      .then(meals => this.setState({ meals }))
      .catch(error => console.log("The error is", error))
  }

  render() {

    console.log(this.state.meals)

    return (
      <div className="App">
        <div className="App-header">        
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
