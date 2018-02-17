import React from 'react';
import MealModal from './MealModal';
import SymptomModal from './SymptomModal';
import Heading from 'grommet/components/Heading';
import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import List from 'grommet/components/List';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Paragraph from 'grommet/components/Paragraph';


export default ({ date, meals = [], symptoms = [] }) => {
    const mealButtons = meals.map(meal => {
        return <MealModal
            key={ meal.id }
            createdAt={ meal.created_at }
            date={ date }
            mealId={ meal.id } 
            meal_type={ meal.meal_type }
            ingredients={ meal.ingredients.map( ing => ing.name ).join(', ') }/>
     })

    const symptomButtons = symptoms.map(symptom => {
        return <SymptomModal 
            key={ symptom.id }
            date={ date }
            description={ symptom.description }
            symptomId={ symptom.id } 
            severity={ symptom.reactions[0].severity }
            stress_level={ symptom.reactions[0].stress_level }
            notes={ symptom.reactions[0].notes }
            occurred_at={ symptom.reaction_logs[0].occurred_at }
            ingredients={ symptom.ingredients.map( ing => ing.name ).join(', ') }/>
    })
    return (
        <Box
            flex='grow'
            align='start'
            basis='3/4'
            className='lightGreenBG'
            separator='all'>
            <Box style={{ width: '90%', margin: '.5em 0 0 .5em' }}
                className='darkGreenBG'
                pad={{ horizontal: 'small' }}>
                <Header size='small'>
                    <Heading tag='h3'>
                        { date }
                    </Heading>
                </Header>
            </Box>
                <Box align='start' >
                    <Box separator='none' 
                        align='center'>
                        <Tiles size='small'>
                            { mealButtons }
                        </Tiles>  
                    </Box>
                    <Box separator='top'
                        align='center'>
                        <Tiles size='small'>
                            { symptomButtons }
                        </Tiles>
                    </Box> 
                </Box>
        </Box>
    )
}

