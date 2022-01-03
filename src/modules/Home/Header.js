import Logo from 'lib/Logo';
import Search from 'lib/Search';
import React, { useState } from 'react';
import User from './User';
import { FaSun } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { SetDarkmode } from 'src/ultils/actions';


function Header({ onChangeMode }) {

    const {darkmode} = useSelector(state => state);
    const dispatch = useDispatch();

    const onSetDarkmode =()=>{
        dispatch(SetDarkmode(!darkmode))
    }
    const _classDarkmode = darkmode ? " text-white":" text-black";
    return (
            <div className=''>
                <div className='flex py-5 justify-between pl-5 items-center'>
                    <Logo darkmode={darkmode}/>
                    <Search />
                    <div className={_classDarkmode}>
                        <span className='p-3'>Drop</span>
                        <span className='p-3'>Market</span>
                        <span className='p-3'>Create</span>
                    </div>
                    <div className='flex items-center justify-center p-4 rounded-full bg-gray-800' onClick={onSetDarkmode}>
                        <FaSun color='#fff' fontSize={20} onClick={onChangeMode} className='hover:cursor-pointer ' />
                    </div>
                    <User />
                </div>
            </div>
    );
}

export default Header;