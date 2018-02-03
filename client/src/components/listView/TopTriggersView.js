import React from 'react';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
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
        <GrommetTable  tableRows={ tableRows } tableHeaders={ tableHeaders } />
    );
}