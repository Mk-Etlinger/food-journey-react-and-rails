import React from 'react';
import Columns from 'grommet/components/Columns';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Heading from 'grommet/components/Heading';
import PieChartIcon from 'grommet/components/icons/base/PieChart';
import BookIcon from 'grommet/components/icons/base/Book';
import AddCircleIcon from 'grommet/components/icons/base/AddCircle';
import InheritIcon from 'grommet/components/icons/base/Inherit';

const PrimaryNavigation = () => {
    return (
        <Box justify='start'
            margin='medium' 
            direction='row' >
            <Box id='entries'
                basis="1/3"
                alignSelf='center'
                colorIndex='light-2' >
                <Anchor icon={ <BookIcon size='medium'/> }
                    path='/dashboard/entries' >
                    <Heading tag='h4'>
                        Entries
                    </Heading>
                </Anchor>
            </Box>
            <Box id='analytics'
                basis="1/3"
                alignSelf='center'
                separator='left'
                colorIndex='light-2'>
                <Anchor icon={ <PieChartIcon size='medium'/> }
                    path='/dashboard/analytics'>
                    <Heading tag='h4'>
                        Analyze
                    </Heading>
                </Anchor>
            </Box>
            <Box id='RelationContainer' 
                basis="1/3"
                alignSelf='center'
                separator='left'
                colorIndex='light-2'>
                <Anchor icon={ <InheritIcon size='medium'/> }
                    path='/dashboard/relations' >
                    <Heading tag='h4'>
                        Visualize
                    </Heading>
                </Anchor>
            </Box>
        </Box>
    )
}

// const splitLeftStyling = {
//     width: { min: 'small', max: 'full' }
// }

export default PrimaryNavigation;