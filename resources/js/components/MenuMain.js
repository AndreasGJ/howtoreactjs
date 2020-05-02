import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const menuItems = [
    { path: "/", label: "Home" },
    { path: "/blog", label: "Blog" },
    { path: "/get-started", label: "Get Started" },
    { path: "/blog/newest-post", label: "Newest post" }
];
const MenuMain = () => {
    return (
        <Wrapper>
            <ul className="menu">
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <NavLink to={item.path}>{item.label}</NavLink>
                    </li>
                ))}
            </ul>
        </Wrapper>
    );
};

export default MenuMain;

const Wrapper = styled.div`
    .menu {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .menu li a {
        display: block;
        padding: 10px 30px;
        margin-right: 30px;
        color: #333;
        font-weight: bold;
        text-decoration: none;
        cursor: pointer;
        border-bottom: 3px solid transparent;

        &:hover {
            color: #666;
        }
        &.active {
            border-color: #cccccc;
        }
    }
`;
