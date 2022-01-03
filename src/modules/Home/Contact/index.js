import Button from 'lib/Button';
import Input from 'lib/Input';
import React, { useState } from 'react';
import valid from 'src/ultils/valid';

function Contact() {
    const initalData = { name: '', email: '', subject: '', message: '' };
    const [data, setData] = useState(initalData);
    const [showError,setShowError] = useState();
    const onSubmit = (data) => {
        const { email } = data;
        const validData = valid(email);
        if(!validData) setShowError('Email Sai');
    }
    const onChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }
    const { name, email, subject, message } = data;

    return (
        <div className=' p-10 pt-20 '>
            <Input
                name='name'
                value={name}
                onChange={onChange}
                placeholder='name'
                className={'text-black'}
            />
            {showError ?   <p>showError</p>:null}
            <Input
                name='email'
                value={email}
                onChange={onChange}
                placeholder='email'
                className={'text-black'}
            />
            <Input
                name='subject'
                value={subject}
                onChange={onChange}
                placeholder='subject'
                className={'text-black'}
            />
            <Input
                name='message'
                value={message}
                onChange={onChange}
                placeholder='message'
                className={'text-black'}
            />
            <Button onClick={() => onSubmit(data)} text={'Submit'} />
        </div>
    );
}

export default Contact;