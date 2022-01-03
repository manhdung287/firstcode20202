import React, { useState } from 'react';
import Highlightable from 'react-highlight';
function Detail() {
    const [ranges, setRanges] = useState();
    const onTextHighlightedCallback = () => {

    }
    const onMouseOverHighlightedWordCallback = () => {

    };
    return (
        <div className='h-96 pt-16'>
            <div className='p-5 mt-10 ml-60'>
                <div>
                    <a href='#' className='btn btn-default btn-animation text-white relative block w-40 p-5'>
                    <span> Text test Hover</span>
                       
                    </a>
                </div>
            </div>
        </div>
    );
}



export default Detail;