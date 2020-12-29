import { useState, useEffect, useCallback } from 'react';
import * as _ from 'lodash';

export const ThrottleHook = () => {
    const [winSize, setWinSize] = useState({ width: 0, height: 0 });

    const setSizeThrottle = useCallback(
        _.throttle(() => {
            setWinSize({
                width: document.documentElement.clientHeight,
                height: document.documentElement.clientWidth
            });
        }, 1000, { leading: false })
        , [])

    useEffect(() => {
        window.addEventListener("resize", setSizeThrottle);
        return () => {
            window.removeEventListener("resize", setSizeThrottle);
        }
    }, [])

    console.log(winSize)

    return <span>wdith:{winSize.width};height:{winSize.height};</span>
}