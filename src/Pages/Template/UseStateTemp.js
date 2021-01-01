import { useState } from 'react';

export const UseStateTemp = () => {
    const [count, setCount] = useState(0);
    const [tval, setTval] = useState(0);
    console.log("InRender-count:" + count);
    console.log("InRender-tval:" + tval);
    //输出结果
    //InRender:0
    //SyncSetValue:0
    //SyncClickEnd:0
    //SyncSetFunc:1
    //InRender:2
    let handleClick = () => {

        setCount(1);
        console.log("SyncSetValue:" + count);

        setCount(count => {
            console.log("SyncSetFunc:" + count);
            return count + 1;
        });
        console.log("SyncClickEnd:" + count);
    }

    let handleClickTwo = () => {

        setTval(1);
        console.log("SyncSetTval:" + tval);
        setCount(1);
        console.log("SyncSetcount:" + count);
        setTval(value => value + 1);
        console.log("SyncSetTvalFunc:" + tval);
        console.log("SyncClickTvalEnd:" + tval);
    }

    //输出结果
    //InRender:0
    //InRender:1
    //AsyncSetValue:0
    //AsyncSetFunc:1
    //InRender:2
    //AsyncClickEnd:0
    let handleTimerClick = () => {
        setTimeout(() => {
            setCount(1);
            console.log("AsyncSetValue:" + count);

            setCount(count => {
                console.log("AsyncSetFunc:" + count);
                return count + 1;
            });
            console.log("AsyncClickEnd:" + count);
        }, 1000);
    }

    return (<div>
        <p>Count: {count}</p>
        <button onClick={handleClick}>Click Test</button>
        <button onClick={handleTimerClick}>Click Timer</button>
        <button onClick={handleClickTwo}>Click Test Two</button>
    </div>
    );
}