import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// import Map from 'grommet/components/Map';

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

            {/*<Map data={{
            "categories": [
                {
                "id": "category-1",
                "label": "First category",
                "items": [
                    {"id": "item-1-1", "label": "First item"},
                    {"id": "item-1-2", "label": "Second item"},
                    {"id": "item-1-3", "label": "Third item"}
                ]
                },
                {
                "id": "category-2",
                "label": "Second category",
                "items": [
                    {"id": "item-2-1", "label": "Fourth item"},
                    {"id": "item-2-2", "label": "Fifth item"}
                ]
                },
                {
                "id": "category-3",
                "label": "Third category",
                "items": [
                    {"id": "item-3-1", "label": "Sixth item"},
                    {"id": "item-3-2", "label": "Seventh item"}
                ]
                }
            ],
            "links": [
                {"parentId": "item-1-1", "childId": "item-2-2"},
                {"parentId": "item-1-2", "childId": "item-2-2"},
                {"parentId": "item-1-2", "childId": "item-2-1"},
                {"parentId": "item-2-2", "childId": "item-3-1"},
                {"parentId": "item-2-1", "childId": "item-3-2"}
            ]
            }} />*/}
        </div>

    )
}