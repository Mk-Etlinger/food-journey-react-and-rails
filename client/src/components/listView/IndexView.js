import React, { Component } from 'react';
import moment from 'moment'
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
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
            <th>Ailments</th>
        </tr>
    )

    const tableRows = meals.map(( meal, i ) =>
        <TableRow key={ meal.id } >
            <td>{ meal.id }</td>
            <td>{ moment(meal.created_at).format('DD/MM/YY') }</td>
            <td>{ meal.meal_type }</td> 
            <td>{ meal.ingredients.map(( ingredient, i ) => 
                <span><a href="#"> { ingredient.name }</a>
                { i !== meal.ingredients.length - 1 && ', ' }</span> 
            )}</td> 
            <td>CLICK TO EXPAND</td> 
        </TableRow>
    );

    return (
        <GrommetTable tableHeaders={ tableHeaders } tableRows={ tableRows }/>
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