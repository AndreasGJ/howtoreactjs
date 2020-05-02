import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import routes from "./routes";

export const Router = ({ children }) => {
    return <BrowserRouter>{children}</BrowserRouter>;
};

export const RouterSwitch = () => {
    return (
        <Switch>
            {routes.map((route, index) => {
                return (
                    <Route
                        key={route.id || index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                );
            })}
        </Switch>
    );
};
