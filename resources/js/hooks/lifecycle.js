import { useEffect } from "react";

export const useMount = callback => {
    return useEffect(callback, []);
};

export const useUnmount = callback => {
    return useMount(() => {
        return callback;
    });
};
