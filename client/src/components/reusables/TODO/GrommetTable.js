import React from 'react';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
// TODO: Make this a reusable dynamic component
export default ({ headers, data, mostSymptomaticFoods }) => {
    const ingredientList = Object.keys(mostSymptomaticFoods).map((food, i) => 
        <TableRow key={ i } >
            <td>{ i + 1 }</td>
            <td><a href="#">{ food }</a></td> 
        </TableRow>
    );

    return (
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Top Trigger Foods</th>
                </tr>
            </thead>
            <tbody>
                { ingredientList }
            </tbody>
        </Table>
    );
}