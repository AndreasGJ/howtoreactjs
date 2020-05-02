import React from "react";
import styled from "styled-components";

import NotReadyContent from "@/components/NotReadyContent";
import usePage from "@/hooks/usePage";

const Home = () => {
    const page = usePage();

    if (!page) {
        return <NotReadyContent item={page} />;
    }

    return <Wrapper>Home: {page.title}</Wrapper>;
};

export default Home;

const Wrapper = styled.div``;
