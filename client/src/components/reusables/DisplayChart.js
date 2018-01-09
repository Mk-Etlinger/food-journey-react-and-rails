import React from 'react';
import Chart, { Axis, Grid, Bar, Meter, Label, Box, Base, Value, Layers } from 'grommet/components/chart/Chart';
import Legend from 'grommet/components/Legend';

export default ({ mostSymptomaticFoods = {} }) => {
    
    // let chartValues = mostSymptomaticFoods.map( (food, i) => {})
    let highestValue = Object.values(mostSymptomaticFoods)[0]

    return (
        <Chart full={false}
            vertical={true}>
            <Axis count={5}
                labels={[{"index": 2, "label": `${ highestValue / 2 }`}, {"index": 4, "label": `${ highestValue + 5 }`}]}
                vertical={true} />
            <Base height='small'
                width='small' />
            <Layers>
                <Grid rows={5}
                columns={3} />
                <Bar values={ Object.values(mostSymptomaticFoods) }
                    max={ highestValue + 5 }
                    colorIndex='graph-2' />
            </Layers>
            <Axis count={2}
                labels={[{"index": 0, "label": "2012"}, {"index": 1, "label": "2015"}]} />
        </Chart>
    )
}