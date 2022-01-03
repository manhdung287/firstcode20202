import React from 'react';

function ServiceItem({ icon, title, text }) {
    return (
        <div>
            <div className=' '>
                {icon}
            </div>
            <p className='mb-4 mt-4 text-lg font-bold'>{title}</p>
            <p className='text-gray-base'>{text}</p>
        </div>
    );
}

export default ServiceItem;