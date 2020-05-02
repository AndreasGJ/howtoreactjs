import ax from "@/api";

export default {
    getPage: slug => ax.get("/page", { params: { slug } })
};
