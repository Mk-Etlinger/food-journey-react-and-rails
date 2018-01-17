import React from 'react';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import { Grid, Col, Row } from 'react-bootstrap';
import DisplayChart from '../reusables/DisplayChart';

export default ({ mostSymptomaticFoods }) => {
    const ingredientList = Object.keys(mostSymptomaticFoods).map((food, i) => 
        <TableRow key={ i } >
            <td>{ i + 1 }</td>
            <td><a href="#">{ food }</a></td> 
        </TableRow>
    );
    return (
        <div>   
            <DisplayChart mostSymptomaticFoods={ mostSymptomaticFoods } />
        </div>
    );
}