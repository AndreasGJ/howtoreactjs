import ax from "@/api";

export default {
    getPosts: (params = {}) => ax.get("/posts", { params }),
};
