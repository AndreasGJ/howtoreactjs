import React from "react";
import styled from "styled-components";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Router, RouterSwitch } from "@/router";

const Main = () => {
    return (
        <Router>
            <Wrapper className="app__inner">
                <Header />
                <div className="app__content">
                    <RouterSwitch />
                </div>
                <Footer />
            </Wrapper>
        </Router>
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
