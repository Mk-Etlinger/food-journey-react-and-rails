import React from 'react';
import Box from 'grommet/components/Box';
import Status from 'grommet/components/icons/Status';

export const GrommetStatus =  ({ onClickCB, status, message }) => {
    return (
        <Box margin={{ top: 'small', left: 'small' }} 
            direction='row'>
            <Status onClick={ onClickCB }
                value={ status } />
            <span onClick={ onClickCB } 
                style={ messageStyling }>
                { message }
            </span>
        </Box>
    )
}

const messageStyling = { 
    margin: '.2em 0 0 .5em',
}