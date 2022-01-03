import React from 'react';

function Menu({}) {
    return (
        <div className='mt-11 text-white flex flex-col'>
            <MenuItem  text={'Home'} to={'/'}/>
            <MenuItem  text={'Services'} to={'#services'}/>
            <MenuItem  text={'experience'} to={'#experience'}/>
            <MenuItem  text={'Works'} to={'#works'}/>
            <MenuItem  text={'Testimonials'} to={'#testimonials'}/>
            <MenuItem  text={'Blog'} to={'#blog'}/>
            <MenuItem  text={'Contact'} to={'#contact'}/>
        </div>
    );
}

function MenuItem({text,to}){
    return(
        <a href={to} className='uppercase text-sm extrabold menu-item '>
            {text}
        </a>
    );
}
export default Menu;