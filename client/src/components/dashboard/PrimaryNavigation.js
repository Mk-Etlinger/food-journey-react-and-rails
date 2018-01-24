import React from 'react';
import Columns from 'grommet/components/Columns';
import Box from 'grommet/components/Box';
import AnalyticsIcon from 'grommet/components/icons/base/Analytics';
import BookIcon from 'grommet/components/icons/base/Book';
import AddCircleIcon from 'grommet/components/icons/base/AddCircle';
import InheritIcon from 'grommet/components/icons/base/Inherit';

const PrimaryNavigation = ({ windowWidth, onClickCB, responsiveRender }) => {
    return (
        <Box colorIndex='neutral-4'
            style={{ height: '100%' }}
            align='stretch'
            size={ splitLeftStyling }>
            <Columns masonry={ windowWidth < 718 }
                maxCount={ 1 }
                size='small'
                justify='center'>
                <Box id='AddItem'
                    pad='large'
                    alignSelf='center'
                    separator='bottom'
                    colorIndex='neutral-4'
                    onClick={ onClickCB } >
                    <div id='AddItem' onClick={ onClickCB }>
                        <AddCircleIcon size='medium' />
                    </div>
                </Box>
                <Box id='ListContainer'
                    pad='large'
                    alignSelf='center'
                    separator='bottom'
                    colorIndex='neutral-4'
                    onClick={ onClickCB } >
                    <div id='ListContainer' onClick={ onClickCB }>
                        <BookIcon size='medium' />
                    </div>
                </Box>
                <Box id='DataContainer'
                    pad='large'
                    alignSelf='center'
                    separator='bottom'
                    colorIndex='neutral-4'
                    onClick={ onClickCB } >
                    <div id='DataContainer' onClick={ onClickCB }>
                        <AnalyticsIcon size='medium' />
                    </div>
                </Box>
                <Box id='RelationContainer' 
                    pad='large'
                    alignSelf='center'
                    separator='bottom'
                    colorIndex='neutral-4'
                    onClick={ onClickCB } >
                    <div id='RelationContainer' onClick={ onClickCB }>
                        <InheritIcon size='medium' />
                    </div>
                </Box>
            </Columns>
        </Box>
    )
}

const splitLeftStyling = {
    height: 'full',
    width: 'small',
}

// const splitLeftStyling = {
//     width: { min: 'small', max: 'full' }
// }

export default PrimaryNavigation;