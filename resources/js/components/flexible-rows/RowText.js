import React from "react";
import styled from "styled-components";

import WysiwygContent from "@/components/WysiwygContent";

/**
 * Name: RowText
 */
const RowText = ({ data = {} }) => {
    return (
        <Wrapper className="row-text my-6">
            {data.title && (
                <h2 className="text-4xl font-bold mb-4">{data.title}</h2>
            )}

            <WysiwygContent html={data.content} />
        </Wrapper>
    );
};

export default React.memo(RowText);

const Wrapper = styled.div``;
