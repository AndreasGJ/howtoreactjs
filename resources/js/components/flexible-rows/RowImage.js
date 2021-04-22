import React from "react";
import styled from "styled-components";

import Image from "@/components/Image";

/**
 * Name: RowImage
 */
const RowImage = ({ data = {} }) => {
    return (
        <Wrapper className="row-image my-6">
            {data.text_before && (
                <div className="row-image__before">{data.text_before}</div>
            )}
            <Image
                shadow
                rounded
                src={data.image}
                alt={data.alt}
                ratio={data.ratio || "16/9"}
            />
            {data.text_after && (
                <div className="row-image__after">{data.text_after}</div>
            )}
        </Wrapper>
    );
};

export default React.memo(RowImage);

const Wrapper = styled.div``;
