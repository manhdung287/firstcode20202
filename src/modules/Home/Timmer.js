import React, { useEffect, useState } from 'react';

function Timmer(props) {
    const [timer, setCounter] = useState(0);

    useEffect(() => {
        const TimerInt = timer < 60 && setInterval(() => {
            setCounter((time) => time + 5);
        }, 500);
        return () => {
            clearInterval(TimerInt)
        }
    }, [timer]);

    return (
        <div className='p-4'>
            {timer}
        </div>
    );
}

export default Timmer;