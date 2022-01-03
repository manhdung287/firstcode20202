import React from 'react';
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineDribbble } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

function Social() {
    return (
        <div>
            <div className='mb-5 flex justify-between w-32'>
                <SocialIcon icon={<AiOutlineTwitter fontSize={19}/>} link={'/'} />
                <SocialIcon icon={<FaFacebookF  fontSize={17} />} link={'https://www.facebook.com/'} />
                <SocialIcon icon={<AiOutlineInstagram  fontSize={19}/>} link={'https://www.instagram.com/'} />
                <SocialIcon icon={<AiOutlineDribbble  fontSize={19}/>} link={'https://dribbble.com/'} />
            </div>
            <span className='text-gray-500 copyringht'>
                © 2022 MD.
            </span>
        </div>
    );
}

function SocialIcon({ icon, link }) {
    return (
        <a href={link} target="_blank" rel="noreferrer" className='text-white'>
            {icon}
        </a>
    );
}

export default Social;