import React, { Component } from 'react';
import MealView from '../components/MealView';
import SymptomView from '../components/SymptomView';
import { connect } from 'react-redux';
import { getMeals } from '../actions/meals';
import { getSymptoms } from '../actions/symptoms';

class Overview extends Component {

    componentDidMount() {
		this.props.getMeals();
		this.props.getSymptoms();
    };
    
    render(){
        const { meals, symptoms} = this.props
        const isMealLoaded = Object.keys(meals.meals).length > 0
        const isSymptomLoaded = Object.keys(symptoms.symptoms).length > 0
        return (
            <div style={{ marginTop: 70}}>
                <div style={{ display: 'inline-block' }}>
                    <h1>Meals:</h1>
                    {isMealLoaded && <MealView mealsByDate={meals.meals}/>}
                </div>
                <div style={{ display: 'inline-block', verticalAlign: 'top', marginLeft: 50 }}>
                    <h1>Symptoms:</h1>
                    {isSymptomLoaded && <SymptomView symptomsByDate={symptoms.symptoms}/>}
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