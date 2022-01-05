import Title from 'lib/Title';
import React, { useRef } from 'react';

function Skills() {

    return (
        <div className='px-6 md:px-0 py-28 container'   >
            <Title text={'Skills'} />
            <div className='my-20 md:grid grid-cols-2 gap-10'>
                <SkillItem title={'Coding'} ratio={80} />
                <SkillItem title={'Coding'} ratio={80} />
                <SkillItem title={'Coding'} ratio={80} />
                <SkillItem title={'Coding'} ratio={80} />
            </div>
        </div>

    );
}

function SkillItem({ title, ratio }) {
    return (
        <div className='py-4'>
            <div className='flex justify-between items-center mb-4'>
                <p className='text-base'>{title}</p>
                <p className='text-gray-600 text-sm'>{ratio}%</p>
            </div>
            <div className="meter">
                <span style={{ width: `${ratio}%` }}><span className="progress"></span></span>
            </div>
        </div>

    );
}

export default Skills;