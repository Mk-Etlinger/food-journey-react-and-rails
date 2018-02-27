import React from 'react';
import { connect } from 'react-redux';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import DashboardView from './DashboardView';
import { toggleMealModal } from '../../actions/meals/toggleMealModal';
import { toggleSymptomModal } from '../../actions/symptoms/toggleSymptomModal';
import AddCircleIcon from 'grommet/components/icons/base/AddCircle';

const MainContent = ({ activeComp: ActiveComponent, ...props }) => {
    return (
        <Box>
            { ActiveComponent !== DashboardView &&
                <Box style={ boxStyling }
                    direction='row'
                    colorIndex='light-2'>
                    <Anchor icon={ <AddCircleIcon size='medium' /> }
                        onClick={ () => props.toggleMealModal( true ) }
                        label='Meal' /> 
                    <Anchor style={ anchorStyling } 
                        onClick={ () => props.toggleSymptomModal( true ) }
                        icon={ <AddCircleIcon size='medium' /> }
                        label='Symptom' />
                </Box>
            }
            { ActiveComponent &&
                <ActiveComponent { ...props }/> 
            }
        </Box>
    )
}

const boxStyling = { 
    marginLeft: '10em',
    zIndex: 1,
}

const anchorStyling = { 
    marginLeft: '1em'
}

export default connect(null, { toggleMealModal, toggleSymptomModal })(MainContent)
