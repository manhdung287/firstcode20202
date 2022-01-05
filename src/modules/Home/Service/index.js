import React from 'react';
import ServiceItem from './ServiceItem';
import { BsLightbulb } from 'react-icons/bs'
import Title from 'lib/Title';

function Services() {
    return (
        <div className='border-t border-b border-solid border-gray-700'>
        <div className='px-8 md:px-0  py-28 container'>
            <Title text={'Services'}  />
            <div className='md:grid grid-cols-3 '>
                <ServiceItem icon={<BsLightbulb color='#fff' fontSize={30} />} text={'There are many variations of passages of Lorem Ipsum available'} title={'Development'} />
                <ServiceItem icon={<BsLightbulb color='#fff' fontSize={30} />} text={'There are many variations of passages of Lorem Ipsum available'} title={'Development'} />
                <ServiceItem icon={<BsLightbulb color='#fff' fontSize={30} />} text={'There are many variations of passages of Lorem Ipsum available'} title={'Development'} />
                <ServiceItem icon={<BsLightbulb color='#fff' fontSize={30} />} text={'There are many variations of passages of Lorem Ipsum available'} title={'Development'} />
                <ServiceItem icon={<BsLightbulb color='#fff' fontSize={30} />} text={'There are many variations of passages of Lorem Ipsum available'} title={'Development'} />
                <ServiceItem icon={<BsLightbulb color='#fff' fontSize={30} />} text={'There are many variations of passages of Lorem Ipsum available'} title={'Development'} />
            </div>
        </div>
        </div>

    );
}

export default Services;