import React from 'react';
import Box from 'grommet/components/Box';
import { AddItem } from '../addItem/AddItem';
import AddCircleIcon from 'grommet/components/icons/base/AddCircle';

const MainContent = ({ activeComp: ActiveComponent, ...props }) => {
    return (
        <Box style={{ height: '96.5%' }}
            pad='small'
            colorIndex='light-2'>
            { ActiveComponent !== AddItem && 
                <AddCircleIcon style={ addIconStyling } id='addItem'
                    size='medium' 
                    onClick={ () => props.history.replace('/dashboard/addItem') } /> }
            { ActiveComponent && <ActiveComponent /> }
        </Box>
    )
}

const addIconStyling = { 
    cursor: 'pointer',
    marginLeft: '4em'
}

export default MainContent;
