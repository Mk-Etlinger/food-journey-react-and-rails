import React from 'react';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

export default ({ fields, currentValue, name, onChangeCb }) => {

    const radioButtons = fields.map((fieldName, i) => {
        return  <ToggleButton 
                    key={i}
                    value={fieldName} 
                    checked={currentValue === fieldName}
                    >
                    {fieldName}
                </ToggleButton>
    })
    
    return (
        <div style={{ margin: '0 0 10px 0' }}>
            <ToggleButtonGroup type="radio" 
                name={name}
                defaultValue={currentValue}
                onChange={onChangeCb}
            >
            {radioButtons}   
            </ToggleButtonGroup>
        </div>
    )
};
