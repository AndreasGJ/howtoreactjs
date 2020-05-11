import React from "react";
import styled from "styled-components";
import { Provider, useSelector } from "react-redux";

import store from "@admin/store/configure";
import Header from "@admin/components/Header";
import Footer from "@admin/components/Footer";
import { useMount } from "@/hooks/lifecycle";
import { Router, RouterSwitch } from "@admin/router";
import profileApi from "@/api/profile";

const MainContent = () => {
    const { loggedIn, hasToken } = useSelector(
        ({ profile: { data = null, hasToken = false } = {} }) => ({
            loggedIn: data ? true : false,
            hasToken
        })
    );
    useMount(() => {
        if (hasToken && !loggedIn) {
            profileApi.getMe();
        }
    });

    return (
        <Wrapper className="app__inner">
            {loggedIn && <Header />}
            <div className="app__content">
                <RouterSwitch loggedIn={loggedIn} hasToken={hasToken} />
            </div>
            {loggedIn && <Footer />}
        </Wrapper>
    );
};
const Main = () => {
    return (
        <Provider store={store}>
            <Router>
                <MainContent />
            </Router>
        </Provider>
    );
};

export default Main;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    min-height: 100%;

    .app__content {
        flex-grow: 1;
    }
`;
