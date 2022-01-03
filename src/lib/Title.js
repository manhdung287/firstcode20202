import React from 'react';

function Title({text,className}) {
    return (
        <p className={'text-3xl extrabold uppercase '+ className}>
            {text}
        </p>
    );
}

export default Title;