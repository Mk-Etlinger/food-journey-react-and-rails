import React from 'react';
import moment from 'moment'
import TableRow from 'grommet/components/TableRow';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import SendIcon from 'grommet/components/icons/base/Send';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';

export default ({ meals, symptoms, ActiveComp, mostSymptomaticFoods, onActiveCB, activeIndex }) => {
    const isMealLoaded = meals.length > 0,
            isSymptomLoaded = symptoms.length > 0

    return (
        <Box pad='medium'
            direction='row'>
            <Box margin={{ right: 'small' }}
                basis='1/4'>
                <Box onClick={ () => alert('Coming Soon') } pad='small' className='darkGreenBG borderBoxShadowSmall' >
                    <Heading align='start' tag='h4'>
                        <SendIcon colorIndex='light-1' /> <span style={{ marginLeft: '10px'}} >Share your entries</span>
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
                    <Tab title='All' >
                        { isMealLoaded && <ActiveComp meals={ meals } 
                            symptoms={ symptoms } 
                            mostSymptomaticFoods={ mostSymptomaticFoods }/> 
                        }
                    </Tab>
                    <Tab title='Top Triggers' >
                        { isMealLoaded && <ActiveComp meals={ meals } 
                            symptoms={ symptoms } 
                            mostSymptomaticFoods={ mostSymptomaticFoods }/> 
                        }
                    </Tab>
                </Tabs>
            </Box>
        </Box>
    )
}