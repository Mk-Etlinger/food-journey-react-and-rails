import React from 'react';
import RadioButton from 'grommet/components/RadioButton';

export default ({ fields, currentValue, name, onChangeCb }) => {

    const radioButtons = fields.map((fieldName, i) => {
        return  <RadioButton key={ i }
                    name={ name }
                    id={ fieldName }
                    value={ fieldName }
                    onChange={ onChangeCb }
                    checked={ currentValue === fieldName }
                    label={ fieldName } />
    })
    
    return (
        <div style={{ margin: '0 0 1em 0' }}>
            { radioButtons }
        </div>
    )
};
