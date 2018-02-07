import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleSymptomModal } from '../../actions/symptoms/toggleSymptomModal';
import { toggleMealModal } from '../../actions/meals/toggleMealModal';
import MainContent from './MainContent';
import PrimaryNavigation from './PrimaryNavigation';
import RecentsContainer from '../addItem/RecentsContainer';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Heading from 'grommet/components/Heading';
import AddCircleIcon from 'grommet/components/icons/base/AddCircle';

const DashboardView = ({ ...props }) => {
    return (
            <Box
                separator='bottom'
                align='start'
                direction='row'
                colorIndex='light-2'>
                <Box basis='2/3'>
                    <Heading className='hide' tag='h1'>
                        Recents:
                    </Heading>
                    <Box
                        alignSelf='center'
                        separator='all'
                        margin={{ bottom: 'large', right: 'small' }}
                        colorIndex='light-1'> 
                        <RecentsContainer />
                    </Box>
                </Box>
                <Box basis='1/3'
                    separator='left'
                    margin={{ bottom: 'large' }}
                    >
                    <Box basis='1/2'
                        alignSelf='start'
                        margin={{ left: 'large', vertical: 'medium'}}
                        pad='small'> 
                        <Anchor icon={ <AddCircleIcon size='medium' /> }
                            onClick={ () => props.toggleMealModal( true ) }
                            label='Meal' />
                    </Box>
                    <Box basis='1/2'
                        pad='small'
                        alignSelf='start'
                        margin={{ left: 'large', bottom: 'large'}}> 
                        <Anchor icon={ <AddCircleIcon size='medium' /> }
                            onClick={ () => props.toggleSymptomModal( true ) }
                            label='Symptom' />
                    </Box>
                </Box>
            </Box>
    )
}


export default DashboardView