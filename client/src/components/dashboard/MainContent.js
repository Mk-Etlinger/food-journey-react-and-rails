import React from 'react';
import Box from 'grommet/components/Box';

const MainContent = ({ windowWidth, onClickCB, activeComp: ActiveComponent }) => {
    return (
        <Box full 
            colorIndex='light-2'>
            { ActiveComponent && <ActiveComponent /> }
        </Box>
    )
}

export default MainContent;