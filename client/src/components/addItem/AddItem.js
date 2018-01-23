import React from 'react';
import MealForm from './MealForm';
import SymptomForm from './SymptomForm';
import DateDisplay from './DateDisplay';
import Box from 'grommet/components/Box';

export const AddItem = () => {
    return (            
        <div>
            <Box
                direction='row'
                align='start'
                justify='center'
                colorIndex='light-2'>
                <Box
                    flex
                    alignSelf='center'
                    margin='large'
                    colorIndex='light-1'> 
                    <MealForm />
                </Box>
                <Box
                    flex
                    alignSelf='center'
                    margin='large'
                    colorIndex='light-1'> 
                    <SymptomForm />
                </Box>
            </Box>
            
            <Box full
                justify='center'
                colorIndex='light-2'>
                <h2>Recent</h2> 
                <Box direction='row'
                    justify='center'
                    colorIndex='light-2'>
                    <DateDisplay />
                </Box>
            </Box>
        </div>
    )
}