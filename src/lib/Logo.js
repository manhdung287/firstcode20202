import React from 'react';
import { ROUTER } from 'src/ultils/Router';

function Logo({darkmode}) {
    const _classDarkMode = darkmode ? ' ': ' bg-gray-800 rounded-2xl px-3';
    return (
        <a href={ROUTER.home}  >
            <img alt='logo' src='fixlogo.png' width={200} height={40} className={'logo '+ _classDarkMode} />
        </a>

    );
}

export default Logo;