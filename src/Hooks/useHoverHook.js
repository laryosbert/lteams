import { useState, useEffect } from 'react';

const useHoverHook = (ref) => {
    const [hover, setHover] = useState(false);


    const handleMouseover = (e) => {
        e.stopPropagation();
        setHover(true);
    }

    const handleMouseout = (e) => {
        e.stopPropagation();
        setHover(false);
    }

    useEffect(() => {         
        ref.current.addEventListener("mouseover", handleMouseover);
        ref.current.addEventListener("mouseout", handleMouseout);
        return () => {            
            ref.current && ref.current.removeEventListener("mouseover", handleMouseover);
            ref.current && ref.current.removeEventListener("mouseout", handleMouseout);
        }
    }, [ref]);

    return {
        hover
    }
}

export default useHoverHook;