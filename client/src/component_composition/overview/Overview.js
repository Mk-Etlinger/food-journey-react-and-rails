import React, { Component } from 'react';
import MealView from './MealView';
import SymptomView from './SymptomView';
import { connect } from 'react-redux';
import { getMeals } from '../../actions/meals/meals';
import { getSymptoms } from '../../actions/symptoms/symptoms';

class Overview extends Component {

    componentDidMount() {
		this.props.getMeals();
		this.props.getSymptoms();
    };
    
    render(){
        const { meals } = this.props.meals, 
            { symptoms } = this.props.symptoms
        const isMealLoaded = meals.length > 0
        const isSymptomLoaded = symptoms.length > 0
        return (
            <div style={{ marginTop: 70}}>
                <div style={{ display: 'inline-block' }}>
                    <h1>Meals:</h1>
                    {isMealLoaded && <MealView meals={meals}/>}
                </div>
                <div style={{ display: 'inline-block', verticalAlign: 'top', marginLeft: 50 }}>
                    <h1>Symptoms:</h1>
                    {isSymptomLoaded && <SymptomView symptomsIndex={symptoms}/>}
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