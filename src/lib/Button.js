import React from 'react';

function Button({className, onClick, icons, text ,bgAnimation,color}){
  return (
    <button className={' button relative ' + className} onClick={onClick}>
      <span className={'animation-btn ' + bgAnimation}/>
      {text && <span className='text-btn'>{text}</span>}
      {icons}
    </button>
  );
}
export default Button;

export function ButtonBase({ className, onClick, icons, text }) {
  return (
    <button className={'buttonbase  ' + className} onClick={onClick}>
      {text && <span className='text-btn'>{text}</span>}
      {icons}
    </button>
  );
}

