import React from 'react';
import moment from 'moment'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default ({ meals, symptoms }) => {
    function ingredientsFormatter(cell, row) {
        return row.ingredients.map(ingredient => ingredient.name).join(', ')
    }
    function dateFormatter(cell, row) {
        return moment(row.created_at).format('DD/MM/YY')
    }

    function symptomDefault(cell, row) {
        return "Click to Expand"
    }

    function expandComponent(row) {
        let mealDate = moment(row.created_at).format('MMM Do')
        let filteredSymptoms = symptoms.filter(symptom => {
            let symptomDate = moment(symptom.created_at).format('MMM Do')
            
            return mealDate === symptomDate
        })

        return (
            filteredSymptoms.length > 0 ? 
                <BSTable data={ filteredSymptoms } />
            :
                <BSTable data={ row.expand } />
        );
    }

    function isExpandableRow(row) {
        return true;
    }

    return (
        <div style={{ width: "70%", margin: '0 auto 0 auto' }}>
            <BootstrapTable data={meals} 
                striped hover
                expandableRow={ isExpandableRow }
                expandComponent={ expandComponent }>
                <TableHeaderColumn width="5%"
                    isKey
                    dataSort 
                    dataField='id'
                    >#
                </TableHeaderColumn>
                <TableHeaderColumn width="15%"
                    dataSort
                    dataField='created_at'
                    dataFormat={dateFormatter}
                    >Date
                </TableHeaderColumn>
                <TableHeaderColumn width="15%" 
                    dataSort 
                    dataField='meal_type'
                    >Meal Type
                </TableHeaderColumn>
                <TableHeaderColumn width="45%"
                    tdStyle={{overflow: 'scroll'}} 
                    dataFormat={ingredientsFormatter}
                    >Ingredients
                </TableHeaderColumn>
                <TableHeaderColumn width="15%"
                    tdStyle={{overflow: 'scroll'}}
                    dataFormat={symptomDefault}
                    >Ailments
                </TableHeaderColumn>
            </BootstrapTable>
        </div>
    )
}


class BSTable extends React.Component {
  render() {
  
    function ingredientsFormatter(cell, row) {
        let ingredients = row.ingredients.map(ingredient => {
            return <li style={linkStyle} key={ingredient.id}><a href="#">{ingredient.name}</a></li>
        })        
        return (
            <div>
                <ul>
                    {ingredients}
                </ul>
            </div>
        )
    }

    function linkFormatter(cell, row) {
        return <a href="#">{row.description}</a>
    }
    
    if (this.props.data) {
        return (
            <BootstrapTable data={ this.props.data }>
                <TableHeaderColumn dataField='id' hidden width="10%" isKey={ true }>ID</TableHeaderColumn>
                <TableHeaderColumn dataFormat={ linkFormatter } width="20%">Ailment</TableHeaderColumn>
                <TableHeaderColumn tdStyle={{ overflow: 'scroll' }} dataFormat={ ingredientsFormatter }>Possible Triggers</TableHeaderColumn>                    
            </BootstrapTable>
        );
    } else {
      return (<p>No available ailments on this date</p>);
    }
  }
}

let linkStyle = {
    display: "inline",
    marginLeft: "10px"
}

// const groupByDates = (meals = [], symptoms = []) => {
//     // let tableFormat = {
//     //     date: 
//     //         { meals: [{id: 1, meal_type: 'snack'}],
//     //         symptoms: [{id: 1, description: 'headache'}] }
//     // }

//     let symptomsByDate = {}, mealsByDate = {}, combinedForTable = {};
//         symptoms.forEach(symptom => {
//             let date = moment(symptom.created_at).format('MMM Do')
//             let symptomsArray = symptomsByDate[date] || []
            
//             symptomsByDate[date] = [...symptomsArray, symptom]
//         });
//         meals.forEach(meal => {
//             let date = moment(meal.created_at).format('MMM Do')
//             let mealsArray = mealsByDate[date] || []
            
//             mealsByDate[date] = [...mealsArray, meal]
//         });

//         Object.keys(mealsByDate).forEach((date, i) => {
//             combinedForTable[date] = combinedForTable[date] || { meals: [], symptoms: [] }
            
//             if (symptomsByDate[date]) {
//                 combinedForTable[date].meals = [...mealsByDate[date]]
//                 combinedForTable[date].symptoms = [...symptomsByDate[date]]
//             } else {
//                 combinedForTable[date].meals = [...mealsByDate[date]]
//             }
//         })

//         return combinedForTable
// }