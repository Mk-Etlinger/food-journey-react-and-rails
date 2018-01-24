import React, { Component } from 'react';
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
                <ExpandTable data={ filteredSymptoms } />
            :
                <ExpandTable data={ row.expand } />
        );
    }

    function isExpandableRow(row) {
        return true;
    }

    return (
        <div>
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
                    dataFormat={ dateFormatter }
                    >Date
                </TableHeaderColumn>
                <TableHeaderColumn width="15%" 
                    dataSort 
                    dataField='meal_type'
                    >Meal Type
                </TableHeaderColumn>
                <TableHeaderColumn width="45%"
                    tdStyle={{ overflow: 'scroll' }} 
                    dataFormat={ ingredientsFormatter }
                    >Ingredients
                </TableHeaderColumn>
                <TableHeaderColumn width="15%"
                    tdStyle={{ overflow: 'scroll' }}
                    dataFormat={ symptomDefault }
                    >Ailments
                </TableHeaderColumn>
            </BootstrapTable>
        </div>
    )
}


class ExpandTable extends Component {
  render() {
  
    function ingredientsFormatter(cell, row) {
        let ingredients = row.ingredients.map(ingredient => {
            return <li style={ linkStyle } 
                key={ ingredient.id }>
                <a href="#">{ ingredient.name }</a>
            </li>
        })        
        return (
            <div>
                <ul>
                    { ingredients }
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
                <TableHeaderColumn hidden
                    isKey={ true }
                    dataField='id' 
                    width="10%" 
                    >ID
                    </TableHeaderColumn>
                <TableHeaderColumn dataFormat={ linkFormatter } 
                    width="20%"
                    >Ailment
                    </TableHeaderColumn>
                <TableHeaderColumn 
                    tdStyle={{ overflow: 'scroll' }} 
                    dataFormat={ ingredientsFormatter }
                    >Possible Triggers
                    </TableHeaderColumn>                    
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