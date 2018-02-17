import React, { Component } from 'react';
import DateDropdown from './DateDropdown';
import { getRecentMeals } from '../../actions/meals/recentMeals';
import { toggleUpdateMealModal } from '../../actions/meals/toggleMealModal';
import { getRecentSymptoms } from '../../actions/symptoms/recentSymptoms';
import { connect } from 'react-redux';
import * as customGroupByDate from '../utilities/CustomGroupByDate';
import { mergeObjectsByDate } from '../utilities/MergeObjectsByDate';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import moment from 'moment';


class RecentsContainer extends Component {

    componentDidMount() {
        this.props.getRecentMeals();
        this.props.getRecentSymptoms();
    }

    handleOpenMealModal = ( isVisible, mealId ) => {
        this.props.toggleUpdateMealModal( isVisible, mealId )
    }

    render() {
        const { recentMeals } = this.props.meals, 
            { recentSymptoms } = this.props.symptoms
        
        let symptomsByDate = recentSymptoms.customGroupByDate(),
            mealsByDate = recentMeals.customGroupByDate()

        const mergedMealsAndSymptoms = mergeObjectsByDate(mealsByDate, symptomsByDate)
        
        let mappedObjectsByDate = Object.keys(mergedMealsAndSymptoms).slice(0, 3).map( (date, i) => {
            return <DateDropdown key={ i } 
                showUpdateModal={ this.props.updateModalIsVisible }
                date={ moment(date, 'YYYY-MM-DD').format('MMM Do') }
                symptoms={ mergedMealsAndSymptoms[date].symptoms } 
                meals={ mergedMealsAndSymptoms[date].meals } />
        })
        
        return (
            <Box className='lightGreenBG'>
            { mappedObjectsByDate.length ?
                <Heading margin='small' tag='h3'>
                    Recent Entries
                </Heading>
            :
                <Heading margin='small' tag='h3'>
                    No Recent Entries
                </Heading>
            }
            <Box className='lightGreenBG' 
                direction='row'
                flex
                wrap
                size={{ height: { max: 'xlarge' }, width: { min: 'medium', max: 'xlarge' } }}> 
                { mappedObjectsByDate }
            </Box>
            </Box>
        )
    }
}

RecentsContainer.defaultProps = {
    recentMeals: {},
    recentSymptoms: {},
}

const mapStateToProps = (state) => {
    return ({
        meals: state.meals,
        symptoms: state.symptoms,
    })
}

export default connect(mapStateToProps, { 
    getRecentMeals,
    getRecentSymptoms,
    toggleUpdateMealModal
} )(RecentsContainer);