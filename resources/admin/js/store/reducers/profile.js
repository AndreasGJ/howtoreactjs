import { getCookie, setCookie } from "@/helpers";
import config from "@/configs";

const defaultState = {
    data: false,
    hasToken: getCookie(config("basic.cookie_auth")) ? true : false
};

function profile(state = defaultState, { type, payload = {} }) {
    switch (type) {
        case "profile/loggedin": {
            const { profile = {} } = payload;

            return {
                ...state,
                data: profile
            };
        }
        case "profile/logout": {
            setCookie(config("basic.cookie_auth"), "", -1);

            return {
                ...state,
                data: false,
                hasToken: false
            };
        }
        default:
            break;
    }

    return state;
}

export default profile;
