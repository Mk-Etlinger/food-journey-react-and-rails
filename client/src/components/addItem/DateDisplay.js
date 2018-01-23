import React, { Component } from 'react';
import DateDropdown from './DateDropdown';
import { getRecentMeals } from '../../actions/meals/recentMeals';
import { getRecentSymptoms } from '../../actions/symptoms/recentSymptoms';
import { connect } from 'react-redux';
import * as customGroupByDate from '../reusables/CustomGroupByDate';
import { mergeObjectsByDate } from '../reusables/MergeObjectsByDate';
import Tiles from 'grommet/components/Tiles';
import moment from 'moment';


class DateDisplay extends Component {

    componentDidMount() {
        this.props.getRecentMeals();
        this.props.getRecentSymptoms();
    }

    render() {
        const { recentMeals } = this.props.meals, 
            { recentSymptoms } = this.props.symptoms
        
        let symptomsByDate = recentSymptoms.customGroupByDate(),
            mealsByDate = recentMeals.customGroupByDate()

        const mergedMealsAndSymptoms = mergeObjectsByDate(mealsByDate, symptomsByDate)
        
        let mapDates = Object.keys(mergedMealsAndSymptoms).slice(0, 3).map( (date, i) => {
            return <DateDropdown key={i} 
                date={ moment(date, 'YYYY-MM-DD').format('MMM Do') }
                symptoms={ mergedMealsAndSymptoms[date].symptoms } 
                meals={ mergedMealsAndSymptoms[date].meals } />
        })
        
        return (
            <Tiles fill >
                { mapDates }
            </Tiles>
        )
    }
}

DateDisplay.defaultProps = {
    recentMeals: {},
    recentSymptoms: {},
}

const mapStateToProps = (state) => {
    return ({
        meals: state.meals,
        symptoms: state.symptoms
    })
}

export default connect(mapStateToProps, { 
    getRecentMeals, 
    getRecentSymptoms 
} )(DateDisplay);