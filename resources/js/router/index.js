import React from "react";
import { Switch, Route } from "react-router-dom";

import routes from "@/router/routes";

const RouterViews = () => {
    return (
        <Switch>
            {routes.map(({ path, exact = true, component }, index) => (
                <Route key={path || index} {...{ exact, path, component }} />
            ))}
        </Switch>
    );
};

export default React.memo(RouterViews);
