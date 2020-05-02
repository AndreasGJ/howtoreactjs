import React from "react";

import NotFound from "@/views/NotFound";
import LoadingView from "@/views/LoadingView";

const NotReadyContent = ({ item }) => {
    if (item === false) {
        return <NotFound />;
    }

    return <LoadingView />;
};

export default NotReadyContent;
