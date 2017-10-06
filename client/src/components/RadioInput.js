import React from 'react';

export default ({ value, meal_type, onChangeCb }) => {    
    return (
        <div>   
            {value}
            <label htmlFor={value}>
                <input 
                    type="radio"                    
                    value={value}
                    name='meal_type'
                    checked={meal_type === value}
                    onChange={onChangeCb} />                    
            </label>
        </div>
    )
};