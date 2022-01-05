import React, { useEffect, useState } from 'react';
import Experience from './Experience';
import {HiMenuAlt2} from 'react-icons/hi';
import Services from './Service';
import Skills from './Skills';
import WellCome from './Wellcome';
import UserInfor from './SideBar/UserInfor';
import { useDispatch, useSelector } from 'react-redux';
import { SetOpenMenu } from 'src/ultils/actions';

function Home() {
    const dispatch =useDispatch();
    const {openmenu} = useSelector(s=>s);

    const onOpenMenu =()=>{
        dispatch(SetOpenMenu(!openmenu))
    };
    const _openMenu = openmenu ? 'open': '';

    return (
        <div className={'home pt-14  text-white ' + _openMenu }>
            <div />
            <div  >
                <HeaderMobile onOpenMenu={onOpenMenu}/>
                <WellCome />
                <Services />
                <Skills/>
                <Experience/>
            </div>
        </div>
    );
}

function HeaderMobile({onOpenMenu}){
    return(
        <div className='flex items-center md:hidden px-4 py-2 border-b border-solid border-gray-700'>
            <HiMenuAlt2 color='#fff' fontSize={40} onClick={onOpenMenu} className='hover:cursor-pointer'/>
            <UserInfor classText={'text-xl ml-3'} classImg={'w-12 h-12 '} className={'flex items-center ml-3'}/>
        </div>
    );
}

export default Home;

