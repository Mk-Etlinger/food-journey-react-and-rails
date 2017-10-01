import React from 'react';
import DateDropdown from '../components/DateDropdown'

function DateDisplay({ meals, symptoms }) {
    const formatting = "  |  "
    // Send a callback down to change the state in Dashboard
    const getDates = meals.map(meal => <DateDropdown mealType={meal.meal_type} date={meal.created_at} ingredients={meal.ingredients}/>) 
    // sort dates by MM-DD-YYYY
    // iterate through and group meals by date
    // { 09-27-2017: [
    //      {meal 1}
    //      {meal 2}
    // ]}
    // 
    // pass each date obj to props and then map each meal to a button


    return (
        <div>
            <ul>
                {getDates}
            </ul>
            <h4>Sept. 26th</h4>           
            <div>
                <button>B</button>
                <button>L</button>
                <button>D</button>
                <button>S</button>
                {formatting}
                <button>+</button>
                <button>+</button>
            </div>
        </div>
    )
}

export default DateDisplay;