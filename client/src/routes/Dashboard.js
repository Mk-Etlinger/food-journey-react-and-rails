import React, { Component } from 'react';
import MealForm from '../containers/MealForm';
import SymptomForm from '../containers/SymptomForm';
import DateDisplay from '../containers/DateDisplay';
import Api from '../Api';

export default class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            meals: [],
            symptoms: [],          
        }
    }

    componentDidMount() {
        // Api.get('meals')
		let token = "Bearer " + localStorage.getItem("jwt")
		
		fetch('/meals', {
			headers: { "Authorization": token} 
		})
			.then(response => response.json())
			.then(meals => this.setState({ meals }))
			.catch(error => console.log("The error is", error))
  }

    render() {
        return (            
            <div>
                <MealForm />
                <SymptomForm />
                <DateDisplay meals={this.state.meals} sypmtoms={this.state.symptoms} />        
            </div>
        )
    }
}