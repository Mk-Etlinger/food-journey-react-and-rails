import React from 'react';
import MealCard from './MealCard';

export default ({ mealsByDate }) => {
    const mapMealDates = Object.keys(mealsByDate).map((date, i) => {       
        let mealsList = mealsByDate[date].map(meal => {
           return (            
                   <MealCard key={meal.id} meal={meal} />
                )
        })        
        return (
            <div key={i}>
                <h3>{date}</h3>
                {mealsList}
            </div> 
        )
    })
    return (
            <div>{mapMealDates}</div>
        )
}

// underneath each meal, add a button which is a counter
// for every click, increment the counter +1