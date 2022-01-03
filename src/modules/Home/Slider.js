/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Glider from "react-glider";

const imgs = [
    { src: 'https://cdn.pixco.vn/data/2021/9/18/f5tp2aag.jpeg' },
    { src: 'https://cdn.pixco.vn/data/2021/9/18/o2esiku4.jpeg' },
    { src: 'https://cdn.pixco.vn/data/2021/9/18/f5tp2aag.jpeg' },
    { src: 'https://cdn.pixco.vn/data/2021/9/18/o2esiku4.jpeg' },
    { src: 'https://cdn.pixco.vn/data/2021/9/18/f5tp2aag.jpeg' },
]

function Slider(props) {

    return (
        <div>
            <Glider slidesToShow={1} hasArrows  
            scrollLock hasDots draggable rewind={true} >
                {imgs.map((item, index) =>
                    <img key={index} alt='' src={item.src} />
                )}
            </Glider>
        </div>
    );
}

export default Slider;