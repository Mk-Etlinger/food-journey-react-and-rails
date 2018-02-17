import React from 'react';
import MealFormContainer from './MealFormContainer';
import SymptomForm from './SymptomForm';
import RecentsContainer from './RecentsContainer';
import Box from 'grommet/components/Box';

export const AddItem = () => {
    return (            
        <Box full>
            <Box flex 
                align='center'
                direction='row'>
                <Box basis='1/2'>
                    <Box
                        alignSelf='center'
                        margin='large'
                        colorIndex='light-1'> 
                        <MealFormContainer />
                    </Box>
                </Box>
                <Box basis='1/2'>
                    <Box
                        alignSelf='center'
                        margin='large'
                        colorIndex='light-1'> 
                        <SymptomForm />
                    </Box>
                </Box>
            </Box>
            
            <Box flex
                justify='center'
                colorIndex='light-2'>
                <h2>Recent:</h2> 
                <Box direction='row'
                    justify='center'
                    colorIndex='light-2'>
                    <RecentsContainer />
                </Box>
            </Box>
        </Box>
    )
}
