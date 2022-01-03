
import Button from 'lib/Button';
import React, { useEffect, useState } from 'react';
import Contact from './Contact';

import Header from './Header';
import Services from './Service';
import SideBar from './SideBar';
import Skills from './Skills';
import Timer from './Timmer';
import WellCome from './Wellcome';


function Home() {

    return (
        <div className={'home pt-14  text-white'}>
            <div />
            <div className='border-l border-gray-700 border-solid'>
                <WellCome />
                <Services />
                <Skills/>
                <Timer/>
                <WellCome />
            </div>
        </div>
    );
}

export default Home;

