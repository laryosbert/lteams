import { useState, useRef, useEffect } from 'react';
import * as _ from 'lodash';

export const UseRefTemp = (props) => {
    const [password, setPassword] = useState(() => {
        const pwdArray = new Array(props.length || 6);
        _.fill(pwdArray, "");
        return pwdArray;
    });
    const pwdRef = useRef(null);
    const [focusIndex, setFocusIndex] = useState(0);

    const submitForm = () => {
        console.log(password);
    }

    const handleInput = (event, index, value) => {
        password.splice(index, 1, event.target.value);        
        setPassword([...password]);       
        if (index == 5) {
            submitForm();
        }
        else {
            setFocusIndex(index + 1);
        }
    }

    useEffect(() => {
        pwdRef && pwdRef.current.focus();
    }, [focusIndex]);
 
    return (
        <div>
            <span>Input Password:</span>
            {                
                password.map((value, index) => {
                    return <input type="password" key={index} maxLength={1}
                        onInput={(event) => handleInput(event, index, value)}
                        value={value}
                        ref={focusIndex === index ? pwdRef : null}
                    ></input>
                })
            }
        </div>
    );
}