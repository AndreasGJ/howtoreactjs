import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

import { getRoute } from "@/router/routes";

const MENU = [
    { route: "home", label: "Home" },
    { route: "blog", label: "Blog" },
];
/**
 * Name: Header
 */
const Header = () => {
    return (
        <Wrapper className="header px-12 flex items-center">
            <Link
                className="logo mr-12 text-xl font-bold uppercase text-blueGray-600"
                to={getRoute("home")}
            >
                howtoreactjs.com
            </Link>
            <nav className="flex items-center justify-end text-sm font-medium uppercase flex-grow">
                {MENU.map((menuItem, index) => (
                    <NavLink
                        key={menuItem.route || index}
                        to={getRoute(menuItem.route, menuItem.routeParams)}
                        exact={menuItem.exact !== false}
                        activeClassName="active text-blue-400"
                        className="py-5 px-4 hover:text-blue-900"
                    >
                        {menuItem.label}
                    </NavLink>
                ))}
            </nav>
        </Wrapper>
    );
};

export default React.memo(Header);

const Wrapper = styled.header``;
