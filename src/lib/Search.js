import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';
import {BsSearch} from 'react-icons/bs';

function Search({ data }) {
    const initalValue = { nameS: '' };
    const { nameS } = initalValue
    const [search, setSearch] = useState(nameS);

    const onSearch = (e) => {
        const { name, value } = e.target;
        setSearch(value)
    };

    return (
        <div className='search ml-4 '>
            <BsSearch fontSize={15} color='#565656' className='absolute top-1/2 -translate-y-1/2 left-4'/>
            <Input
                onChange={onSearch}
                name='nameNFT'
                value={search}
                placeholder='name,type,...'
                className='input-search' />
        </div>
    );
}

export default Search;