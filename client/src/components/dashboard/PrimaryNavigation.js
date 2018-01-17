import React from 'react';
import Columns from 'grommet/components/Columns';
import Box from 'grommet/components/Box';

const PrimaryNavigation = ({ windowWidth, onClickCB, responsiveRender }) => {

    return (
        <Box colorIndex='neutral-4'
            justify='start'
            align='center'
            size={ {...splitLeftStyling, height: responsiveRender}}>
            <Columns masonry={ windowWidth < 718 }
                maxCount={ 1 }
                size='small'
                justify='center'>
                <Box align='center'
                    alignSelf='stretch'
                    pad='large'
                    separator='bottom'
                    colorIndex='neutral-4'>
                    <a href='#' id='AddItem' onClick={ onClickCB }>Add Item +</a> 
                </Box>
                <Box align='center'
                    pad='large'
                    separator='bottom'
                    colorIndex='neutral-4'>
                    <a href='#' id='ListContainer' onClick={ onClickCB }>List View</a>
                </Box>
                <Box align='center'
                    pad='large'
                    separator='bottom'
                    colorIndex='neutral-4'>
                    <a href='#' id='DataContainer' onClick={ onClickCB }>Data View</a>
                </Box>
                <Box align='center'
                    pad='large'
                    separator='bottom'
                    colorIndex='neutral-4'>
                    <a href='#' id='RelationContainer' onClick={ onClickCB }>Relation View</a>
                </Box>
            </Columns>
        </Box>
    )
}

const splitLeftStyling = {
    width: { min: 'small', max: 'full' }
}

export default PrimaryNavigation;