import React from 'react';

function ServiceItem({ icon, title, text }) {
    return (
        <div className='py-6'>
            <div className='inline-block p-4 bg-purple-base'>
                {icon}
            </div>
            <p className='mb-4 mt-4 text-lg font-bold'>{title}</p>
            <p className='text-gray-base leading-6'>{text}</p>
        </div>
    );
}

export default ServiceItem;