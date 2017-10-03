import React from 'react';
import ShowButton from './ShowButton';

export default ({ date, meals, symptoms}) => {
    const formatting = "  |  "
    const mealButtons = meals.map(meal => <ShowButton clicked={false} key={meal.id} mealId={meal.id} mealType={meal.meal_type} ingredients={meal.ingredients} />)
    const symptomButtons = symptoms.map(symptom => <ShowButton clicked={false} key={symptom.id} symptomId={symptom.id} />)
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