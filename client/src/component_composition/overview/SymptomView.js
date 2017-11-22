import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default ({ symptomsIndex }) => {  
    function triggersFormatter(cell, row) {
        return row.ingredients.map(ingredient => ingredient.name).join(', ')
    }

    return (
        <div style={{ width: "400px" }}>
            {/*<BootstrapTable data={symptomsIndex} striped hover>
                <TableHeaderColumn width="10%" 
                    isKey 
                    dataSort 
                    dataField='id'
                    >#
                </TableHeaderColumn>
                <TableHeaderColumn width="30%" 
                    dataSort 
                    dataField='description'
                    >Ailment
                </TableHeaderColumn>
                <TableHeaderColumn width="50%" 
                    tdStyle={{overflow: 'scroll'}} 
                    dataFormat={triggersFormatter}
                    >Potential Triggers
                </TableHeaderColumn>
            </BootstrapTable>*/}
        </div>

    )
}