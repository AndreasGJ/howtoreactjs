import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Page = () => {
    const { slug } = useParams();
    return <Wrapper>Page: {slug}</Wrapper>;
};

export default Page;

const Wrapper = styled.div``;
