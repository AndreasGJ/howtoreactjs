import React from "react";
import styled from "styled-components";

import CodePreview from "@/components/CodePreview";

/**
 * Name: RowCode
 */
const RowCode = ({ data = {} }) => {
    return (
        <Wrapper className="row-code my-6">
            <CodePreview value={data.code} mode={data.mode} />
        </Wrapper>
    );
};

export default React.memo(RowCode);

const Wrapper = styled.div``;
