import React from 'react';
import TableRow from 'grommet/components/TableRow';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
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
        <Box pad='small'
            size={{ width: 'large' }}
            colorIndex='light-1'
            align='center'
            flex> 
            {/*<Box alignSelf='end'>
                <Header>
                    <Heading align='start' tag='h4'>
                        Export
                    </Heading>
                </Header>
            </Box>*/}
            <GrommetTable selectable tableHeaders={ tableHeaders } tableRows={ tableRows }/>
        </Box>
    );
}