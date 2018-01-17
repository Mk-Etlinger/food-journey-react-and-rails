import React from 'react';
import Box from 'grommet/components/Box';

const MainContent = ({ windowWidth, onClickCB, activeComp: ActiveComponent }) => {
    console.log(ActiveComponent)
    return (
        <Box
            justify='start'
            align='center'
            pad='medium'
            size={ splitRightStyling }>
            <ActiveComponent />
        </Box>
    )
}

const splitRightStyling = { 
    height: 'large',
    width: { min: 'xsmall', max: 'full' }
}

export default MainContent;