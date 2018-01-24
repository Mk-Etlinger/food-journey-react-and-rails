import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import PasswordInput from 'grommet/components/PasswordInput';
import NumberInput from 'grommet/components/NumberInput';

export default ({ value, name, displayName, textarea, type, placeholder, onChangeCb }) => {
    const Component = inputFieldComps[ type ]
    return (
        textarea ?
            <fieldset>
                <FormField label={ displayName || splitToCapitalize(name) }
                    htmlFor='notes'>
                <textarea rows="5" 
                    value={ value }
                    type='text' 
                    id='description' 
                    name={ name }
                    placeholder={ placeholder }
                    onChange={ onChangeCb } />
                </FormField>
            </fieldset>
        :
            <FormField>
                { displayName || splitToCapitalize(name) }:
                <Component id='item1'
                    onChange={ onChangeCb }
                    onDOMChange={ onChangeCb }
                    placeholder={ placeholder }
                    name={ name }
                    value={ value } />
            </FormField>

    )
}

const inputFieldComps = {
    text: TextInput,
    number: NumberInput,
    password: PasswordInput
}

const splitToCapitalize = (name) => {    
    return name.split(/(?=[A-Z])/)
        .map(name => name.charAt(0).toUpperCase() + name.slice(1))
        .join(' ')
}