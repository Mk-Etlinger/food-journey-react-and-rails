import React from 'react';
import ShowButton from './ShowButton';

export default ({ date, meals, symptoms}) => {
    const formatting = "  |  "
    const mealButtons = meals.map(meal => {
        return <ShowButton clicked={false} 
            key={meal.id} 
            mealId={meal.id} 
            mealType={meal.meal_type} 
            ingredients={meal.ingredients}/>
    })
    const symptomButtons = symptoms.map(symptom => {
        return <ShowButton clicked={false} 
            key={symptom.id} 
            symptomId={symptom.id} 
            severity={symptom.reactions[0].severity}
            stress_level={symptom.reactions[0].stress_level}
            occurred_at={symptom.reaction_logs[0].occurred_at}
            ingredients={symptom.ingredients}/>
    })
    
    return (
        <div>
            <h4>{date}</h4>
            {mealButtons}
            {formatting}
            {symptomButtons}
            <p>_______________</p>
        </div>
    )
}