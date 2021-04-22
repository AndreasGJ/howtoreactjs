import axios from "axios";

// Method to retrieve token.
const getToken = () => false;

// Method which will be executed on all requests when success message is returned.
const showRequestSuccessMessage = () => {};

// Method which will be executed on all requests when error message is returned.
const showRequestErrorMessage = () => {};

// Default headers.
const defaultHeaders = {
    "Content-Type": "application/json;charset=utf-8",
    "X-Requested-With": "XMLHttpRequest",
    Accept: "application/json",
};

axios.defaults.headers.common = {
    ...axios.defaults.headers.common,
    ...defaultHeaders,
};
axios.defaults.timeout = 0;

// Set base path or url.
axios.defaults.baseURL = "/api";

axios.interceptors.request.use((request) => {
    const token = getToken();

    // If the user is logged in then add the auth header with token.
    if (token && request.isThirdParty !== true) {
        request.headers.Authorization = `Bearer ${token}`;
    }

    return request;
});

axios.interceptors.response.use(
    (response) => {
        if (
            response.data &&
            response.data.message &&
            !response.config.noMessage
        ) {
            showRequestSuccessMessage(response.data.message);
        }

        return response;
    },
    (error) => {
        if (error.response && error.response.data && !error.config.noErrors) {
            showRequestErrorMessage(error.response.data);
        }

        return Promise.reject(error);
    }
);

export const getCancelToken = () => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    return source;
};

export default axios;
