import { useState } from "react";

const useToggle = (initialValue = true) => {
    const [value, setValue] = useState<boolean>(initialValue);

    const toggle = () => setValue((state) => !state);

    return { value, toggle };
};

export default useToggle;
