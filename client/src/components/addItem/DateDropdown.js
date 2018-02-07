import React from 'react';
import ShowMealModal from './ShowMealModal';
import ShowSymptomModal from './ShowSymptomModal';
import Tile from 'grommet/components/Tile';
import Heading from 'grommet/components/Heading';
import Header from 'grommet/components/Header';
import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';

export default ({ date, meals = [], symptoms = [] }) => {
    const mealButtons = meals.map(meal => {
        return <ShowMealModal
            key={ meal.id }
            createdAt={ meal.created_at }
            date={ date }
            mealId={ meal.id } 
            meal_type={ meal.meal_type }
            ingredients={ meal.ingredients.map( ing => ing.name ).join(', ') }/>
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
            ingredients={ symptom.ingredients.map( ing => ing.name ).join(', ') }/>
    })
    
    return (
        <Box align='center'
            pad='small'
            separator='all'>
            <Header size='small'
                pad={{ "horizontal": "small" }}>
                <Heading tag='h3' >
                    { date }
                </Heading>
            </Header>
            <hr style={{ width: '50%', border: 'solid lightGrey', borderWidth: '1px' }}/>
            <Box direction='row'
                align='center'>
                <Box direction='row' 
                    align='between'>
                    Meals:
                </Box>
                <Box margin={{ left: 'medium' }}>
                    Symptoms:
                </Box>
            </Box>
           
            <Box direction='row'
                justify='center'
                pad='small'
                size='small'>
                <Box align='center'
                    basis='1/3'>
                    { mealButtons }
                </Box>
                <Box align='center'
                    basis='1/3'>
                    { symptomButtons }
                </Box> 
            </Box>
        </Box>
    )
}

 // const test = symptoms.map(symptom => {
    //     return <List>
    //         <ListItem justify='between'
    //             separator='horizontal'>
    //             <span>
    //             Alan
    //             </span>
    //             <span className='secondary'>
    //             happy
    //             </span>
    //         </ListItem>
    //     </List>
    // })
