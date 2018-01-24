import React from 'react';
import MealForm from './MealForm';
import SymptomForm from './SymptomForm';
import DateDisplay from './DateDisplay';
import Box from 'grommet/components/Box';

export const AddItem = () => {
    return (            
        <Box flex>
            <Box
                direction='row'
                align='start'
                justify='center'
                colorIndex='light-2'>
                <Box
                    alignSelf='center'
                    margin='large'
                    colorIndex='light-1'> 
                    <MealForm />
                </Box>
                <Box
                    alignSelf='center'
                    margin='large'
                    colorIndex='light-1'> 
                    <SymptomForm />
                </Box>
            </Box>
            
            <Box flex
                justify='center'
                colorIndex='light-2'>
                <h2>Recent</h2> 
                <Box direction='row'
                    justify='center'
                    colorIndex='light-2'>
                    <DateDisplay />
                </Box>
            </Box>
        </Box>
    )
}

{/*<Box full={true}>
  <Box tag='header' direction='row' justify='between' align='center'>

  </Box>
  <Box flex='grow' direction='row'>
    <Box align='center'>

    </Box>
    <Box flex={true} direction='row'>
      <Box basis='1/2'>
      
      </Box>
      <Box basis='1/2'>
      
      </Box>
    </Box>
  </Box>
</Box>*/}