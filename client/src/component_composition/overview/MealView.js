import React from 'react';
import moment from 'moment'

export default ({ meals }) => {
    let mealsByDate = {};
    meals.forEach(meal => {
        let date = moment(meal.created_at).format('MMM Do')
        let mealsArray = mealsByDate[date] || []
        
        mealsByDate[date] = [...mealsArray, meal]
    });
    const mapMealDates = Object.keys(mealsByDate).map((date, i) => {       
        let mealsList = mealsByDate[date].map(meal => {
			return (            
				<div key={meal.id}>                    
					<p>{meal.meal_type + ': ' + meal.ingredients.map(ing => ing.name)}</p>                
				</div>
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