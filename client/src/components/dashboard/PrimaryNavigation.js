import React from 'react';
import Columns from 'grommet/components/Columns';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Heading from 'grommet/components/Heading';
import PieChartIcon from 'grommet/components/icons/base/PieChart';
import BookIcon from 'grommet/components/icons/base/Book';
import AddCircleIcon from 'grommet/components/icons/base/AddCircle';
import InheritIcon from 'grommet/components/icons/base/Inherit';

const PrimaryNavigation = ({ windowWidth, onClickCB }) => {
    return (
        <Box flex 
            colorIndex='neutral-4'
            align='stretch'
            size={ splitLeftStyling }>
            <Columns
                size='small'
                justify='center'>
                <Box id='entries'
                    pad='medium'
                    alignSelf='center'
                    separator='bottom'
                    colorIndex='neutral-4' >
                    <Anchor icon={ <BookIcon size='medium'/> }
                        path='/dashboard/entries' 
                        onMouseEnter={this.someHandler}
                        onMouseLeave={this.someOtherHandler}>
                        {/*<Heading className='hide' tag='h4'>
                            Entries
                        </Heading>*/}
                    </Anchor>
                </Box>
                <Box id='analytics'
                    pad='medium'
                    alignSelf='center'
                    separator='bottom'
                    colorIndex='neutral-4'
                    onClick={ onClickCB } >
                    <Anchor icon={ <PieChartIcon size='medium'/> }
                        path='/dashboard/analytics' />
                       
                </Box>
                {/*<Box id='RelationContainer' 
                    pad='large'
                    alignSelf='center'
                    separator='bottom'
                    colorIndex='neutral-4'
                    onClick={ onClickCB } >
                    <div id='RelationContainer' onClick={ onClickCB }>
                        <InheritIcon size='medium' />
                    </div>
                </Box>*/}
            </Columns>
        </Box>
    )
}

const splitLeftStyling = {
    width: { min: 'small', max: 'full' }
}

export default PrimaryNavigation;