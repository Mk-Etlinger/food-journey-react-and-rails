import React, { Component } from 'react';
import DateDropdown from './DateDropdown'
import { getRecentMeals } from '../../actions/meals/recentMeals';
import { getRecentSymptoms } from '../../actions/symptoms/recentSymptoms';
import { connect } from 'react-redux';

class DateDisplay extends Component {

    componentDidMount() {
        this.props.getRecentMeals();
        this.props.getRecentSymptoms();
    }

    render() {
        const { recentMeals } = this.props.meals
        const { recentSymptoms } = this.props.symptoms
        
        let mapDates = Object.keys(recentMeals).map((date, i) => {
            return recentSymptoms[date] ?
                <DateDropdown key={i} date={date} symptoms={recentSymptoms[date]} meals={recentMeals[date]}/>
            :
                <DateDropdown key={i} date={date} symptoms={[]} meals={recentMeals[date]}/>
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