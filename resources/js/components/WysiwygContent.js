import React from "react";
import styled from "styled-components";

/**
 * Name: WysiwygContent
 */
const WysiwygContent = ({ html }) => {
    return (
        <Wrapper className="wysiwyg-wrapper">
            <div
                className="wysiwyg-inner"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </Wrapper>
    );
};

export default React.memo(WysiwygContent);

const Wrapper = styled.div`
    ul,
    ol {
        margin: 15px 0 15px 18px;
        padding-left: 0;

        li {
            padding-left: 10px;
        }
    }
    ul {
        list-style: disc;
    }
    ol {
        list-style: decimal;
    }
`;
