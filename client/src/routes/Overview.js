import React, { Component } from 'react';
import MealView from '../components/MealView';
import SymptomView from '../components/SymptomView';
import { connect } from 'react-redux';
import { getMeals } from '../actions/meals';
import { getSymptoms } from '../actions/symptoms';

class Overview extends Component {
    constructor() {
        super();

        this.state = {
            meals: [],
            symptoms: [],
        }
    }

    componentDidMount() {
        // Api.get('meals')		
		this.props.getMeals();
		this.props.getSymptoms();
    };
    
    render(){
        return (
            <div>
                <div style={{ display: 'inline-block' }}>
                    <h1>Meals:</h1>
                    {Object.keys(this.props.meals).length > 0 ? <MealView mealsByDate={this.props.meals}/> : ''}
                </div>
                <div style={{ display: 'inline-block', verticalAlign: 'top', marginLeft: 100 }}>
                    <h1>Symptoms:</h1>
                    {Object.keys(this.props.meals).length > 0 ? <SymptomView symptomsByDate={this.props.symptoms}/> : ''}
                </div>
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return ({
        meals: state.meals,
        symptoms: state.symptoms
    })
}

export default connect(mapStateToProps, { getMeals, getSymptoms })(Overview)