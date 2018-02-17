import React from 'react';
import Table from 'grommet/components/Table';

export default ({ tableRows, tableHeaders, scrollable, selectable }) => {
    return (
        <Table selectable>
            <thead>
                { tableHeaders }
            </thead>
            <tbody>
                { tableRows }
            </tbody>
        </Table>
    )
}
