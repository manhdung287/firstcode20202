import React from 'react';

function Button({className, onClick, icons, text}){
  return (
    <button className={' button ' + className} onClick={onClick}>
      {text && <span className='text-btn'>{text}</span>}
      {icons}
    </button>
  );
}
export default Button;

export function ButtonBase({ className, onClick, icons, text }) {
  return (
    <button className={'buttonbase ' + className} onClick={onClick}>
      {text && <span className='text-btn'>{text}</span>}
      {icons}
    </button>
  );
}

