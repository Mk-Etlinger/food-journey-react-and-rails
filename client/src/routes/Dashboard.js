import React, { Component } from 'react';
import MealForm from '../containers/MealForm';
import SymptomForm from '../containers/SymptomForm';
import DateDisplay from '../containers/DateDisplay';
import { connect } from 'react-redux';
import { getRecentMeals } from '../actions/recentMeals';
import { getRecentSymptoms } from '../actions/recentSymptoms';

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            recentMeals: [],
            recentSymptoms: [],
        }
    }

    componentDidMount() {
        // Api.get('meals')
        this.props.getRecentMeals();
        this.props.getRecentSymptoms();
    }

    render() {
        console.log(this.props)
        return (            
            <div>
                <MealForm />
                <SymptomForm />
                <DateDisplay meals={this.props.recentMeals} symptoms={this.props.recentSymptoms} />        
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        recentSymptoms: state.recentSymptoms,
        recentMeals: state.recentMeals
    })
}

export default connect(mapStateToProps, { getRecentSymptoms, getRecentMeals })(Dashboard);