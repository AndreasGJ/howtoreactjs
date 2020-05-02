import axios from "axios";

import { getErrorMessages } from "@/helpers/api";
import { getCookie } from "@/helpers";
import config from "@/configs";

const defaultHeaders = {
    "Content-Type": "application/json;charset=utf-8",
    "X-Requested-With": "XMLHttpRequest",
    Accept: "application/json"
};

axios.defaults.headers.common = {
    ...axios.defaults.headers.common,
    ...defaultHeaders
};
axios.defaults.baseURL = "/api";

axios.interceptors.request.use(request => {
    const token = getCookie(config("basic.cookie_auth"));

    // If the user is logged in then add the auth header with token.
    if (token) {
        request.headers.Authorization = `Bearer ${token}`;
    }

    return request;
});

axios.interceptors.response.use(
    response => {
        if (
            response.data &&
            response.data.message &&
            !response.config.noMessage
        ) {
            console.log("response.data.message", response.data.message);
        }

        return response;
    },
    error => {
        if (
            error.response &&
            error.response.data &&
            !error.config.noErrors &&
            (error.response.data.message || error.response.data.errors)
        ) {
            const errorMessage = getErrorMessages(error.response.data);

            console.log("error", errorMessage);
        }
    }
);

export const useCancel = () => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    return source;
};

export default axios;
