import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BiCoinStack } from 'react-icons/bi';
import Slider from "react-slick";

function CollectionCard({ onShowData, data }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2
      };

    if (!data) return null;

    return (
        <Slider
          {...settings}
        >
            {data.map((item) =>
                <CollecttionItem data={item} key={item.id} onSet={onShowData} />
            )}
        </Slider>
    );
}

function CollecttionItem({ data, onSet }) {

    if (!data) return null;

    const onSetShwoData = (value) => {
        onSet(value)
    }

    const { image_url, name, id, traits } = data;
    return (
        <div className='card-item  text-white m-3 rounded-xl overflow-hidden hover:cursor-pointer' onClick={() => onSetShwoData(data)}>
            <div className='w-full h-72' style={{ backgroundImage: `url(${image_url})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} />
            <div className='p-3'>
                <p className='text-2xl py-2 font-bold'>
                    {name}
                </p>
                <p className='text-xl'> .#{id}</p>
                <div className='flex items-center'>
                    <BiCoinStack color='#eecb07' fontSize={20} /> <span className='text-lg'> {traits[0]?.value}</span>
                </div>
            </div>
        </div>

    );
}

export default CollectionCard;