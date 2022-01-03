import Title from 'lib/Title';
import React, { useRef } from 'react';

function Skills() {

    
    return (
        <div className=' py-28 container'   >
            <Title text={'Skills'} />
            <div className='my-20 grid grid-cols-2 gap-10'>
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
                <p>{title}</p>
                <p>{ratio}%</p>
            </div>
            <div className="meter">
                <span style={{ width: `${ratio}%` }}><span className="progress"></span></span>
            </div>
        </div>

    );
}

export default Skills;