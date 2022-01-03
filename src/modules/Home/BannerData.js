import React from 'react';
import { BiCoinStack } from 'react-icons/bi';
import { useSelector } from 'react-redux';

function BannerData({ data }) {
    const {darkmode} = useSelector(state => state);

    if(!data) return null
    const { image_url, name, id, traits } = data;
    const _classDarkMode = !darkmode ? ' text-black ': ' ';
    return (
        <div className='text-white grid grid-cols-2 mb-10'>
            <img src={image_url} alt='' className='w-full rounded-2xl'/>
            <div className={'p-3 pl-10 '+_classDarkMode }>
                <p className='text-6xl py-2 font-bold'>
                    {name}
                </p>
                <p className='text-4xl'> .#{id}</p>
                <div className='flex items-center'>
                    <BiCoinStack color='#eecb07' fontSize={20} className='mr-3'/> <span className='text-3xl'> {traits[0]?.value}</span>
                </div>
            </div>
        </div>
    );
}

export default BannerData;