import React, { Component } from 'react';
import DateDropdown from './DateDropdown'
import { getRecentMeals } from '../../actions/meals/recentMeals';
import { getRecentSymptoms } from '../../actions/symptoms/recentSymptoms';
import { connect } from 'react-redux';
import moment from 'moment'

class DateDisplay extends Component {

    componentDidMount() {
        this.props.getRecentMeals();
        this.props.getRecentSymptoms();
    }

    render() {
        const { recentMeals } = this.props.meals, { recentSymptoms } = this.props.symptoms
        let symptomsByDate = {}, mealsByDate = {};
        recentSymptoms.forEach(symptom => {
            let date = moment(symptom.created_at).format('MMM Do')
            let symptomsArray = symptomsByDate[date] || []
            
            symptomsByDate[date] = [...symptomsArray, symptom]
        });
        recentMeals.forEach(meal => {
            let date = moment(meal.created_at).format('MMM Do')
            let mealsArray = mealsByDate[date] || []
            
            mealsByDate[date] = [...mealsArray, meal]
        });

        let mapDates = Object.keys(mealsByDate).map((date, i) => {
            return symptomsByDate[date] ?
                <DateDropdown key={i} date={date} symptoms={symptomsByDate[date]} meals={mealsByDate[date]}/>
            :
                <DateDropdown key={i} date={date} meals={mealsByDate[date]}/>
        })

        return (
            <div>
                {mapDates}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        meals: state.meals,
        symptoms: state.symptoms
    })
}

export default connect(mapStateToProps, { getRecentMeals, getRecentSymptoms } )(DateDisplay);