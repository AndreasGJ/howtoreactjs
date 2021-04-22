import React from "react";
import styled from "styled-components";

import RowText from "@/components/flexible-rows/RowText";
import RowCode from "@/components/flexible-rows/RowCode";

const ROW_TEMPLATES = {
    text: RowText,
    code: RowCode,
};
/**
 * Name: FlexibleContent
 */
const FlexibleContent = ({ rows }) => {
    if (!rows) {
        return null;
    }
    return (
        <Wrapper className="flexible-content">
            {rows
                .filter((row) => ROW_TEMPLATES[row.type])
                .map((row, index) => {
                    const C = ROW_TEMPLATES[row.type];
                    return <C key={index} data={row.attributes} />;
                })}
        </Wrapper>
    );
};

export default React.memo(FlexibleContent);

const Wrapper = styled.div``;
