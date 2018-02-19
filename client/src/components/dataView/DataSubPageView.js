import React from 'react';
import moment from 'moment'
import TableRow from 'grommet/components/TableRow';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Header from 'grommet/components/Header';
import Anchor from 'grommet/components/Anchor';
import SendIcon from 'grommet/components/icons/base/Send';
import GrommetTable from '../reusables/GrommetTable';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import CheckmarkIcon from 'grommet/components/icons/base/Checkmark';

export default ({ ActiveComp, mostSymptomaticFoods, onActiveCB, activeIndex }) => {
    const isMostSymptomaticFoodsLoaded = Object.keys(mostSymptomaticFoods).length > 0

    return (
        <Box pad='medium'
            direction='row'>
            <Box margin={{ right: 'small' }}
                basis='1/4'>
                <Box onClick={ () => alert('Coming Soon') } pad='small' className='darkGreenBG borderBoxShadowSmall' >
                    <Heading align='start' tag='h4'>
                        <CheckmarkIcon colorIndex='light-1' /> Mark Foods Safe
                    </Heading>
                </Box>
            </Box>
            <Box pad='small'
                flex
                className='borderBoxShadowSmall'
                colorIndex='light-1'
                align='center'
                basis='3/4' >
                <Tabs onActive={ onActiveCB }
                    activeIndex={ activeIndex } >
                    <Tab title='Top Triggers' >
                        { isMostSymptomaticFoodsLoaded && <ActiveComp
                            mostSymptomaticFoods={ mostSymptomaticFoods }/> 
                        }
                    </Tab>
                </Tabs>
            </Box>
        </Box>
    )
}