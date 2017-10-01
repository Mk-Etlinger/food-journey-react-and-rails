import React from 'react';

export default ({ date, mealType, ingredients}) => {
    console.log(ingredients)
    return (
        <div>
            <h4>{date}</h4>
            <button>{mealType[0]}</button>
            <ul>
                {/*ingredients.map(ing => <li>{ing}</li>)*/}
            </ul>
        </div>
    )
}