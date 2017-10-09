import React from 'react';
// import EditMealForm from '../containers/EditMealForm';

const ShowButton = ({ 
    mealId, 
    mealType, 
    ingredients, 
    symptomId, 
    severity, 
    stress_level, 
    ocurred_at 
}) => {
    // let ingredientLi = ingredients.map(ing => <li key={ing.id}>{ing.name}</li>)

    // const editMeal = () => <EditMealForm showForm='true' mealId={mealId} />
    // const handleClick = () => editMeal
    return (
        <div style={{ display: 'inline-block' }}>
            <button onClick={() => console.log(props)}>
                {mealType !== undefined ? 
                    mealType.charAt(0).toUpperCase() 
                : 
                    '+'
                }</button>
            {/* edit form modal needs to show on click */}
            {/*<EditMealForm showForm={true} mealId={mealId} />*/}
            {/*<ul>
                {ingredientLi}
            </ul>*/}
            
        </div>
    )
}

export default ShowButton;