import React from 'react';
import Chart, { Axis, Base } from 'grommet/components/chart/Chart';
import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';
import Meter from 'grommet/components/Meter';
import Label from 'grommet/components/Label';

export default ({ mostSymptomaticFoods = {} }) => {
    
    let highestValue = Object.values(mostSymptomaticFoods)[0]
    // let legendLabels = Object.keys(mostSymptomaticFoods).map(( food, i ) => {
    //     return { "label": food, "colorIndex": `graph-${ i + 1 }`}
    // })

    let meterValues = Object.keys(mostSymptomaticFoods).map(( food, i ) => {
        let barValue = mostSymptomaticFoods[food]
        return (
            <Box key={ i } 
                align='start'
                pad={{ "horizontal": "small", "between": "small" }}>
                <Value value={ barValue }
                    active={ false } />
                <Meter id='meter-1-id'
                    label={ false }
                    max={ highestValue + 2 }
                    min={ 0 }
                    value={ barValue }
                    vertical={ true }
                    active={ false } />
                <Label margin='small'>
                { food }
                </Label>
            </Box>
        )
    })
    return (
        <Chart verticalAlignWith='meter-1-id'>
            <Axis count={ 5 }
                labels={[{"index": 2, "label": (highestValue / 2) + 1 }, {"index": 4, "label": highestValue + 2 }]}
                vertical />
            <Chart vertical
                verticalAlignWith='meter-1-id'>
                <Base>
                    { meterValues }
                </Base>
            </Chart>
        </Chart>
    )
}
