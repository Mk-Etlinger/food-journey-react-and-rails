import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

export default ({ value, name, displayName, type, placeholder, onChangeCb }) => {
    return (
        type === 'textarea' ?
            <div>                    
                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>{displayName || splitToCapitalize(name)}:</ControlLabel>
                    <span>{' '}</span>
                    <FormControl value={value}
                        name={name}
                        onChange={onChangeCb}
                        placeholder={placeholder}
                        componentClass="textarea"/>
            </FormGroup>
            </div>            
        :
            <div style={{ margin: '0 0 10px 0' }}>
                <FormGroup bsSize="small">
                <ControlLabel>{displayName || splitToCapitalize(name)}:</ControlLabel>
                <span>{' '}</span>
                <FormControl type={type} 
                    placeholder={placeholder}
                    name={name}
                    value={value} 
                    onChange={onChangeCb} />
                </FormGroup>
            </div>
    )
}

const splitToCapitalize = (name) => {    
    return name.split(/(?=[A-Z])/)
        .map(name => name.charAt(0).toUpperCase() + name.slice(1))
        .join(' ')
}