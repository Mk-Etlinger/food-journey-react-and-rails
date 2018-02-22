import React from 'react';
import Box from 'grommet/components/Box';
import { GrommetStatus } from '../reusables/GrommetStatus';


export default ({ status, message, showMessage, onClickCB }) => {

    return (
        <Box onClick={ onClickCB } 
            direction='row' 
            justify='start'>
            { showMessage &&
                <GrommetStatus onClick={ onClickCB }
                    status={ status } 
                    message={ message } />
            }
        </Box>
    )
}

