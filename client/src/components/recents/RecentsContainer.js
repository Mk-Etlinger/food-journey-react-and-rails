import React, { Component } from 'react';
import DateDropdown from './DateDropdown';
import { getRecentMeals } from '../../actions/meals/recentMeals';
import { toggleUpdateMealModal } from '../../actions/meals/toggleMealModal';
import { toggleMealSuccessMessage } from '../../actions/meals/createMeal';
import { toggleSymptomSuccessMessage } from '../../actions/symptoms/createSymptom';
import { getRecentSymptoms } from '../../actions/symptoms/recentSymptoms';
import { connect } from 'react-redux';
import { customGroupByDate } from '../utilities/CustomGroupByDate';
import { mergeObjectsByDate } from '../utilities/MergeObjectsByDate';
import { GrommetStatus } from '../reusables/GrommetStatus';
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
            { recentSymptoms } = this.props.symptoms,
            { showMealSuccessMessage, 
                showSymptomSuccessMessage, 
                toggleMealSuccessMessage,
                toggleSymptomSuccessMessage } = this.props
        
        let symptomsByDate = customGroupByDate( recentSymptoms ),
            mealsByDate = customGroupByDate( recentMeals )

        const mergedMealsAndSymptoms = mergeObjectsByDate( mealsByDate, symptomsByDate )
        
        let mappedObjectsByDate = Object.keys( mergedMealsAndSymptoms ).slice(0, 3).map(( date, i ) => {
            return <DateDropdown key={ i } 
                showUpdateModal={ this.props.updateModalIsVisible }
                date={ moment(date, 'YYYY-MM-DD').format('MMM Do') }
                symptoms={ mergedMealsAndSymptoms[date].symptoms } 
                meals={ mergedMealsAndSymptoms[date].meals } />
        })
        
        return (
            <Box className='lightGreenBG'>
                <Box onClick={ () => toggleMealSuccessMessage( false ) } 
                    direction='row' 
                    justify='start'>
                    { showMealSuccessMessage &&
                        <GrommetStatus onClick={ () => toggleMealSuccessMessage( false ) }
                            status='ok' 
                            message='Success!' />
                    }
                </Box>
                <Box onClick={ () => toggleSymptomSuccessMessage( false ) } 
                    direction='row' 
                    justify='start'>
                    { showSymptomSuccessMessage &&
                        <GrommetStatus onClick={ () => toggleSymptomSuccessMessage( false ) }
                            status='ok' 
                            message='Success!' />
                    }
                </Box>
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
        showMealSuccessMessage: state.meals.showMealSuccessMessage,
        showSymptomSuccessMessage: state.symptoms.showSymptomSuccessMessage,
    })
}

export default connect(mapStateToProps, { 
    getRecentMeals,
    getRecentSymptoms,
    toggleMealSuccessMessage,
    toggleSymptomSuccessMessage,
    toggleUpdateMealModal
} )(RecentsContainer);