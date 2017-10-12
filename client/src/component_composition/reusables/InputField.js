import React from 'react';

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
                <label htmlFor="">
                    {splitToCapitalize(name)}: <br/>
                    <input type={type}
                    placeholder={placeholder} 
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