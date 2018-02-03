import React, { Component } from 'react';
import Table from 'grommet/components/Table';

export default ({ tableRows, tableHeaders }) => {
    return (
         <Table>
            <thead>
                { tableHeaders }
            </thead>
            <tbody>
                { tableRows }
            </tbody>
        </Table>
    )
}
