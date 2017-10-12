import React from 'react';
import ShowMealModal from './ShowMealModal';
import ShowSymptomModal from './ShowSymptomModal';

export default ({ date, meals, symptoms}) => {
    const formatting = "  |  "
    const mealButtons = meals.map(meal => {
        return <ShowMealModal
            date={date}
            key={meal.id} 
            mealId={meal.id} 
            meal_type={meal.meal_type}
            ingredients={meal.ingredients.map(ing => ing.name).join(', ')}/>
    })
    const symptomButtons = symptoms.map(symptom => {
        return <ShowSymptomModal 
            key={symptom.id}
            date={date}
            description={symptom.description}
            symptomId={symptom.id} 
            severity={symptom.reactions[0].severity}
            stress_level={symptom.reactions[0].stress_level}
            notes={symptom.reactions[0].notes}
            occurred_at={symptom.reaction_logs[0].occurred_at}
            ingredients={symptom.ingredients.map(ing => ing.name).join(', ')}/>
    })
    
    return (
        <div>
            <h4>{date}</h4>
            {mealButtons}
            {symptomButtons.length === 0 || formatting}
            {symptomButtons}
            <p>_______________</p>
        </div>
    )
}