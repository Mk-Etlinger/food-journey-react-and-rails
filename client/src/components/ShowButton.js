import React from 'react';
// import EditMealForm from '../containers/EditMealForm';

const ShowButton = ({ mealType, ingredients, mealId }) => {
    // let ingredientLi = ingredients.map(ing => <li key={ing.id}>{ing.name}</li>)

    // const editMeal = () => <EditMealForm showForm='true' mealId={mealId} />
    // const handleClick = () => editMeal

    return (
        <div style={{ display: 'inline-block' }}>
            <button onClick={() => console.log("clicked inside ShowButton")}>{mealType !== undefined ? mealType[0] : '+'}</button>
            {/* edit form needs to show on click */}
            {/*<EditMealForm showForm={true} mealId={mealId} />*/}
            {/*<ul>
                {ingredientLi}
            </ul>*/}
            
        </div>
    )
}

export default ShowButton;