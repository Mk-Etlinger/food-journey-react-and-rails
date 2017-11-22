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
            <div>
                <div style={{ display: 'inline-block', marginTop: 40 }}>
                    <h1>Overview</h1>
                    {isMealLoaded && <MealView meals={meals} symptoms={symptoms}/>}
                </div>
                <div style={{ display: 'inline-block', verticalAlign: 'top'}}>
                    {/*<h1>Symptoms:</h1>*/}
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