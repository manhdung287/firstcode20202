import React from 'react';
import { ROUTER } from 'src/ultils/Router';

function Logo( ) {
 
    return (
        <a href={ROUTER.home} >
            <img alt='logo' src='logo.svg' width={152} height={18} className={'logo '} />
        </a>

    );
}

export default Logo;