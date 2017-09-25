import React from 'react';

export default ({ name, mealType, onChangeCb }) => {
    return (
        <div>   
            {name}
            <label htmlFor={name}>
                <input type="radio" value={name}
                checked={mealType === name}
                onChange={onChangeCb} />                    
            </label>
        </div>
    )
};