import React from 'react';
import ServiceItem from './ServiceItem';
import {BsLightbulb} from 'react-icons/bs'

function Services() {
    return (
        <div className='grid grid-cols-3 '>
            <ServiceItem icon={<BsLightbulb color='#fff' fontSize={25} className='p-6'/>} text={'There are many variations of passages of Lorem Ipsum available'} title={'Development'}/>
            <ServiceItem icon={<BsLightbulb color='#fff' fontSize={25} className='p-6'/>} text={'There are many variations of passages of Lorem Ipsum available'} title={'Development'}/>
            <ServiceItem icon={<BsLightbulb color='#fff' fontSize={25} className='p-6'/>} text={'There are many variations of passages of Lorem Ipsum available'} title={'Development'}/>
            <ServiceItem icon={<BsLightbulb color='#fff' fontSize={25} className='p-6'/>} text={'There are many variations of passages of Lorem Ipsum available'} title={'Development'}/>
            <ServiceItem icon={<BsLightbulb color='#fff' fontSize={25} className='p-6'/>} text={'There are many variations of passages of Lorem Ipsum available'} title={'Development'}/>
            <ServiceItem icon={<BsLightbulb color='#fff' fontSize={25} className='p-6'/>} text={'There are many variations of passages of Lorem Ipsum available'} title={'Development'}/>
        </div>
    );
}

export default Services;