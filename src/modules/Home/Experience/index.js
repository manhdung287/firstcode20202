import Title from 'lib/Title';
import React from 'react';

const ExData = [
    { time: '2019 - Present', title: 'Academic Degree ', text: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto. ' },
    { time: '2019 - Present', title: 'Academic Degree ', text: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto. ' },
    { time: '2017 - 2013', title: 'Bachelors Degree ', text: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto. ' },
    { time: '2019 - Present', title: 'Academic Degree ', text: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto. ' },
    { time: '2019 - Present', title: 'Academic Degree ', text: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto. ' },
    { time: '2019 - Present', title: 'Academic Degree ', text: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto. ' },
]

function Experience() {

    return (
        <div className='px-8 md:px-0 py-28 container'   >
            <Title text={'EXPERIENCE'} />
            <div className=' md:grid grid-cols-2'>
                {ExData.map((item, index) =>
                    <ExperienceItem key={index} data={item} />
                )}
            </div>
        </div>
    );
}
function ExperienceItem({ data }) {
    const { time, title, text } = data
    return (
        <div className=' relative '>
            <span className='w-2 h-2 bg-purple-base block absolute top-0 left-0 z-10'></span>
            <div className='pl-12 pb-24 ml-1 border-l border-gray-700 border-solid'>
                <p className='text-gray-600 text-sm'>{time}</p>
                <p className='text-lg my-5 font-bold'>{title}</p>
                <p className='text-sm text-gray-600'>{text}</p>
            </div>
        </div>
    );
}
export default Experience;