import React from 'react';
import { connect } from 'react-redux';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import DashboardView from './DashboardView';
import SymptomForm from '../addItem/SymptomForm';
import MealForm from '../addItem/MealForm';
import { toggleMealModal } from '../../actions/meals/toggleMealModal';
import { toggleSymptomModal } from '../../actions/symptoms/toggleSymptomModal';
import AddCircleIcon from 'grommet/components/icons/base/AddCircle';

const MainContent = ({ activeComp: ActiveComponent, ...props }) => {
    return (
        <Box 
            pad='small'
            colorIndex='light-2'>
            { ActiveComponent !== DashboardView &&
                <Box 
                    style={ boxStyling }
                    direction='row'
                    colorIndex='light-2'
                    margin={{ botton: 'small' }}>
                    <Anchor icon={ <AddCircleIcon size='medium' /> }
                        onClick={ () => props.toggleMealModal( true ) }
                        label='Meal' /> 
                    <Anchor style={ anchorStyling } 
                        onClick={ () => props.toggleSymptomModal( true ) }
                        icon={ <AddCircleIcon size='medium' /> }
                        label='Symptom' />
                </Box>
            }
            { ActiveComponent && <ActiveComponent { ...props }/> }
            <MealForm />
            <SymptomForm />
        </Box>
    )
}

const boxStyling = { 
    marginLeft: '4em',
    zIndex: 1,
}

const anchorStyling = { 
    marginLeft: '1em'
}

export default connect(null, { toggleMealModal, toggleSymptomModal })(MainContent)
