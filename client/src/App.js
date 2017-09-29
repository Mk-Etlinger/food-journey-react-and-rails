import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css';
// import Login from './containers/Login';
// import post from './ApiCalls';
import Routes from './routes'

class App extends Component {
  constructor() {
    super();

    this.state = {
      meals: [],
      symptoms: [],
    }

  }

	componentDidMount() {
		let token = "Bearer " + localStorage.getItem("jwt")
		
		fetch('/meals', {
			headers: { "Authorization": token} 
		})
			.then(response => response.json())
			.then(response => console.log(response))
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
<<<<<<< HEAD
        
        <Routes />
        {/*<Login />*/}      
=======
        <a href={`${API_URL}/login`}>Login with FB</a>
        <Login />
        {/*<MealForm />
        <SymptomForm />
        <DateDisplay />        */}
>>>>>>> develop/jwt-auth
      </div>
    );
  }
}

export default App;
