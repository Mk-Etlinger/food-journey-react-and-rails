import React from 'react';
import moment from 'moment'
import TableRow from 'grommet/components/TableRow';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Header from 'grommet/components/Header';
import Anchor from 'grommet/components/Anchor';
import SendIcon from 'grommet/components/icons/base/Send';
import GrommetTable from '../reusables/GrommetTable';
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

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
        <Box pad='medium' 
            direction='row'>
            <Box margin={{ right: 'small' }}
                basis='1/4'>
                <Box onClick={ () => alert('Coming Soon') } pad='small' className='darkGreenBG borderBoxShadowSmall' >
                    <Heading align='start' tag='h4'>
                        <SendIcon colorIndex='light-1' /> <span style={{ marginLeft: '10px'}} >Share your entries</span>
                    </Heading>
                </Box>
            </Box>
            <Box pad='small'
                className='borderBoxShadowSmall'
                colorIndex='light-1'
                align='center'
                basis='3/4' >
                <Box alignSelf='end'>
                    <Header >
                        {/*<Heading align='start' tag='h4'>
                            All
                        </Heading>
                        <Heading align='start' tag='h4'>
                            Triggers
                        </Heading>*/}
                        <Heading align='start' tag='h4'>
                            Export
                        </Heading>
                    </Header>
                </Box>
                <GrommetTable selectable tableHeaders={ tableHeaders } tableRows={ tableRows }/>
            </Box>
        </Box>
    )
}


// class ExpandTable extends Component {
//   render() {
  
//     function ingredientsFormatter(cell, row) {
//         let ingredients = row.ingredients.map(ingredient => {
//             return <li style={ linkStyle } 
//                 key={ ingredient.id }>
//                 <a href="#">{ ingredient.name }</a>
//             </li>
//         })        
//         return (
//             <div>
//                 <ul>
//                     { ingredients }
//                 </ul>
//             </div>
//         )
//     }

//     function linkFormatter(cell, row) {
//         return <a href="#">{row.description}</a>
//     }
    
//     if (this.props.data) {
//         return (
//             <BootstrapTable data={ this.props.data }>
//                 <TableHeaderColumn hidden
//                     isKey={ true }
//                     dataField='id' 
//                     width="10%" 
//                     >ID
//                     </TableHeaderColumn>
//                 <TableHeaderColumn dataFormat={ linkFormatter } 
//                     width="20%"
//                     >Ailment
//                     </TableHeaderColumn>
//                 <TableHeaderColumn 
//                     tdStyle={{ overflow: 'scroll' }} 
//                     dataFormat={ ingredientsFormatter }
//                     >Possible Triggers
//                     </TableHeaderColumn>                    
//             </BootstrapTable>
//         );
//     } else {
//       return (<p>No available ailments on this date</p>);
//     }
//   }
// }

// function expandComponent(row) {
//         let mealDate = moment(row.created_at).format('MMM Do')
//         let filteredSymptoms = symptoms.filter(symptom => {
//             let symptomDate = moment(symptom.created_at).format('MMM Do')
            
//             return mealDate === symptomDate
//         })

//         return (
//             filteredSymptoms.length > 0 ? 
//                 <ExpandTable data={ filteredSymptoms } />
//             :
//                 <ExpandTable data={ row.expand } />
//         );
//     }

//     function isExpandableRow(row) {
//         return true;
//     }

    // function ingredientsFormatter(cell, row) {
    //     return row.ingredients.map(ingredient => ingredient.name).join(', ')
    // }
    // function dateFormatter(cell, row) {
    //     return moment(row.created_at).format('DD/MM/YY')
    // }

    // function symptomDefault(cell, row) {
    //     return "Click to Expand"
    // }