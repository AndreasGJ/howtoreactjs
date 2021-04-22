import useSWR from "swr";

import ax from "@/api";

const fetcher = (url) =>
    ax.get(url, { noErrors: true }).then((res) => res.data);

const useRequest = (keys, configs) => {
    return useSWR(keys, fetcher, {
        revalidateOnFocus: false,
        refreshWhenHidden: false,
        shouldRetryOnError: false,
        errorRetryCount: 3,
        ...configs,
    });
};

export const INIT_CONFIG = {
    fetcher,
};

export default useRequest;
