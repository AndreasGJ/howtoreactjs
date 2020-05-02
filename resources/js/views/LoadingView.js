import React, { useState, useEffect } from "react";
import styled from "styled-components";

const LoadingView = () => {
    const [stillLoading, setStillLoading] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setStillLoading(true), 300);

        return () => clearTimeout(timeout);
    }, []);

    if (stillLoading) {
        return <Wrapper>Loading...</Wrapper>;
    }
    return <Wrapper />;
};

export default LoadingView;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
`;
