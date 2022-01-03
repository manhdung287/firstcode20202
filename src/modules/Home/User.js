import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillCaretRight } from 'react-icons/ai'
import { ROUTER } from 'src/ultils/Router';

function User({ }) {
    const [open, onOpen] = useState(false);

    const openMenu = () => {
        onOpen(!open);
    };
    const _classMenu = open ? ' translate-x-0' : ' translate-x-full';
    const _classIcon = open ?' rotate-90': ' rotate-0'
    return (
        <div className='relative pr-4'>
            <div className='flex items-center hover:cursor-pointer' onClick={openMenu}>
                <Image alt='avatar' width={40} height={40} src='/avatar.jpg' className='rounded-full ' />
                <AiFillCaretRight color='#fff' fontSize={20} className={'ml-2 duration-300 ease-in-out' + _classIcon} />
            </div>
            <div className={'absolute top-full right-0 z-10 ease-in-out duration-300 bg-white' + _classMenu}>
            <div className={' flex flex-col'}>
                <span>Hello: Custommer</span>
                <span className='text-black p-4' ><Link href={ROUTER.home} >Profile </Link></span>
                <span className='text-black p-4' > <Link href={ROUTER.home} > Logout </Link></span>
            </div>
            </div>
            
        </div>  
    );
}

export default User;