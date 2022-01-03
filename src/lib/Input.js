import React from 'react';

function Input({ onChange,className, label, placeholder, name, value }) {
    return (
        <div className='input-wapper'>
            {label && <span>
                {label}
            </span>}
            <input
                className={'input '+ className }
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
}

export default Input;