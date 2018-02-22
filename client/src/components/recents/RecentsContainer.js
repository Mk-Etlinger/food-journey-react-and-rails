import React, { Component } from 'react';
import DateDropdown from './DateDropdown';
import DisplayMessageHelper from './DisplayMessageHelper';
import { getRecentMeals, isFetchingMeals } from '../../actions/meals/recentMeals';
import { getRecentSymptoms, isFetchingSymptoms } from '../../actions/symptoms/recentSymptoms';
import { toggleUpdateMealModal } from '../../actions/meals/toggleMealModal';
import { toggleMealSuccessMessage } from '../../actions/meals/createMeal';
import { toggleSymptomSuccessMessage } from '../../actions/symptoms/createSymptom';
import { connect } from 'react-redux';
import { customGroupByDate } from '../utilities/CustomGroupByDate';
import { mergeObjectsByDate } from '../utilities/MergeObjectsByDate';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import moment from 'moment';


class RecentsContainer extends Component {

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        this.props.getRecentMeals();
        this.props.getRecentSymptoms();
    }

    handleOpenMealModal = ( isVisible, mealId ) => {
        this.props.toggleUpdateMealModal( isVisible, mealId );
    }

    render() {
        const { showMealSuccessMessage, 
                showSymptomSuccessMessage, 
                toggleMealSuccessMessage,
                toggleSymptomSuccessMessage,
                isFetchingMeals,
                isFetchingSymptoms } = this.props
    
        let symptomsByDate = customGroupByDate( this.props.recentSymptoms ),
            mealsByDate = customGroupByDate( this.props.recentMeals )

        const mergedMealsAndSymptoms = mergeObjectsByDate( mealsByDate, symptomsByDate )
        
        let mappedObjectsByDate = Object.keys( mergedMealsAndSymptoms ).slice( 0, 3 ).map(( date, i ) => {
            return <DateDropdown key={ i } 
                showUpdateModal={ this.props.updateModalIsVisible }
                date={ moment(date, 'YYYY-MM-DD').format('MMM Do') }
                symptoms={ mergedMealsAndSymptoms[date].symptoms } 
                meals={ mergedMealsAndSymptoms[date].meals } />
        })
        console.log(this.props.isFetchingSymptoms)
        return (
            <Box className='lightGreenBG'>
                <DisplayMessageHelper showMessage={ showMealSuccessMessage }
                    onClickCB={ () => toggleMealSuccessMessage( false ) }
                    status='ok' 
                    message='Success!' />

                <DisplayMessageHelper showMessage={ showSymptomSuccessMessage }
                    onClickCB={ () => toggleSymptomSuccessMessage( false ) }
                    status='ok' 
                    message='Success!' />
                    
                { mappedObjectsByDate.length ?
                    <Heading margin='small' tag='h3'>
                        Recent Entries
                    </Heading>
                :
                    <Heading margin='small' tag='h3'>
                        { isFetchingMeals && isFetchingSymptoms ?
                            'Loading...'
                        :
                            'No Recent Entries'
                        }
                    </Heading>
                }
                <Heading margin='small' tag='h3'>
                </Heading>
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
    recentMeals: [],
    recentSymptoms: [],
}

const mapStateToProps = (state) => {
    return ({
        recentSymptoms: state.symptoms.recentSymptoms,
        recentMeals: state.meals.recentMeals,
        showMealSuccessMessage: state.meals.showMealSuccessMessage,
        showSymptomSuccessMessage: state.symptoms.showSymptomSuccessMessage,
        isFetchingMeals: state.fetch.isFetchingMeals,
        isFetchingSymptoms: state.fetch.isFetchingSymptoms
    })
}

export default connect(mapStateToProps, { 
    getRecentMeals,
    getRecentSymptoms,
    toggleMealSuccessMessage,
    toggleSymptomSuccessMessage,
    toggleUpdateMealModal
} )(RecentsContainer);