import React from 'react';

export default ({ mostSymptomaticFoods }) => {
    const ingredientList = Object.keys(mostSymptomaticFoods).map((food, i) => 
        <li key={i}>{food}</li>
    );
    return (
        <div>
            <h3>Top Trigger Foods:</h3>
            <ol>
                { ingredientList }
            </ol>
        </div>
    )
}