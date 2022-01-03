import React, { useEffect, useState } from 'react';

function Menu({ }) {

    const [active, setActive] = useState(0);

    return (
        <div className='mt-11 text-white flex flex-col'>
            <MenuItem text={'Home'} to={'/'} className={active === 0 ? 'active ' : ' '} onClick={()=>setActive(0)} />
            <MenuItem text={'Services'} to={'#services'} className={active === 1 ? 'active ' : ' '} onClick={()=>setActive(1)} />
            <MenuItem text={'experience'} to={'#experience'} className={active === 2 ? 'active ' : ' '} onClick={()=>setActive(2)} />
            <MenuItem text={'Works'} to={'#works'} className={active === 3 ? 'active ' : ' '} onClick={()=>setActive(3)} />
            <MenuItem text={'Testimonials'} to={'#testimonials'} className={active === 4 ? 'active ' : ' '} onClick={()=>setActive(4)} />
            <MenuItem text={'Blog'} to={'#blog'} className={active === 5 ? 'active ' : ' '} onClick={()=>setActive(5)}  />
            <MenuItem text={'Contact'} to={'#contact'} className={active === 6 ? 'active ' : ' '} onClick={()=>setActive(6)} />
        </div>
    );
}

function MenuItem({ text, to, className, onClick }) {
    return (
        <a href={to} className={'uppercase text-sm extrabold menu-item overflow-hidden '  } onClick={onClick}>
            <span className={' relative menu-item '+ className}>
                {text}
                <span className='w-full absolute h-1 top-full left-0 z-10 bg-purple-base' />
            </span>
        </a>
    );
}
export default Menu;