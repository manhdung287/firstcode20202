import React from 'react';

function Skills() {
    return (
        <div className='mb-20'>
            <SkillItem />
            <div className="meter">
                <span style={{width:'80%' }}><span className="progress"></span></span>
            </div>
        </div>
    );
}

function SkillItem({ title, ratio }) {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <p>{title}</p>
                <p>{ratio}</p>
            </div>
            <div className='relative'>
                <div className='absolute' />
            </div>
        </div>

    );
}

export default Skills;