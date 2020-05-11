import ax from "@/api";

import profileApi from "@/api/profile";
import { setCookie } from "@/helpers";
import store from "@admin/store/configure";
import config from "@/configs";

export default {
    login: (email, password) => {
        return new Promise((resolve, reject) => {
            ax.post("auth/login", { email, password })
                .then(({ data: { data = {} } = {} }) => {
                    setCookie(config("basic.cookie_auth"), data.token);

                    profileApi
                        .getMe()
                        .then(resolve)
                        .catch(reject);
                })
                .catch(reject);
        });
    }
};
