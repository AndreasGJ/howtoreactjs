import { useState, useCallback } from "react";

const useInputs = (defaultInputs = {}) => {
    const [inputs = {}, setInputs] = useState(defaultInputs);
    const handleChange = useCallback(
        (key, value = false) => {
            if (typeof key === "object") {
                return setInputs({ ...inputs, ...key });
            }
            return setInputs({ ...inputs, [key]: value });
        },
        [inputs, setInputs]
    );
    return [inputs, handleChange];
};

export default useInputs;
