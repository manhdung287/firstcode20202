import React from 'react';
import Menu from './Menu';
import Social from './Social';
import UserInfor from './UserInfor';

function SideBar({ }) {
    return (
        <div className='sidebar p-12  flex flex-col justify-between'>
            <div>
                <UserInfor />
                <Menu />
            </div>
            <Social />
        </div>
    );
}

export default SideBar;