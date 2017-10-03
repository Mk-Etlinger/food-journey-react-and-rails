import React, { Component } from 'react';
import MealView from '../components/MealView';

export default class Overview extends Component {
    constructor() {
        super();

        this.state = {
            meals: undefined,
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
    
    render(){  
        console.log(this.state.meals)      
        return (
            <div>
                Meals:
                {this.state.meals !== undefined ? <MealView mealsByDate={this.state.meals}/> : ''}
            </div>
        )
    }
}