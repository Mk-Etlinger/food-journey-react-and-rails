import React from 'react';
import TableRow from 'grommet/components/TableRow';
import DisplayChart from '../reusables/DisplayChart';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Header from 'grommet/components/Header';
import CheckmarkIcon from 'grommet/components/icons/base/Checkmark';

export default ({ mostSymptomaticFoods }) => {
    const ingredientList = Object.keys(mostSymptomaticFoods).map((food, i) => 
        <TableRow key={ i } >
            <td>{ i + 1 }</td>
            <td><a href="#">{ food }</a></td> 
        </TableRow>
    );
    return (
        <div> 
            <Box pad='medium' 
                direction='row'>
                <Box 
                    margin={{ right: 'small' }}
                    basis='1/4'>
                    <Box onClick={ () => alert('Coming Soon') } pad='small' className='darkGreenBG borderBoxShadowSmall' >
                        <Heading align='start' tag='h4'>
                            <CheckmarkIcon colorIndex='light-1' /> Mark Foods Safe
                        </Heading>
                    </Box>
                </Box>

                <Box pad='medium'
                    className='borderBoxShadowSmall'
                    colorIndex='light-1'
                    align='center'
                    basis='3/4' >
                    <DisplayChart mostSymptomaticFoods={ mostSymptomaticFoods } />
                </Box>
            </Box>
        </div>
    );
}