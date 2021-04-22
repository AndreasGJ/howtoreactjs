import Home from "@/views/Home";
import Blog from "@/views/Blog";
import Post from "@/views/Post";

const routes = [
    { name: "home", path: "/", component: Home },
    { name: "blog", path: "/blog", component: Blog },
    { name: "post", path: "/blog/:post", component: Post },
];

export const getRoute = (key, params = null) => {
    const route = routes.find((route) => route.name === key);

    if (!route?.path) {
        console.log("GET ROUTE NOT FOUND:", { key, params });
        return null;
    }

    let path = route.path;

    if (params) {
        Object.keys(params).forEach((key) => {
            path = path.replace(`:${key}`, params[key]);
        });
    }

    return path;
};
export default routes;
