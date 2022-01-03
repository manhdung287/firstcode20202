import Logo from 'lib/Logo';
import Search from 'lib/Search';
import React, { useState } from 'react';
import { FaSun } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { SetDarkmode } from 'src/ultils/actions';
import Button, { ButtonBase } from 'lib/Button';


function Header({ onChangeMode }) {

    const { darkmode } = useSelector(state => state);
    const dispatch = useDispatch();

    const onSetDarkmode = () => {
        dispatch(SetDarkmode(!darkmode))
    }

    return (
        <div className='flex py-3 justify-between px-5 items-center bg-gray-header fixed top-0 left-0 w-screen z-50'>
            <Logo darkmode={darkmode} />
            <ButtonBase text='Buy now' className='btn-buy border-0 text-sm text-white' />
        </div>
    );
}

export default Header;