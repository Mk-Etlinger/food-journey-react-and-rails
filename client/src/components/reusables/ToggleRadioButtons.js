import React from 'react';
import RadioButton from 'grommet/components/RadioButton';
import FormField from 'grommet/components/FormField';

export default ({ fields, currentValue, name, onChangeCb }) => {

    const radioButtons = fields.map((fieldName, i) => {
        return  (
            <RadioButton key={ i }
                name={ name }
                id={ fieldName }
                value={ fieldName }
                onChange={ onChangeCb }
                checked={ currentValue === fieldName }
                label={ fieldName } />
        )
    })
    
    return (
        <FormField>
            { radioButtons }
        </FormField>
    )
};
