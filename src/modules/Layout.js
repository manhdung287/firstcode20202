import React from 'react';
import Header from './Home/Header';
import SideBar from './Home/SideBar';

function Layout({ children }) {
    return (
        <div className='bg-black overflow-hidden'>
            <Header />
            <SideBar/>
            {children}
        </div>
    );
}

export default Layout;