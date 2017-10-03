import React from 'react';

export default ({ name, meal_type, onChangeCb }) => {    
    return (
        <div>   
            {name}
            <label htmlFor={name}>
                <input 
                    type="radio"                    
                    value={name}
                    checked={meal_type === name}
                    onChange={onChangeCb} />                    
            </label>
        </div>
    )
};