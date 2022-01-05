import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SetOpenMenu } from 'src/ultils/actions';
import Menu from './Menu';
import Social from './Social';
import UserInfor from './UserInfor';

function SideBar() {
    const dispatch =useDispatch();

    const { openmenu } = useSelector(s => s);
    
    const onOpenMenu =()=>{
        dispatch(SetOpenMenu(!openmenu))
    };
    const _openMenu = openmenu ? 'open' : '';

    return (
        <>
            <div className={'sidebar p-12  flex flex-col justify-between border-r border-solid border-gray-700 ' + _openMenu}>
                <div>
                    <UserInfor classText={'text-2xl'} />
                    <Menu />
                </div>
                <Social />
            </div>
            <div className={'overlay '+_openMenu} onClick={onOpenMenu} />
        </>
    );
}

export default SideBar;