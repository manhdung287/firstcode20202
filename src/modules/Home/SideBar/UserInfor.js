import React from 'react';

function UserInfor({className, classImg,classText}) {
    return (
        <div className={className}>
            <img src='logo.png' alt='' width={120} height={120} className={'rounded-full  '+ classImg}/>
            <span className={'uppercase  text-white extrabold mb-3 mt-5 block '+ classText}>NM dung</span>
        </div>
    );
}

export default UserInfor;