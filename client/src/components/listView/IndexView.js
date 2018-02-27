import React from 'react';
import moment from 'moment'
import TableRow from 'grommet/components/TableRow';
import Box from 'grommet/components/Box';
import GrommetTable from '../reusables/GrommetTable';

export default ({ meals, symptoms }) => {
    const tableHeaders = (
        <tr>
            <th>#</th>
            <th>Date</th>
            <th>Meal</th>
            <th>Ingredients</th>
        </tr>
    )

    const tableRows = meals.map(( meal, i ) =>
        <TableRow key={ meal.id } >
            <td>{ meal.id }</td>
            <td>{ moment.utc(meal.created_at).format('MM/DD/YY') }</td>
            <td>{ meal.meal_type }</td> 
            <td>{ meal.ingredients.map(( ingredient, i ) => 
                <span key={ ingredient.id }><a href="#"> { ingredient.name }</a>
                { i !== meal.ingredients.length - 1 && ', ' }</span> 
            )}</td>  
        </TableRow>
    );

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
    )
}