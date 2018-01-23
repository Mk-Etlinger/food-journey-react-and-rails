import React from 'react';
import ShowMealModal from './ShowMealModal';
import ShowSymptomModal from './ShowSymptomModal';
import Tile from 'grommet/components/Tile';
import Heading from 'grommet/components/Heading';
import Header from 'grommet/components/Header';
import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';

export default ({ date, meals = [], symptoms = [] }) => {
    let showFormatting = symptoms.length !== 0  &&
        meals.length !== 0
    const mealButtons = meals.map(meal => {
        return <ShowMealModal
            date={ date }
            key={ meal.id } 
            mealId={ meal.id } 
            meal_type={ meal.meal_type }
            ingredients={ meal.ingredients.map(ing => ing.name).join(', ') }/>
     })

    const symptomButtons = symptoms.map(symptom => {
        return <ShowSymptomModal 
            key={ symptom.id }
            date={ date }
            description={ symptom.description }
            symptomId={ symptom.id } 
            severity={ symptom.reactions[0].severity }
            stress_level={ symptom.reactions[0].stress_level }
            notes={ symptom.reactions[0].notes }
            occurred_at={ symptom.reaction_logs[0].occurred_at }
            ingredients={ symptom.ingredients.map(ing => ing.name).join(', ') }/>
    })
    
    return (
        <Tile align='center' 
            separator='all' >
            <Header size='small'
            pad={{"horizontal": "small"}}>
            <Heading tag='h4'
                strong >
                { date }
            </Heading>
            </Header>
            <Box pad='small'>
                <span>
                { mealButtons }
                { showFormatting && <span> | </span> }
                { symptomButtons }
                </span>
            </Box>
        </Tile>
    )
}
