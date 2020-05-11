import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "@admin/views/Login";
import Loading from "@admin/views/Loading";
import NotFound from "@admin/views/NotFound";
import { useMount } from "@/hooks/lifecycle";
import profileApi from "@/api/profile";
import routes from "./routes";

export const Router = ({ children }) => {
    return <BrowserRouter>{children}</BrowserRouter>;
};

export const RouterSwitch = ({ loggedIn, hasToken }) => {
    return (
        <Switch>
            {loggedIn &&
                routes.map((route, index) => {
                    return (
                        <Route
                            key={route.id || index}
                            path={route.path}
                            exact={route.exact}
                            component={route.component}
                        />
                    );
                })}
            {!loggedIn && hasToken && <Route component={Loading} />}
            {!loggedIn && !hasToken && <Route component={Login} />}
            <Route component={NotFound} />
        </Switch>
    );
};
