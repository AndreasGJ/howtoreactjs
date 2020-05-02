import Home from "@/views/Home";
import Page from "@/views/Page";
import Post from "@/views/Post";

const routes = [
    { path: "/", exact: true, component: Home },
    { path: "/blog/:slug", component: Post },
    { path: "/:slug", component: Page }
];

export default routes;
