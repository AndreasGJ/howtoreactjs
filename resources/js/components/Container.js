import React from "react";
import styled from "styled-components";

/**
 * Name: Container
 */
const Container = ({ children }) => {
    return <Wrapper className="container mx-12">{children}</Wrapper>;
};

export default React.memo(Container);

const Wrapper = styled.div``;
