import React from "react";
import styled from "styled-components";

import NotReadyContent from "@/components/NotReadyContent";
import usePage from "@/hooks/usePage";

const Page = () => {
    const page = usePage();

    if (!page) {
        return <NotReadyContent item={page} />;
    }
    return <Wrapper>Page: {page.title}</Wrapper>;
};

export default Page;

const Wrapper = styled.div``;
