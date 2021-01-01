import { useState, useEffect } from 'react';

export const UseEffectTemp = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Only for mount`);
    },[]);

    useEffect(() => {
        console.log(`Clicked ${count} times`);
    });

    return (<div>
        <p>You clicked {count} times</p>
        <button onClick={() => { setCount(count + 1) }}>Click To Add</button>
    </div>
    );

}