import React from 'react';

function Loading() {
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 w-screen h-screen z-50 bg-gray-700 bg-opacity-70'>
      <div className="middle">
        <div className="bar bar1"></div>
        <div className="bar bar2"></div>
        <div className="bar bar3"></div>
        <div className="bar bar4"></div>
        <div className="bar bar5"></div>
        <div className="bar bar6"></div>
        <div className="bar bar7"></div>
        <div className="bar bar8"></div>
      </div>
    </div>

  );
}

export default Loading;