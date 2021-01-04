import { useState } from 'react';

const useInputHook = (initValue) => {
    const [value, setValue] = useState(initValue);
    const onChange = (event) => {
        setValue(event.target.value);
    }

    return {
        value,
        onChange
    }
}

export default useInputHook;