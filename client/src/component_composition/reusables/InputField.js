import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

export default ({ value, name, type, placeholder, onChangeCb }) => {
    return (
        type === 'textarea' ?
            <div>                    
                <label htmlFor="">
                    {splitToCapitalize(name)}: <br/>
                    <textarea name={name}              
                        value={value} 
                        onChange={onChangeCb}
                        placeholder={placeholder}>  
                    </textarea> 
                </label>
            </div>            
        :
            <div>
                <FormGroup bsSize="small">
                <ControlLabel>{splitToCapitalize(name)}</ControlLabel>
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