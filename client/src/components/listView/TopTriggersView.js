import React from 'react';
import TableRow from 'grommet/components/TableRow';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import GrommetTable from '../reusables/GrommetTable';

export default ({ mostSymptomaticFoods }) => {
    const tableRows = Object.keys(mostSymptomaticFoods).map((food, i) => 
        <TableRow key={ i } >
            <td>{ i + 1 }</td>
            <td><a href="#">{ food }</a></td> 
        </TableRow>
    );

    const tableHeaders = (
        <tr>
            <th>#</th>
            <th>Top Trigger Foods</th>
        </tr>
    )

    return (
         <Box direction='row'>
            <Box pad='small' 
                basis='1/4'>
                <Heading tag='h2'>
                    Top Triggers
                </Heading>
            </Box>
            <Box className='borderMain'
                pad='large'
                colorIndex='light-1'
                align='center'
                basis='3/4' >
                <GrommetTable tableRows={ tableRows } tableHeaders={ tableHeaders } />
            </Box>
        </Box>
    );
}