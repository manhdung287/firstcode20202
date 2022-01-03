import React, { useState } from 'react';
import Highlightable from 'react-highlight';
function Detail() {
    const [ranges, setRanges] = useState();
    const onTextHighlightedCallback = () => {

    }
    const onMouseOverHighlightedWordCallback = () => {

    };
    return (
        <div className='h-96'>
            <div className='p-5 mt-10'>
                <Highlightable ranges={ranges}
                    enabled={true}
                    onTextHighlighted={onTextHighlightedCallback}
                    onMouseOverHighlightedWord={onMouseOverHighlightedWordCallback}
                    highlightStyle={{
                        backgroundColor: '#ffcc80'
                    }}
                    text={"Lorem ipsum is a pseudo-Latin text used in web design,  "}
                />
            </div>
        </div>
    );
}



export default Detail;