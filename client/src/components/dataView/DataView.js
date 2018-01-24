import React from 'react';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import DisplayChart from '../reusables/DisplayChart';
import Box from 'grommet/components/Box';

export default ({ mostSymptomaticFoods }) => {
    const ingredientList = Object.keys(mostSymptomaticFoods).map((food, i) => 
        <TableRow key={ i } >
            <td>{ i + 1 }</td>
            <td><a href="#">{ food }</a></td> 
        </TableRow>
    );
    return (
        <div> 
            <Box margin='large'
                align='center' >  
            <DisplayChart mostSymptomaticFoods={ mostSymptomaticFoods } />
            </Box>
        </div>
    );
}