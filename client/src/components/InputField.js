import React from 'react';

export default ({ value, name, type, onChangeCb }) => {
    return (
        type === 'textarea' ?
            <div>                    
                <label htmlFor="">
                    {splitToCapitalize(name)}: <br/>
                    <textarea name={name}              
                        value={value} 
                        onChange={onChangeCb}>  
                    </textarea> 
                </label>
            </div>            
        :
            <div>
                <label htmlFor="">
                    {splitToCapitalize(name)}: <br/>
                    <input type={type} 
                    name={name}
                    value={value} 
                    onChange={onChangeCb} />
                </label>
            </div>
    )
}

const splitToCapitalize = (name) => {    
    return name.split(/(?=[A-Z])/)
        .map(name => name.charAt(0).toUpperCase() + name.slice(1))
        .join(' ')
}