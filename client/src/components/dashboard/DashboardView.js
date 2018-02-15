import React from 'react';
import RecentsContainer from '../recents/RecentsContainer';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Heading from 'grommet/components/Heading';
import AddCircleIcon from 'grommet/components/icons/base/AddCircle';

const DashboardView = ({ ...props }) => {
    return (
        <Box className='borderBoxShadowSmall'
            margin={{ top: 'small' }}
            size={{ width: 'xxlarge', height: { max: 'large'} }}
            separator='bottom'
            alignSelf='center'
            direction='row'
            colorIndex='light-1'>
            <Box margin={{ vertical: 'small', horizontal: 'medium' }}
                basis='3/4'>
                <Heading align='start' strong tag='h2'>
                    Dashboard
                </Heading>
                <Box className='borderBoxShadow'
                    separator='all'
                    margin={{ bottom: 'medium', right: 'small' }}
                    colorIndex='light-1'> 
                    <RecentsContainer />
                </Box>
            </Box>
            <Box basis='1/4'
                separator='left'
                margin={{ bottom: 'large', top: 'large', right: 'small' }}
                align='center'>
                <Heading tag='h3'>
                    Add An Entry
                </Heading>
                <Box alignSelf='center'>
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
        </Box>
    )
}

export default DashboardView