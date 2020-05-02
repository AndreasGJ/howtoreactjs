import React from "react";
import styled from "styled-components";

import MenuMain from "@/components/MenuMain";

const Header = () => {
    return (
        <Wrapper>
            <MenuMain />
        </Wrapper>
    );
};

export default Header;

const Wrapper = styled.header``;
