import ax from "@/api";
import store from "@admin/store/configure";

export default {
    getMe: () => {
        return new Promise((resolve, reject) => {
            ax.get("/auth/me")
                .then(({ data: { data = {} } = {} }) => {
                    store.dispatch({
                        type: "profile/loggedin",
                        payload: { profile: data }
                    });

                    resolve(data);
                })
                .catch(error => {
                    store.dispatch({
                        type: "profile/logout"
                    });

                    reject(error);
                });
        });
    }
};
